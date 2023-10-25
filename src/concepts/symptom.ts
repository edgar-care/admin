import Listing from "../components/Listing";
import { faThermometer } from '@fortawesome/free-solid-svg-icons'
import ArrayCell from "../components/cells/ArrayCell";

const symptom = {
    name: "symptom",
    icon: faThermometer,
    component: Listing,
    props: {
        pages: 3,
        action: ["create", "edit", "delete", "display"],
        columns: [
            {label: "id", kind: "id"},
            {label: "code", kind: "code"},
            {label: "conseil", kind: "advice"},
            {label: "nlp", kind: "symptom", customComponent: ArrayCell},
            {label: "actions", kind: "actions"},
        ],
        create: [
            {label: "code", kind: "code", helper: "Code du symptom", required: true, type: "text"},
            {label: "symptom", kind: "symptom", helper: "symptom", required: true, type: "text"},
            {label: "advice", kind: "advice", helper: "Conseil", type: "text"},
            {label: "question", kind: "question", helper: "question", required: true, type: "text"}
        ],
        edit: [
            {label: "code", kind: "code", helper: "Code du symptom", type: "text"},
            {label: "advice", kind: "advice", helper: "Conseil", type: "text"},
            {label: "nlp", kind: "symptom", type: "text"},
        ]
    }
} as any;

export default symptom;