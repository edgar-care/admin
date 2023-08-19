import { useParams } from "react-router-dom";

export function Concept(props: ConceptProps) {
    let { concept } = useParams();
    return (
        <div>
            WORK IN PROGRESS ({concept})
        </div>);
}

export interface ConceptProps {

}

export default Concept;