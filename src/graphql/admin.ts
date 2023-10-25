import { sendQuery } from "../utils/graphql";

export const ADMIN_REQUESTS = {
    get: (id: string) => {
        return sendQuery("getAdminById",
            `query getAdminById($id: String!) {
                getAdminById(id: $id) {
                    id,
                    name,
                    lastName,
                    email,
                    password
                }
            }`,
            {id}
        );
    },
    gets: () => {
        return sendQuery("getAdmins",
            `query getAdmins {
                getAdmins {
                    id,
                    name,
                    lastName,
                    email
                }
            }`
        );
    },
    create: (data: any) => {
        const cookies = document.cookie.split("; ").reduce((acc: any, val: any) => {
            const splitted = val.split("=")
            acc[splitted[0]] = splitted[1]
            return acc;
        }, {});
        return fetch(`${process.env.REACT_APP_API_URL}/auth/a/register` || '', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...data,
                token: cookies._auth
            })
        }).then((data) => {
            return (data.json().then((response) => {
                return response.data;
            }));
        })
        .catch((error) => {
            console.error('Register Request Error:', error);
        });
    },
    delete: (id: string) => {
        return sendQuery("deleteAdmin",
            `mutation deleteAdmin($id: String!) {
                deleteAdmin(id: $id)
            }`,
            {id}
        );
    },
    update: (id: string, data: any) => {
        return sendQuery("updateAdmin",
            `mutation updateSymptom($id: String!, $email: String, $password: String, $name: String, $lastName: String) {
                updateAdmin(id: $id, email: $email, password: $password, name: $name, lastName: $lastName) {
                    id
                }
            }`,
            {id, ...data}
        );
    }
}