import axios from 'axios'; //Peticiones de cliente-servidor

export async function mostrar_equipos() {
    try {
        const url = `${import.meta.env.VITE_URL_POST}/equipos`
        const { data } = await axios.get(url)
        // const { data } = await axios.post(url)
        // const { data } = await axios.put(url)
        // const { data } = await axios.delete(url)

        return data
    } catch (error) {
        console.log(error);
    }
}
