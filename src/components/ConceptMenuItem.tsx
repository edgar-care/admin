import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import clsx from 'clsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ConceptMenuItem({label, icon, conceptName}: ConceptMenuItemProps) {
    let { concept: currentConcept } = useParams();
    const navigate = useNavigate();
    const onClick = useCallback(() => {
        navigate(conceptName)
    }, [navigate, conceptName]);

    return (
        <div onClick={onClick} className={clsx("cursor-pointer font-medium p-4 rounded-xl h-8 flex items-center", currentConcept === conceptName ? "bg-blue-100 text-black" : "text-white hover:bg-blue-100 hover:text-black")}>
            <div className="w-10">
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className={"hidden md:block"}>
                {label}
            </div>
        </div>
    )
}

export interface ConceptMenuItemProps {
    label: string;
    icon?: any;
    conceptName: string;
}

export default ConceptMenuItem;