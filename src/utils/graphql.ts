export function sendQuery(name: string, query: string, variables: any = {}) {
    return fetch(`${process.env.REACT_APP_API_URL}/graphql` || '', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "edgar-auth-key": process.env.REACT_APP_API_KEY_VALUE || ''
        },
        body: JSON.stringify({
            query,
            variables
        })
    }).then((data) => {
        return (data.json().then((response) => {
            return response.data[name];
        }));
    })
    .catch((error) => {
        console.error('GraphQL Request Error:', error);
    });
}