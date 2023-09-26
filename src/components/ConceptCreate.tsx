// import { useState } from "react";
import { useParams } from "react-router-dom";
import * as concepts from "./../concepts";
import { useForm } from "react-hook-form";
import { useCallback } from "react";
import Field from "./fields/Field";
import FormErrorPannel from "./FormErrorPannel";

export function ConceptCreate(props: ConceptCreateProps) {
    let { concept } = useParams();
    
    const conceptDefinition = (concepts as any)[concept || '']?.default;
    
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    
    const onSubmit = useCallback((data: any) => {
        alert(JSON.stringify(data))
    }, []);
    
    if (!conceptDefinition || !conceptDefinition?.props?.create) {
        return <div>Création impossible</div>
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