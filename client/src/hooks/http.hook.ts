import {useState, useCallback} from "react";

type methodsType = 'GET' | 'POST' | 'PUT' | 'UPDATE' | 'DELETE'
type requestType = <T>(url: string, method?: methodsType, body?: any, headers?: { [key: string]: any }) => Promise<T>

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request: requestType = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true);
        try {
            if (body) {
                body = JSON.stringify(body);
                headers["Content-Type"] = "application/json";
            }
            const response = await fetch(url, {method, body, headers})
            const data = await response.json();
            if (!response.ok) {
                throw data
            }
            setLoading(false);
            return data
        } catch (e) {
            setLoading(false);
            setError(e);
            throw e
        }
    }, [])

    const clearError = () => setError(null)
    return {loading, request, error, clearError}
}