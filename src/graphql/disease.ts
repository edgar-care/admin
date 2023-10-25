import { sendQuery } from "../utils/graphql";

export const DISEASE_REQUESTS = {
    get: (id: string) => {
        return sendQuery("getDiseaseById",
            `query getDiseaseById($id: String!) {
                getDiseaseById(id: $id) {
                    id
                    code
                    name
                    symptoms
                    advice
                }
            }`,
            {id}
        );
    },
    gets: () => {
        return sendQuery("getDiseases",
            `query getDiseases {
                getDiseases {
                    id
                    code
                    name
                    symptoms
                    advice
                }
            }`
        );
    },
    create: (data: any) => {
        return sendQuery("createDisease",
            `mutation createDisease($code: String!, $name: String!, $symptoms: [String!]!, $advice: String) {
                createDisease(code: $code, name: $name, symptoms: $symptoms, advice: $advice) {
                    id
                }
            }`,
            {...data}
        );
    },
    delete: (id: string) => {
        return sendQuery("deleteDisease",
            `mutation deleteDisease($id: String!) {
                deleteDisease(id: $id)
            }`,
            {id}
        );
    },
    update: (id: string, data: any) => {
        return sendQuery("updateDisease",
            `mutation updateDisease($id: String!, $code: String, $name: String, $symptoms: [String!], $advice: String) {
                updateDisease(id: $id, code: $code, name: $name, symptoms: $symptoms, advice: $advice) {
                    id
                }
            }`,
            {id, ...data}
        );
    }
}