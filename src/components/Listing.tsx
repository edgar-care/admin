import { useCallback, useEffect, useState } from "react";
import * as conceptsRequests from "../graphql"
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Listing({name, columns, action, pages}: ListingProps) {
    const [requests, setRequests] = useState<any>(undefined);
    const [error, setError] = useState<any>(undefined);
    const [values, setValues] = useState<any>(undefined);
    const [totalValues, setTotalValues] = useState<any>(undefined);
    const [page, setPage] = useState<number>(0);
    const navigate = useNavigate();
    const onAdd = useCallback(() => {
        navigate(`create`);
    }, [navigate]);

    const onAction = useCallback((id: any, action: any) => {
        navigate(`${id}/${action}`);
    }, [navigate]);
    
    useEffect(() => {
        const moduleName = `${name?.toUpperCase()}_REQUESTS`;
        setRequests((conceptsRequests as any)[moduleName]);
        (conceptsRequests as any)[moduleName].gets().then((response: any) => {
            setValues(response.slice(page * (pages || 0), page * (pages || 0) + (pages || 0)));
            setTotalValues(response);
        }).catch((err: any) => {
            setError(err);
        });
    }, [name, setRequests, setValues, setError, pages, page, setTotalValues]);
    
    const onPreviousPage = useCallback(() => {
        if (page - 1 < 0) {
            return;
        }
        setPage(page - 1);
        setValues(totalValues.slice((page - 1) * (pages || 0), (page - 1) * (pages || 0) + (pages || 0)));
    }, [pages, page, setPage, totalValues]);

    const onNextPage = useCallback(() => {
        if (totalValues.length <= (pages || 0) * (page + 1)) {
            return;
        }
        setPage(page + 1);
        setValues(totalValues.slice((page + 1) * (pages || 0), (page + 1) * (pages || 0) + (pages || 0)));
    }, [pages, page, setPage, totalValues]);

    if (!requests || !values) {
        return <div>loading</div>
    }
    if (error) {
        return <div>{error}</div>
    }
    return (
        <div className="flex flex-col space-y-10 w-full">
            <div className={"font-bold text-3xl"}>{name}</div>
            {action?.includes('create') && <Button onClick={onAdd} label="Ajouter" icon={faAdd}/>}
            <div className="flex flex-col gap-2">
                <table className="bg-white rounded border-2">
                    <thead>
                        <tr>
                            {columns &&
                                columns.map((col: any) => (
                                    <th
                                        key={col.kind}
                                        className={`border ${col?.size || 'w-auto'} ${col?.color ? `bg-${col?.color}-500`: 'bg-white'}`}
                                    >
                                        {col.label}
                                    </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {values.map((value: any, index: number) => (
                            <tr key={index}>
                                {columns.map((col: any) => {
                                    const cellValue = col?.customComponent ? <col.customComponent value={value[col.kind]}/> : <>{value[col.kind]}</>
                                    return (
                                        <td
                                            key={col.kind}
                                            className={`border p-1 ${col?.color ? `bg-${col?.color}-500`: 'bg-white'}`}
                                        >
                                            {col.kind === 'actions' && 
                                                <div className="flex gap-2 p-1">
                                                    {action.includes("display") && <Button onClick={() => onAction(value?.id, "")} icon={faEye}/>}
                                                    {action.includes("edit") && <Button onClick={() => onAction(value?.id, "edit")} icon={faPencil}/>}
                                                    {action.includes("delete") && <Button onClick={() => onAction(value?.id, "delete")} icon={faTrash} hoverBackgroundColor={"red-500"}/>}
                                                </div>
                                            }
                                            {cellValue}
                                        </td>)
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="w-full justify-end items-center flex flex-row gap-4 text-gray-500 pr-1">
                    <FontAwesomeIcon icon={faArrowLeft} onClick={onPreviousPage} />
                    <div>{page}</div>
                    <FontAwesomeIcon icon={faArrowRight} onClick={onNextPage} />
                </div> 
            </div> 
        </div>
    );
}

export interface ListingProps {
    name?: string;
    columns?: any;
    action?: any;
    pages?: number;
}

export default Listing;