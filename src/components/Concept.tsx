import { useParams } from "react-router-dom";
import * as concepts from "./../concepts";

export function Concept(props: ConceptProps) {
    let { concept } = useParams();
    const conceptDefinition = (concepts as any)[concept || '']?.default;
    
    
    if (conceptDefinition === undefined) return (<div>Pas de concept définie</div>)

    return (
        <div className="w-full">
            {conceptDefinition.component({name: conceptDefinition.name, ...conceptDefinition.props})}
        </div>
    );
}

export interface ConceptProps {

}

export default Concept;