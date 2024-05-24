import React, { useState } from 'react';
import { crear_usuarios } from '../services/ServicioUsuarios';
import { useLoaderData } from 'react-router-dom';




export async function loader(info) {
    const usuarios = await crear_usuarios(info)

    return usuarios
}


const EmployeeRegistrationForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [id, setId] = useState('');
    const [documentType, setDocumentType] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const registroso = useLoaderData();
    const cargos = registroso[0].data;
    const equipos = registroso[1].data;
    const [dcargos, setCargos] = useState(cargos);
    const [dequipos, setEquipos] = useState(equipos);
    const [position, setPosition] = useState('');
    const [team, setTeam] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName && lastName && id && documentType && email && phoneNumber && password && confirmPassword && position && team) {
            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden.');
                return;
            }
            let datos = { "nombre": firstName, "apellido": lastName, "cedula": id, "numero_telefonico": phoneNumber, "correo": email, "tipo_documento": documentType, "contrasenia": password, "id_cargo":position, "id_equipo":team};
            loader(datos);
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Usuario registrado con exito.",
                showConfirmButton: false,
                timer: 1500,
            });
            /*setTimeout(() => {
                location.href = "http://localhost:5173/menu/buscar";
            }, 1400);*/

        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor llene todos los campos.",
                footer: '<a href="#">Todos son todos</a>'
              });
        }
    };
    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded grid grid-cols-2 gap-4" style={{ borderColor: "grey", borderWidth: "0.01rem", borderStyle: "solid" }}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                    Nombres
                </label>
                <input
                    type="text"
                    id="firstName"
                    placeholder="Escribe tus nombres"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                    Apellidos
                </label>
                <input
                    type="text"
                    id="lastName"
                    placeholder="Escribe tus apellidos"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
                    Numero de identificacion
                </label>
                <input
                    type="number"
                    id="id"
                    placeholder="Escribe tu id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="documentType">
                    Tipo de documento
                </label>
                <select
                    id="documentType"
                    value={documentType}
                    onChange={(e) => setDocumentType(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-select"
                    required
                >
                    <option value="">Elegir...</option>
                    <option value="cedula de ciudadania">Cedula de ciudadania</option>
                    <option value="cedula de extranjeria">Cedula de extranjeria</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="documentType">
                    Cargo
                </label>
                <select
                    id="position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-select"
                    required
                >
                    <option value="">Elegir...</option>
                    {
                        dcargos.map((item, index) => [
                            <>
                                <option key={index} value={item.id}>{item.nombre_puesto}</option>
                            </>
                        ])
                    }
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="documentType">
                    Equipo
                </label>
                <select
                    id="team"
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline form-select"
                    required
                >
                    <option value="">Elegir...</option>
                    {
                        dequipos.map((item, index) => [
                            <>
                                <option key={index} value={item.id}>{item.nombre_equipo}</option>
                            </>
                        ])
                    }
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Correo electronico
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Escribe tu correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                    Numero telefonico
                </label>
                <input
                    type="number"
                    id="phoneNumber"
                    placeholder="Escribe tu numero"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Contraseña
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="Escribe tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                    Confirmar contraseña
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirma tu contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="col-span-2 flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Registrar
                </button>
            </div>
        </form>
    );
};
export default EmployeeRegistrationForm;