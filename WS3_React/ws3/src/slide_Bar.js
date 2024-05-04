import React from 'react';
import { useState } from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";

export const BSlide = (prop) => {
    const [open, setOpen] = useState(true);
    return (
        <React.Fragment>
            <div className={'slidebar border'} style={{ width: open ? '90px' : '150px' }}>
            {/* <div className={'slidebar border'}> */}
                <IoIosArrowDroprightCircle id='flechita' className='arrow' style={{ margin: open ? '0px -90px 0px 0px' : '0px -150px 0px 0px' }} onClick={() => setOpen(!open)}/>
                {/* <button className='arrow btn btn-success' id='flechita' onClick={() => setOpen(!open)}>holi</button> */}
                <nav>
                    <ul className='nav'>
                    <div id="imagencita">
                            <img src="imagencitas/peaku.png" alt="Logo"/>
                            <h2 id='letrita' >PeakU</h2>
                    </div>
                        {prop.dat.map((iter) => (
                            <li className='box_items list-group-item nav-item'>
                                <div className='cont_items'>
                                    <a className='boton btn btn-light' href={iter.link}>
                                        <div className='iconsize'>{iter.icon}</div>
                                        <h6 className='nombreslide'> {iter.name} </h6>
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
