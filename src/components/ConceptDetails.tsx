// import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as conceptsRequests from "../graphql"
import { useCallback, useEffect, useState } from "react";
import Button from "./Button";

export function ConceptDetails(props: ConceptDetailsProps) {
    let { concept, id } = useParams();
    const [error, setError] = useState<any>(undefined);
    const [values, setValues] = useState<any>(undefined);
    const navigate = useNavigate();
    useEffect(() => {
        const moduleName = `${concept?.toUpperCase()}_REQUESTS`;
        (conceptsRequests as any)[moduleName].get(id).then((response: any) => {
            setValues(response);
        }).catch((err: any) => {
            setError(err);
        });
    }, [concept, id, setValues, setError]);

    const onReturn = useCallback(() => {
        navigate(`/${concept}`);
    }, [navigate, concept]);
    if (!values) {
        return <div>loading</div>
    }

    if (error) {
        return <div>{error}</div>
    }
    
    return (
        <pre>
            {JSON.stringify(values, null, 2)}
            <Button label="retour" onClick={onReturn}/>
        </pre>
    );
}

export interface ConceptDetailsProps {

}

export default ConceptDetails;