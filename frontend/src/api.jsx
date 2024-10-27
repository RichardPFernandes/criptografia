import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:8081'
});

export async function encriptarMensagem(mensagem) {
    const {data} = await api.post('/api/encriptar', {mensagem});
    return data;

}

export async function decriptarMensagem(mensagem) {
    const {data} = await api.post('/api/decriptar', {mensagem});
    return data;

}