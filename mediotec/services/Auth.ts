import { AuthData } from "../contexts/authContext";

export const Login = async (email: string, password: string): Promise<AuthData | undefined> => {
    try {
        const response = await fetch('https://agendasenacapi-production.up.railway.app/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userEmail: email.toLowerCase(),
                userSenha: password,
            }),
        });

        if (!response.ok) {
            throw new Error('Erro no login');
        }

        const result = await response.json();
        console.log(result)
        return result
       
    } catch (err) {
        console.log(err)
        return undefined
    }
}