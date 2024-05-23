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
  const [open, setOpen] = useState(true);
  return (
    <React.Fragment>
      <div className='slidebar border' style={{ width: open ? '90px' : '210px', transition: open ? 'width 1s' : 'width 1s' }}>
        <IoIosArrowDroprightCircle id='flechita' className={`${!open && "rotate-180"}`}  style={{margin: open ? '15rem 4.5rem' : '15rem 11.9rem', transition: open ? 'margin 1s' : 'margin 1s'}} onClick={() => setOpen(!open)} />
        <div className='col'>
          <div className='row-3' style={{height: "3.2rem", borderBottom: "0.5px solid gray"}}>
            {/* <div className="row d-flex justify-content-center align-items-center"> */}
            <div className='row'>
              <div className='col-12 d-flex justify-content-center align-items-center bg-info' id='imagencita' style={{ marginLeft: open ? '0.2rem' : '-.4rem', transition: open ? 'marginLeft 1s' : 'marginLeft 1s' }}>
                <img src="/Imagen_1.png" alt="Logo"/>
                <h3  id="letrita" style={{fontSize: open ? '0rem' : '1rem'}}>TELEPERFUMES</h3>
              {/* </div> */}
              {/* <div className='col-9 border bg-black'>
                <h3  id="letrita" >TELEPERFUMES</h3> */}
              {/* </div> */}
            </div>
            </div>
          </div>
          <div className='row-9 mt-3'>
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