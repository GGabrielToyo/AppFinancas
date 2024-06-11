import { Usuario } from "../interfaces/usuario";

const BASE_URL = 'http://localhost:3000/usuario';

export const getUsuario = async () => {
    try {
        const response = await fetch(BASE_URL);
        return await response.json() as Promise<Usuario>;
    } catch (error) {
        console.error('Error fetching despesas:', error);
        return [];
    }
};

export const updateUsuario = async (id: number, usuario: Usuario) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome: usuario.nome, email: usuario.email, endereco: usuario.endereco, rendaMensal: usuario.rendaMensal}),
        });
        return await response.json();
    } catch (error) {
        console.error('Error updating despesa:', error);
        return null;
    }
};


