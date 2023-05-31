import { useQuery } from "react-query";
import axios, { AxiosPromise } from "axios"
import { ProdutoResponse } from "../components/interface/ProdutoData";

const API_URL = "https://loja-online-production.up.railway.app/api"

const fetchdata = async (): AxiosPromise<ProdutoResponse> => {
    const response = axios.get<ProdutoResponse>(API_URL + "/produtos");
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

