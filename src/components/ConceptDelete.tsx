// import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as conceptsRequests from "../graphql"
import { useCallback, useEffect, useState } from "react";
import Button from "./Button";

export function ConceptDelete(props: ConceptDeleteProps) {
    let { concept, id } = useParams();
    const [requests, setRequests] = useState<any>(undefined);
    const [error, setError] = useState<any>(undefined);
    const navigate = useNavigate();
    useEffect(() => {
        const moduleName = `${concept?.toUpperCase()}_REQUESTS`;
        setRequests((conceptsRequests as any)[moduleName]);
    }, [concept, setError]);

    const onReturn = useCallback(() => {
        navigate(`/${concept}`);
    }, [navigate, concept]);
    const onDelete = useCallback(() => {
        requests.delete(id).then(() => navigate(`/${concept}`)).catch((err: any) => setError(err));
    }, [requests, id, navigate, setError, concept]);

    if (error) {
        return <div>{error}</div>
    }
    
    return (
        <pre className="flex flex-col gap-4">
            Voulez vous vraiment supprimer cette element (id: {id}) ?
            <div className="flex flex-row gap-2">
                <Button onClick={onDelete} label="valider"/>
                <Button label="retour" onClick={onReturn}/>
            </div>
        </pre>
    );
}

export interface ConceptDeleteProps {

}

export default ConceptDelete;