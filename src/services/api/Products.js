import http from "./http";

export const getProducts = async page => {
    return await http.get(`/Products?page=${page}`);
};

export const getProductById = async id => {
    return await http.get(`/Products/${id}`);
};
