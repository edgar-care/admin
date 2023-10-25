import {Field, FieldProps} from "./Field";

export function PasswordField(props: PasswordFieldProps) {

    return <Field 
        label={"Mot de passe"}
        kind={"password"}
        helper={"Votre mot de passe"}
        maxLength={64}
        type={"password"}
        {...props}
    />;
}

export interface PasswordFieldProps extends FieldProps {
}

export default PasswordField;