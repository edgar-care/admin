import { useNavigate, useParams } from "react-router-dom";
import * as concepts from "./../concepts";
import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import Field from "./fields/Field";
import * as conceptsRequests from "../graphql"
import FormErrorPannel from "./FormErrorPannel";

export function ConceptCreate(props: ConceptCreateProps) {
    let { concept } = useParams();
    const [requests, setRequests] = useState<any>(undefined);
    const [error, setError] = useState<any>(undefined);
    const navigate = useNavigate();

    useEffect(() => {
        const moduleName = `${concept?.toUpperCase()}_REQUESTS`;
        setRequests((conceptsRequests as any)[moduleName]);
    }, [concept, setRequests]);
    const conceptDefinition = (concepts as any)[concept || '']?.default;
    
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    
    const onSubmit = useCallback((data: any) => {
        requests.create(data).then(() => {
            navigate(`/${concept}`);
        }).catch((err: any) => {setError(err)});
    }, [requests, navigate, concept]);
    
    if (!conceptDefinition || !conceptDefinition?.props?.create || error) {
        return <div>Création impossible {error}</div>
    }
    
    return (
        <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
                {conceptDefinition?.props?.create.map((field: any, index: number) => {
                    if (field?.field) return <field.field control={control} errors={errors}/>;
                    return (
                        <div key={index}>
                            <Field {...field} control={control} errors={errors}/>
                        </div>
                        );
                    }
                )}
                <input type="submit" />
            </form>
            <FormErrorPannel errors={errors}/>
        </div>
    );
}

export interface ConceptCreateProps {

}

export default ConceptCreate;