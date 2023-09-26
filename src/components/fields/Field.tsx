import clsx from "clsx";
import { Controller } from "react-hook-form";

export function Field({ label, helper, kind, control, ...props}: FieldProps) {
    return (
        <div className="flex flex-col">
            <text className={clsx("font-bold", props.errors[kind || ''] && "text-red-700")}>{label}{props?.required && '*'}</text>
            <Controller
                    name={kind || ""}
                    control={control}
                    rules={{
                        ...props,
                        pattern: {value: props.pattern, message: `pattern de ${kind} est invalide`},
                        maxLength: {value: props.maxLength, message: `${kind} est trop long`},
                        minLength: {value: props.minLength, message: `${kind} est trop court`},
                        max: {value: props.max, message: `${kind} est trop gros`},
                        min: {value: props.min, message: `${kind} est trop petit`},
                    }}
                    defaultValue={props.defaultValue}
                    render={({ field }) => {
                        return <input className={clsx("border-2 p-2 focus:outline-none focus:border-[#335FC2] rounded", props.errors[kind || ''] && "border-red-700 focus:border-red-700")} placeholder={props.placeholder} type={props.type} {...field}/>
                    }}
                />
            <text className={"font-light text-gray-400 text-sm italic"}>{helper}</text>
        </div>);
}

export interface FieldProps {
    type?: string;
    label?: string;
    placeholder?: string;
    helper?: string;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    max?: any;
    maxLength?: any;
    min?: any;
    minLength?: any;
    value?: any;
    defaultValue?: any;
    name?: any;
    onBlur?: any;
    onChange?: any;
    ref?: any;
    pattern?: any;
    kind?: string;
    control?: any;
    errors?: any;
}

export default Field;