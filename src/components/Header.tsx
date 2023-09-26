import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {useAuthUser, useSignOut} from 'react-auth-kit'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export function Header() {
    const navigate = useNavigate();
    const user = useAuthUser();
    const signOut = useSignOut()

    const onLogoClick = useCallback(() => {
        navigate('/');
    }, [navigate]);
    const onLogout = useCallback(() => {
        try {
            signOut()
        } catch(err) {
            console.log(err);
        }
    }, [signOut]);
    return (
        <div className={"flex h-24 justify-between font-extrabold bg-white shadow-lg z-50"}>
            <div className={"flex w-1/6 bg-[#335FC2] text-white items-center justify-center p-8"} onClick={onLogoClick}>
                <img src={"/assets/full-width-white-edgar-logo.svg"} className="w-3/4" alt="Logo" />
            </div>
            <div className={"flex items-center pr-8 gap-4"}>
                {user()?.email}
                <FontAwesomeIcon icon={faRightFromBracket} onClick={onLogout} className="hover:text-red-500" size="lg"/>
            </div>
        </div>
    );
}

export default Header;