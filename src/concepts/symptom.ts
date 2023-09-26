import Listing from "../components/Listing";
import { faThermometer } from '@fortawesome/free-solid-svg-icons'
import EmailField from "../components/fields/EmailField";

const symptom = {
    name: "symptom",
    icon: faThermometer,
    component: Listing,
    props: {
        action: ["create", "update", "delete", "display"],
        columns: [
            {label: "id", kind: "id"},
            {label: "code", kind: "code"},
            {label: "actions", kind: "actions"},
            {label: "action2s", kind: "actions"},
            {label: "another", kind: "another"},
        ],
        create: [
            {label: "email", kind: "email", field: EmailField},
            {label: "code", kind: "code", helper: "Code du symptom", type: "text"}
        ],
        edit: [
            {label: "code", kind: "code", helper: "Code du symptom", type: "text"},
            {label: "advice", kind: "advice", helper: "Conseil", type: "text"}
        ]
    }
} as any;

export default symptom;