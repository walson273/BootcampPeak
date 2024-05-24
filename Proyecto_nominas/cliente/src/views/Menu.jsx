import React from 'react';
import { useState } from 'react';
import * as data from '../components/S_data.jsx'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Outlet } from "react-router-dom";
import { type_user } from "../services/ServicioUsuarios";


export async function type_username(info) {
  const type_u = await type_user(info)
  const h = type_u.data.id_cargo;
  if(h == "2"){
    //document.getElementById("cosas").style.color = "red";
  }
  return h
}


export default function menu() {
  return (
    <>
      <div className='contenedorMenu'>
        <BSlide id="cosas" dat={data.slideBar} />
        <Outlet />
      </div>
    </>
  );
}

const BSlide = (prop) => {
  const [open, setOpen] = useState(true);
  const dat_u = {"id" : 6};
  const algo = type_username(dat_u);

  return (
    <React.Fragment>
      <div className='slidebar border' style={{ width: open ? '90px' : '280px', transition: open ? 'width 1s' : 'width 1s' }}>
        <IoIosArrowDroprightCircle id='flechita' className={`${!open && "rotate-180"}`} style={{ margin: open ? '0.9rem 4.5rem' : '0.9rem 16.3rem', transition: open ? 'margin 1s' : 'margin 1s' }} onClick={() => setOpen(!open)} />
        <div className='col'>
          <img src="/Imagen_1.png" id='tele' alt="Logo" />
          <div className='row-3 ' style={{ height: "4rem", borderBottom: "0.5px solid #E7E7E7" }}>
            {/* <div className="row d-flex justify-content-center align-items-center"> */}

            <div className='d-flex justify-content-center align-items-center ' id='imagencita' >

              <h3 className={open ? 'letrita' : 'letrita active'} >TELEPERFUMES</h3>
            </div>

          </div>
          <div className='row-9 mt-3'>
            <nav>
              <ul >
                {prop.dat.map((iter) => (
                  <li className='box_items list-group-item nav-item '>
                    <div className={open ? 'cont_items' : 'cont_items active'} >
                      <a className='btn btn-outline-primary iconsize ' href={iter.link} >
                        <div className='columnitas'>
                          <div className='iconitos'>{iter.icon} </div>
                          {/* <div className='palabrita' style={{marginLeft: open ? '0.5rem' : '-2.5rem', transition: open ? 'marginLeft 1s' : 'marginLeft 1s'}}> */}
                          <h6 className={open ? 'nombres' : 'nombres active'} > {iter.name} </h6>
                          {/* </div> */}
                          {/* className={`border {open ? 'nombreslide' : 'nombreslide active'}`} */}
                        </div>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}