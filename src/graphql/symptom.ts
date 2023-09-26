import { GraphQLClient } from 'graphql-request';

export const SYMPTOM_REQUESTS = {
    get: (id: string) => {},
    gets: () => {
        // const query = `
        //     query getSymptoms {
	    //         getSymptoms {
		//             id
		//             code
		//             symptom
		//             question
		//             advice
		//         }
        //     }
        // `
        // const client = new GraphQLClient("https://dvpm9zw6vc.execute-api.eu-west-3.amazonaws.com/graphql", { headers: {"edgar-auth-key": "TWFydmluTGVQbHVzQmVhdURlTGFUZXJyZTwz"} });
        // client.request(query)
        //   .then((data) => {
        //     console.log('GraphQL Data:', data);
        //   })
        //   .catch((error) => {
        //     console.error('GraphQL Request Error:', error);
        //   });
        return ([
            {id: "1", code: "maux_de_ventre", symptom: ["ventre", "belly"], advice: "pas obligé", question: "une question ?"},
            {id: "2", code: "maux_de_tete", symptom: ["tete", "head"], question: "une question 2 ?"},
        ] as any);
    },
    create: (data: any) => {},
    delete: (id: string) => {},
    update: (id: string, data: any) => {}
}