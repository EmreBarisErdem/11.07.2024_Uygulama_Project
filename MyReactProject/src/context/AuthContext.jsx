import { createContext, useState } from "react";
import AuthService from "../services/AuthService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setAuthenticated] = useState(false);
    //kontrol statedir. login mi değil mi diye kontrol sağlar.

    //servisteki metod async ise buırayada async yazmalıyız...
    const login = async (username, password) => {
        try {
            const response = await AuthService.login(username, password);

            // console.log(response);

            if (response.access_token) {
                setAuthenticated(JSON.parse(localStorage.getItem("userToken")));

            }
        }
        catch {
            setAuthenticated(false);
            throw new Error(error);
        }
    }

    const logout = () => {
        AuthService.logout();
        setAuthenticated(false);
    }


    const createUser = async (newUserEmail, newPassword, newUsername) => {
        const response = await AuthService.create(newUserEmail, newPassword, newUsername);

        console.log(response);

     
    }
    return <AuthContext.Provider value = {
        { login, logout, createUser ,isAuthenticated }
    }>
        {children}
    </AuthContext.Provider>
}

export default AuthContext;