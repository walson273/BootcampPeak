import axios from 'axios'; //Peticiones de cliente-servidor

export async function mostrar_usuarios() {
    try {
        const url = `${import.meta.env.VITE_URL_POST}/usuarios`
        const { data } = await axios(url)
        // const { data } = await axios.post(url)
        // const { data } = await axios.put(url)
        // const { data } = await axios.delete(url)

        return data
    } catch (error) {
        console.log(error);
    }
}


export async function mostrar_usuarios_id(info) {
    try {
        const url = `${import.meta.env.VITE_URL_POST}/usuarios/${info}`
       
        const { data } = await axios(url)
        // const { data } = await axios.post(url)
        // const { data } = await axios.put(url)
        // const { data } = await axios.delete(url)

        return data
    } catch (error) {
        console.log(error);
    }
}