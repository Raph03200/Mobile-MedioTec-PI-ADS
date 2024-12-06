import { createContext, ReactNode, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Login } from "../services/Auth";

export type AuthData = {
    Token: string,
    TipoUser: string,
    NomeUsuario: string,
    IdUser: number
}

type contextType = {
    authData?: AuthData,
    signIn: (email: string, password: string) => Promise<AuthData | undefined>,
    signOut: () => Promise<void>
}

export const AuthContext = createContext<contextType>({} as contextType)

export const AuthProvider = ({ children }: {children: ReactNode}) => {

    const [authData, setAuth] = useState<AuthData>()

    const loadStorage = async () => {
        const auth = await AsyncStorage.getItem('@AuthData')
        if(auth){
            setAuth(JSON.parse(auth))
        }
    }

    useEffect(() => {
        loadStorage()
    }, [])

    const signIn = async (email: string, password: string): Promise<AuthData | undefined> => {
        const auth = await Login(email, password)

        if (!auth) {
            throw new Error("Login failed. Auth data is undefined.")
        }

        setAuth(auth)
        try {
            await AsyncStorage.setItem('@AuthData', JSON.stringify(auth))
        } catch (error) {
            console.error("Failed to save auth data:", error)
        }
        return auth
    }

    const signOut = async () => {
        setAuth(undefined)
        AsyncStorage.removeItem('@AuthData')
        return
    }

    return(
        <AuthContext.Provider value={{ authData, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}