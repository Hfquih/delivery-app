import React from 'react';

type Auth ={
    token:string | null,
    login:(token:string)=>void,
    logout:()=>void
}

const AuthContext = React.createContext<Auth | null>(null);

type AuthProvider = {
    children : React.ReactNode
}

export const AuthProvider = ({ children }:AuthProvider) => {
    const [token, setToken] = React.useState<string | null>(
        localStorage.getItem('token')
    );

    const login = (newToken:string) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, login , logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;