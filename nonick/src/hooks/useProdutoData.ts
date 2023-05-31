import { useQuery } from "react-query";
import axios, { AxiosPromise } from "axios"
import { ProdutoRespose } from "../components/interface/ProdutoData";

const API_URL = "https://loja-online-production.up.railway.app/api"

const fetchdata = async (): AxiosPromise<ProdutoRespose> => {
    const response = axios.get<ProdutoRespose>(API_URL + "/produtos");
    return response;
}

export function useProdutoData() {
    const query = useQuery({
        queryFn: fetchdata,
        queryKey: ['produto-data']
    })

    return {
        ...query,
        data: query.data?.data
    };
}

