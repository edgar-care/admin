import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function Header() {
    const navigate = useNavigate();

    const onLogoClick = useCallback(() => {
        navigate('/');
    }, [navigate]);
    return (
        <div className={"flex h-24 justify-between font-extrabold bg-white shadow-lg z-50"}>
            <div className={"flex w-1/6 bg-[#335FC2] text-white items-center justify-center p-8"} onClick={onLogoClick}>
                <img src={"/assets/full-width-white-edgar-logo.svg"} className="w-3/4" alt="Logo" />
            </div>
            <div className={"flex items-center pr-8"}>
                Account stuff
            </div>
        </div>
    );
}

export default Header;