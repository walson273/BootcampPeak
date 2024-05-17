import axios from 'axios'; //Peticiones de cliente-servidor
import React from "react";


export async function mostrar_nominas() {
    //const axios = require('axios').default;
    const url = `${import.meta.env.VITE_URL_POST}/usuarios`
    console.log(url);

    /*axios.get(url).then(function (response) {
        console.log(response);
    })*/
    const [post, setPost] = React.useState(null);
    React.useEffect(() => {
        axios.get(url).then((response) => {
            setPost(response.data);
        });
    }, []);
}
