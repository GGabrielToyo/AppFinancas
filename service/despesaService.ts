import { Despesa } from "../interfaces/despesa";

const BASE_URL = 'http://localhost:3000/despesas';


export const fetchDespesas = async () => {
    try {
        const response = await fetch(BASE_URL);
        return await response.json();
    } catch (error) {
        console.error('Error fetching despesas:', error);
        return [];
    }
};

export const addDespesa = async (despesa: Despesa) => {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ descricao: despesa.descricao, valor: despesa.valor, data: despesa.data }),
        });
        return await response.json();
    } catch (error) {
        console.error('Error adding despesa:', error);
        return null;
    }
};

export const updateDespesa = async (id: number, despesa: Despesa) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ despesa }),
        });
        return await response.json();
    } catch (error) {
        console.error('Error updating despesa:', error);
        return null;
    }
};

export const deleteDespesa = async (id: number) => {
    try {
        await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
        });
        return true;
    } catch (error) {
        console.error('Error deleting despesa:', error);
        return false;
    }
};

export const getDespesas = async (): Promise<number> => {
    try {
        const despesas = await fetchDespesas();
        let total = 0;

        despesas.forEach((despesa: Despesa) => {
            total += despesa.valor;
        });

        return total;
    } catch (error) {
        console.error('Error calculating total despesas:', error);
        return 0;
    }
};
