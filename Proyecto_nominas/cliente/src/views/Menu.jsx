import React from 'react';
import { useState } from 'react';
import * as data from '../components/S_data.jsx'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import {Outlet} from "react-router-dom";

export default function menu() {
  return (
    <>
      <div >
        <BSlide dat={data.slideBar} />
        <Outlet></Outlet>
      </div>
    </>
  );
}

const BSlide = (prop) => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <div className='slidebar border' style={{ width: open ? '90px' : '210px' }}>
        <IoIosArrowDroprightCircle id='flechita' className={`arrow ${!open && "rotate-180"}`} style={{ margin: open ? '352px -90px 0px 0px' : '352px -211px 0px 0px' }} onClick={() => setOpen(!open)} />
        <div className='col border'>
          <div className='row-2 border'>
            <div className="row" >
              <div className='col-3 border' id='imagencita'>
                <img src="/Imagen_1.png" alt="Logo" />
              </div>
              <div className='col-9' id='pruebita'>
                <h4 id="letrita" >TELEPERFUMES</h4>
              </div>
            </div>
          </div>
          <div className='row-10 border bg-info'>
            <nav>
              <ul className='nav'>
                {prop.dat.map((iter) => (
                  <li className='box_items list-group-item nav-item'>
                    <div className={open ? 'cont_items' : 'cont_items active'}>
                      <a className={`btn btn-light ${open ? 'boton' : 'boton active'} `} href={iter.link} >
                        <div className={open ? 'iconsize' : 'iconsize active'}>{iter.icon}</div>
                        <h6 className={open ? 'nombreslide' : 'nombreslide active'} > {iter.name} </h6>
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