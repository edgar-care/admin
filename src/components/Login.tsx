import { useForm } from "react-hook-form";
import EmailField from "./fields/EmailField";
import PasswordField from "./fields/PasswordField";
import FormErrorPannel from "./FormErrorPannel";
import { useCallback, useState } from "react";
import { useSignIn } from 'react-auth-kit'
import { useNavigate } from "react-router-dom";

export function Login(props: LoginProps) {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    const [error, setError] = useState(undefined);
    const signIn = useSignIn();
    const navigate = useNavigate();

    const onSubmit = useCallback((data: any) => {
        fetch(`${process.env.REACT_APP_API_URL}/auth/a/login`, {
            method: 'POST',
            body: JSON.stringify(data),
        headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }).then((resp) => {
            resp.json().then((value) => {
                if ((value?.token || []).includes("mismatch")) {
                    setError(value?.token);
                    return;
                };
                signIn({
                    token: value.token,
                    expiresIn: 3600,
                    tokenType: "Bearer",
                    authState: {email: data.email}
                })
                navigate('/');
            });
        }).catch((err) => {
            console.error(err);
        });
    }, [navigate]);

    return (
        <div className="flex bg-[#F1F7FD] h-screen items-center justify-center">
            <div className="flex flex-col w-1/3 p-8 space-y-12 bg-white rounded">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <EmailField control={control} required errors={errors}/>
                    <PasswordField control={control} required errors={errors}/>
                    <div className="flex items-center justify-center">
                        <div className="p-4 mt-4 w-1/3 text-white items-center justify-center flex border rounded bg-blue-400">
                            <input type="submit" />
                        </div>
                    </div>
                </form>
                {error && <div className="bg-red-500 p-2 rounded text-white">{error}</div>}
                {!error && <FormErrorPannel errors={errors}/>}
            </div>
        </div>
    );
}

export interface LoginProps {
}

export default Login;