// import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as concepts from "./../concepts";
import * as conceptsRequests from "../graphql"
import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import Field from "./fields/Field";
import FormErrorPannel from "./FormErrorPannel";
import Button from "./Button";

export function ConceptEdit(props: ConceptEditProps) {
    let { concept, id } = useParams();
    const [requests, setRequests] = useState<any>(undefined);
    const [error, setError] = useState<any>(undefined);
    const [values, setValues] = useState<any>(undefined);
    const navigate = useNavigate();
    useEffect(() => {
        const moduleName = `${concept?.toUpperCase()}_REQUESTS`;
        setRequests((conceptsRequests as any)[moduleName]);
        (conceptsRequests as any)[moduleName].get(id).then((response: any) => {
            setValues(response);
        }).catch((err: any) => {
            setError(err);
        });
    }, [concept, id, setRequests, setValues, setError]);
    const conceptDefinition = (concepts as any)[concept || '']?.default;
    
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    
    const onSubmit = useCallback((data: any) => {
        requests.update(id, data).then(() => {
            navigate(`/${concept}`);
        }).catch((err: any) => {setError(err)});
    }, [requests, id, navigate, concept]);
    
    const onReturn = useCallback(() => navigate(`/${concept}`), [concept, navigate]);

    if (!requests || !values) {
        return <div>loading</div>
    }

    if (!conceptDefinition || !conceptDefinition?.props?.edit || error) {
        return <div>Edition impossible {error}</div>
    }
    
    return (
        <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {conceptDefinition?.props?.edit.map((field: any, index: number) => {
                    if (field?.field) return <field.field control={control} errors={errors} defaultValue={(values as any)[field.kind]}/>;
                    return (
                        <div key={index}>
                            <Field {...field} control={control} errors={errors} defaultValue={(values as any)[field.kind]}/>
                        </div>
                        );
                    }
                )}
                <div className="flex flex-row gap-2">
                    <Button submit label="valider"/>
                    <Button label="retour" onClick={onReturn}/>
                </div>
            </form>
            <FormErrorPannel errors={errors}/>
        </div>
    );
}

export interface ConceptEditProps {

}

export default ConceptEdit;