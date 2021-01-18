import React from 'react';

export const AuthContext = React.createContext({
    token: null,
    userId: null,
    login: Function.prototype,
    logout: Function.prototype,
    isAuth: false
})