import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (APIurl) => {
    const [products, setProducts] = useState([]);
    useEffect(async () => {
        const response = await axios(APIurl);
        setProducts(response.data);
    }, [])
    return products
}

export default useGetProducts