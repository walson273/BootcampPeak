import server from "./server.js";
import './associations.js';



server.listen(5555, () => {
    console.log('ejecutando mi rest api desde el puerto 5555');
})