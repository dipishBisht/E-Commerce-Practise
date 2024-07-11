import { useState, useEffect } from "react"
import axios from "axios";

const useFetchData = () => {
    const [data, setData] = useState();
    useEffect(() => {
        ; (async () => {
            const apiData = await axios.get('https://fakestoreapi.com/products')
            setData(apiData.data)
        })();
    }, [])

    return data;
}

export default useFetchData