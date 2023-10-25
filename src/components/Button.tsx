import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

export function Button({label, icon, onClick, noBackground = false, backgroundColor = "[#335FC2]", hoverBackgroundColor = "[#529F50]", textColor = "white", hoverTextColor = "[#F1F7FD]", submit = false}: ButtonProps) {
    return (
        <div className={"flex"}>
            <div onClick={onClick} className={clsx("flex items-center w-auto rounded p-2 gap-2", !noBackground && `bg-${backgroundColor} hover:bg-${hoverBackgroundColor} text-${textColor} hover:text-${hoverTextColor}`)}>
                {icon && <FontAwesomeIcon icon={icon} />}
                {submit ? <input type="submit" value={label}/> : label}
            </div>
        </div>
    );
}

export interface ButtonProps {
    label?: string;
    icon?: any;
    onClick?: any;
    noBackground?: boolean;
    backgroundColor?: string;
    hoverBackgroundColor?: string;
    textColor?: string;
    hoverTextColor?: string;
    submit?: boolean
}

export default Button;