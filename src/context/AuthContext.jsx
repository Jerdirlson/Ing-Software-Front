import { createContext, useState, useContext, useEffect, Component } from "react";
import Cookies from "js-cookie";
import verifyTokenRequest from "../services/verify_auth.service";
import signin from '../services/auth.service'

/**
 * Creates the context of the current user
 */
const AuthContext = createContext()
/**
 * Export the function to use the context body
 * @returns {Context} Context
 */
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("No AuthContext")
    }
    return context
}
/**
 * Contains the functions of the Context
 * In order to have the user info in the whole app
 * @param {*} param0 
 * @returns {Component} AuthContext.Provider that envolves the app 
 * */
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    
    const signinContext = async (user) => {
        try {
            const res = await signin(user)
            console.log(res)    
            setIsAuthenticated(true)
            setUser(res)
            console.log('asasd')
        } catch (err) {
            console.error(err)
        }
    }
    const logoutContext = () => {
        Cookies.remove("token");
        setUser(null);
        setIsAuthenticated(false);
    };

    useEffect(() => {
        const checkLogin = async () => {
            const cookies = Cookies.get();
            if (!cookies.token) {
                setIsAuthenticated(false);
                return;
            }

            try {
                const res = await verifyTokenRequest(cookies.token);
                console.log('-',res);
                if (!res) return setIsAuthenticated(false);
                setIsAuthenticated(true);
                setUser(res);
            } catch (error) {
                setIsAuthenticated(false);

            }
        };
        checkLogin();
    }, []);
    return (
        <AuthContext.Provider value={{
            signinContext,
            logoutContext,
            user,
            isAuthenticated,
            setUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}