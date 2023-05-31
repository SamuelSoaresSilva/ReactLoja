import { useMutation } from "react-query";
import axios, { AxiosPromise } from "axios";
import { ProdutoData, ProdutoRespose } from "../components/interface/ProdutoData";

const API_URL = "https://loja-online-production.up.railway.app/api";

const updateData = async (data: ProdutoData): AxiosPromise<any> => {
    const response = await axios.put<ProdutoRespose>(`${API_URL}/produtos/${data.id}`, data);
    return response;
};

export function useProdutoData() {
    const mutation = useMutation(updateData);

    return {
        mutation,
    };
}
