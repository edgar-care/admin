// import { useState } from "react";
import { useParams } from "react-router-dom";
import * as concepts from "./../concepts";
import { useForm } from "react-hook-form";
import { useCallback } from "react";
import Field from "./fields/Field";
import FormErrorPannel from "./FormErrorPannel";

export function ConceptEdit(props: ConceptEditProps) {
    let { concept, id } = useParams();

    const values = {code: "maux_de_tete", advice: "sieste"} //@TODO: REPLACE BY A GET WITH ID

    const conceptDefinition = (concepts as any)[concept || '']?.default;
    
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    
    const onSubmit = useCallback((data: any) => {
        alert(JSON.stringify(data))
    }, []);
    
    if (!conceptDefinition || !conceptDefinition?.props?.edit) {
        return <div>Edition impossible</div>
    }
    
    return (
        <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
                {conceptDefinition?.props?.edit.map((field: any, index: number) => {
                    if (field?.field) return <field.field control={control} errors={errors} defaultValue={(values as any)[field.kind]}/>;
                    return (
                        <div key={index}>
                            <Field {...field} control={control} errors={errors} defaultValue={(values as any)[field.kind]}/>
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

export interface ConceptEditProps {

}

export default ConceptEdit;