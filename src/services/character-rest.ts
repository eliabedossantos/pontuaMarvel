import { makeRequest } from './apiServices';

export function getCharacters(obj: Record<string, any> ={}): Promise<any> {
    return new Promise((resolve, reject) => {
        makeRequest('/v1/public/characters', obj)
            .then(response => {
                resolve(response.data.data);
            })
            .catch(err => {
                resolve(null);
            });
    });
}

export function getCharacterById(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
        makeRequest(`/v1/public/characters/${id}`)
            .then(response => {
                resolve(response.data.data);
            })
            .catch(err => {
                resolve(null);
            });
    });
}