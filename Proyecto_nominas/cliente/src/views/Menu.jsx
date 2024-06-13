import React from 'react';
import { useState, useEffect } from 'react';
import * as data from '../components/S_data.jsx'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { type_user } from "../services/ServicioUsuarios";
import { CiLogout } from "react-icons/ci";
import { Button } from '@mui/material';
import ACCESO_DENEGADO from '../components/ACCESO_DENEGADO.jsx';


export async function type_username(info) {
  const type_u = await type_user(info);
  const h = type_u.data.id_cargo;
  return h;
  //hola mundo
}

export default function menu() {
  const usuarioID = localStorage.getItem('IDUsuario')
  const [h, setH] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const dato_r = { "id": usuarioID };
      const userRole = await type_username(dato_r);
      setH(userRole);
    };
    fetchData();
  }, []);

  if (usuarioID) {
    return (
      <>
        <div className='contenedorMenu'>
          <BSlide dat={h === 5 ? data.slideBar_adm : data.slideBar} id={usuarioID} />
          <Outlet />
        </div>
      </>
    );
  }
  else {

    return (
      <>
        {
          <ACCESO_DENEGADO ></ACCESO_DENEGADO>
        }
      </>
    )
  }
}

const BSlide = (prop) => {
  const navigate = useNavigate()
  function cerrarSesion() {
    navigate(`/login`)
    localStorage.removeItem('IDEquipo')
    localStorage.removeItem('IDUsuario')
    localStorage.removeItem('CargoUsuario')
    console.log('ciao');
  }
  const [open, setOpen] = useState(true);
  const calculateMarginTop = () => {
    const b_marginTop_adm = "25rem";
    const b_marginTop = "29.3rem";
    return prop.dat.length === 3 ? b_marginTop_adm : b_marginTop;
  };
  return (
    <React.Fragment>
      <div className='slidebar border' style={{ width: open ? '90px' : '280px', transition: open ? 'width 1s' : 'width 1s' }}>
        <IoIosArrowDroprightCircle id='arrow' className={`${!open && "rotate-180"}`} style={{ margin: open ? '0.9rem 4.5rem' : '0.9rem 16.3rem', transition: open ? 'margin 1s' : 'margin 1s' }} onClick={() => setOpen(!open)} />
          <div className='col '>
            <Link to={'http://localhost:5173/menu'} >
            <img src="/Imagen_1.png" id='tele' alt="Logo" />
            <div className='row-3  ' style={{ height: "4rem", borderBottom: "0.5px solid #E7E7E7" }}>
              {/* <div className="row d-flex justify-content-center align-items-center"> */}

              <div className='d-flex justify-content-center align-items-center ' id='cont_tittle' >

                <h3 className={open ? 'tittle' : 'tittle active'} >TELEPERFUMES</h3>
              </div>

            </div>
            </Link>

            <div className='row-6 mt-3 '>
              <nav>
                <ul >
                  {prop.dat.map((iter) => (
                    <li className='box_items list-group-item nav-item '>
                      <div className={open ? 'cont_items' : 'cont_items active'} >
                        <Link className='btn btn-outline-primary iconsize ' to={`${iter.link}`} >
                          <div className='colum_opc'>
                            <div className='iconitos'>{iter.icon} </div>
                            <h6 className={open ? 'nombres' : 'nombres active'} > {iter.name} </h6>
                          </div>
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className='row-2' style={{ marginTop: calculateMarginTop() }}>
              <div className={open ? 'cont_items' : 'cont_items active'} >
                <Link className='btn btn-outline-primary iconsize' onClick={() => { cerrarSesion() }}>
                  <div className='colum_opc'>
                    <div className='iconitos'><CiLogout /></div>
                    <h6 className={open ? 'nombres' : 'nombres active'} >Cerrar sesión</h6>
                  </div>
                </Link>
              </div>
            </div>
          </div>
      </div>
    </React.Fragment>
  );
}