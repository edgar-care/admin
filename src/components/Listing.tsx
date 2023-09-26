import { useCallback, useEffect, useState } from "react";
import * as conceptsRequests from "../graphql"
import { useNavigate } from "react-router-dom";

export function Listing({name, columns, action, create, edit, display}: ListingProps) {
    const [requests, setRequests] = useState<any>(undefined);
    const [error, setError] = useState<any>(undefined);
    const navigate = useNavigate();
    const onAdd = useCallback(() => {
        navigate(`create`);
    }, [navigate, name]);

    const onAction = useCallback((id: any, action: any) => {
        navigate(`${id}/${action}`);
    }, [navigate, name]);
    
    useEffect(() => {
        const moduleName = `${name?.toUpperCase()}_REQUESTS`;
        setRequests((conceptsRequests as any)[moduleName]);
    }, [name, conceptsRequests, setRequests]);
    
    if (!requests) {
        return <div>loading</div>
    }
    const values = requests?.gets();
    return (
        <div className="flex flex-col space-y-10 w-full">
            <div className={"font-bold text-3xl"}>{name}</div>
            {action?.includes('create') && <div onClick={onAdd}>ADD</div>}
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
                                        {col.kind === 'actions' && <div onClick={() => onAction(value?.id, "edit")}>edit</div>}
                                        {cellValue}
                                    </td>)
                            })}
                        </tr>
                    ))}
                </tbody>
        </table>
        </div>
    );
}

export interface ListingProps {
    name?: string;
    columns?: any;
    action?: any;
    create?: any;
    edit?: any;
    display?: any;
}

export default Listing;