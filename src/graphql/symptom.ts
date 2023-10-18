import { sendQuery } from "../utils/graphql";

export const SYMPTOM_REQUESTS = {
    get: (id: string) => {
        return sendQuery("getSymptomById",
            `query getSymptomById($id: String!) {
                getSymptomById(id: $id) {
                    id
                    code
                    symptom
                    question
                    advice
                }
            }`,
            {id}
        );
    },
    gets: () => {
        return sendQuery("getSymptoms",
            `query getSymptoms {
                getSymptoms {
                    id
                    code
                    symptom
                    question
                    advice
                }
            }`
        );
    },
    create: (data: any) => {
        return sendQuery("createSymptom",
            `mutation createSymtom($code: String!, $symptom: [String!]!, $advice: String, $question: String!) {
                createSymptom(code: $code, symptom: $symptom, advice: $advice, question: $question) {
                    id
                }
            }`,
            {...data}
        );
    },
    delete: (id: string) => {
        return sendQuery("deleteSymptom",
            `mutation deleteSymptom($id: String!) {
                deleteSymptom(id: $id)
            }`,
            {id}
        );
    },
    update: (id: string, data: any) => {
        return sendQuery("updateSymptom",
            `mutation updateSymtom($id: String!, $code: String, $symptom: [String!], $advice: String, $question: String) {
                updateSymptom(id: $id, code: $code, symptom: $symptom, advice: $advice, question: $question) {
                    id
                }
            }`,
            {id, ...data}
        );
    }
}