import Listing from "../components/Listing";
import { faUserShield } from '@fortawesome/free-solid-svg-icons'
import EmailField from "../components/fields/EmailField";
import PasswordField from "../components/fields/PasswordField";

const admin = {
    name: "admin",
    icon: faUserShield,
    component: Listing,
    props: {
        pages: 3,
        action: ["create", "edit", "delete"],
        columns: [
            {label: "id", kind: "id"},
            {label: "email", kind: "email"},
            {label: "prenom", kind: "name"},
            {label: "nom", kind: "lastName"},
            {label: "actions", kind: "actions"},
        ],
        create: [
            {label: "email", kind: "email", field: EmailField, required: true},
            {label: "password", kind: "password", field: PasswordField, required: true},
            {label: "prenom", kind: "name", type: "text", required: true},
            {label: "nom", kind: "last_name", type: "text", required: true},
        ],
        edit: [
            {label: "email", kind: "email", field: EmailField},
            {label: "prenom", kind: "name", type: "text"},
            {label: "nom", kind: "lastName", type: "text"},
        ]
    }
} as any;

export default admin;