// import { useState } from "react";
import { useParams } from "react-router-dom";
// import * as concepts from "./../concepts";
import symptom from "../concepts/symptom";

export function Concept(props: ConceptProps) {
    let { concept } = useParams();
    // const [conceptObject, setConceptObject] = useState<any>(undefined);
    
    // import(`../concepts/${concept}`).then((data) => setConceptObject(data.default)).catch((err) => setConceptObject(undefined)); 
    
    // if (conceptObject === undefined) return (<div>Pas de concept définie</div>)

    // const conceptObject = Object.keys(concepts).filter((name: string) => concept === name)
    return (
        <div className="w-full">
            {symptom.component({name: symptom.name, ...symptom.props})}
        </div>
    );
}

export interface ConceptProps {

}

export default Concept;