import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { ProdutoData } from "../components/interface/ProdutoData";

const API_URL = "https://loja-online-production.up.railway.app/api";

const updateData = async (data: ProdutoData) => {
    const response = await axios.put(`${API_URL}/produtos/${data.id}`, data);
    return response.data;
};

export function useProdutoDataUpdate() {
    const queryClient = useQueryClient();
    const mutation = useMutation(updateData, {
        onSuccess: () => {
            queryClient.invalidateQueries("produto-data");
        },
    });

    return {
        mutation,
    };
}
