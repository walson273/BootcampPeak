import React from 'react';
import { useState } from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";

export const BSlide = (prop) => {
    const [open, setOpen] = useState(true);
    return (
        <React.Fragment>
            <div className={'slidebar '} style={{ width: open ? '90px' : '210px' }}>
<<<<<<< HEAD
                <IoIosArrowDroprightCircle id='flechita' className={`arrow ${!open && "rotate-180"}`} style={{ margin: open ? '352px -90px 0px 0px' : '352px -211px 0px 0px' }} onClick={() => setOpen(!open)}/>
=======
                <IoIosArrowDroprightCircle id='flechita' className={`arrow ${!open && "rotate=180"}`} style={{margin: open ? '352px -90px 0px 0px' : '352px -211px 0px 0px'}} onClick={() => setOpen(!open)} />
>>>>>>> e8b5e28525aa62085817a8dbfd9c4ebebe1e3420
                <nav>
                    <ul className='nav'>
                        <div id="imagencita">
                            <img src="imagencitas/peaku.png" alt="Logo" />
                            <h2 id='letrita' >PeakU</h2>
                        </div>
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
        </React.Fragment>
    );
}