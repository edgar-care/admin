import {Field, FieldProps} from "./Field";

export function EmailField(props: EmailFieldProps) {
    return <Field label={"Email"} kind={"email"} helper={"Votre adresse Email"} placeholder={"zebulon@edgar-sante.fr"} pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/} maxLength={320} {...props} />;
}

export interface EmailFieldProps extends FieldProps {
}

export default EmailField;