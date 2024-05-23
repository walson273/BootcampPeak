import React from 'react';
import { useState } from 'react';
import * as data from '../data.jsx'
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function menu() {
  return (
    <>
      <div>
        <BSlide dat={data.slideBar} />
      </div>
    </>
  );
}

export const BSlide = (prop) => {
  const [open, setOpen] = useState(true);
  return (
    <React.Fragment>
      <div className='slidebar border' style={{ width: open ? '90px' : '210px' }}>
        <IoIosArrowDroprightCircle id='flechita' className={`arrow ${!open && "rotate-180"}`} style={{ margin: open ? '352px -90px 0px 0px' : '352px -211px 0px 0px' }} onClick={() => setOpen(!open)} />
        <div className='col border bg-success'>
          <div className='row-2 border'>
            <div className="row" id="imagencita">
              <div className='col-2'>
                <img src="Imagen_1.png" alt="Logo" />
              </div>
              <div className='col-10'>
                <h2 id='letrita' >TELEPERFUMES</h2>
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