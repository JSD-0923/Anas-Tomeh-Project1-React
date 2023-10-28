import { useState, useEffect } from "react";

export const useApi = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(response.statusText);
                const json = await response.json();
                setIsLoading(false);
                setData(json);
                setError(false);
            } catch (error) {
                setError(true);
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url]);
    return { data, isLoading, isError };
};

export default useApi;

