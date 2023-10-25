import Listing from "../components/Listing";
import { faSquareVirus } from '@fortawesome/free-solid-svg-icons'
import ArrayCell from "../components/cells/ArrayCell";

const disease = {
    name: "disease",
    icon: faSquareVirus,
    component: Listing,
    props: {
        pages: 5,
        action: ["create", "edit", "delete", "display"],
        columns: [
            {label: "id", kind: "id"},
            {label: "code", kind: "code"},
            {label: "nom", kind: "name"},
            {label: "conseil", kind: "advice"},
            {label: "symptomes", kind: "symptoms", customComponent: ArrayCell},
            {label: "actions", kind: "actions"},
        ],
        create: [
            {label: "code", kind: "code", helper: "Code de la maladie", required: true, type: "text"},
            {label: "nom", kind: "name", helper: "nom de la maladie", required: true, type: "text"},
            {label: "symptomes", kind: "symptoms", helper: "symptomes", required: true, type: "text"},
            {label: "advice", kind: "advice", helper: "Conseil", type: "text"},
        ],
        edit: [
            {label: "code", kind: "code", helper: "Code de la maladie", type: "text"},
            {label: "nom", kind: "name", helper: "Nom", type: "text"},
            {label: "symptomes", kind: "symptoms", type: "text"},
        ]
    }
} as any;

export default disease;