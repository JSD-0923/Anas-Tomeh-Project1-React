import { useState, useEffect } from "react";

export const useApi = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsPending] = useState(false);
    const [isError, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setIsPending(true);
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(response.statusText);
                const json = await response.json();
                setIsPending(false);
                setData(json);
                setError(false);
            } catch (error) {
                setError(true);
                setIsPending(false);
            }
        };
        fetchData();
    }, [url]);
    return { data, isLoading, isError };
};

export default useApi;

