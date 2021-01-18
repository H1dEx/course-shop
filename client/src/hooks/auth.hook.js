import {useCallback, useEffect, useState} from "react";


export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null)

    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken);
        setUserId(id);
        localStorage.setItem('userData', JSON.stringify({token: jwtToken, userId: id}))
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'));
        if (data && data.token) {
            login(data.token, data.userId)
        }
    }, [login])

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        localStorage.removeItem('userData')
    }, [])

    return {login, logout, userId, token}
}