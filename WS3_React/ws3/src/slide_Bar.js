import React from 'react';
//import { BsBriefcase } from "react-icons/bs";

export const BSlide = (prop) => {
    return (
        <React.Fragment>
            <div className='slidebar border'>
                <nav>
                    <ul className='nav'>
                        {prop.dat.map((iter) =>
                            <li className='box_items list-group-item nav-item '>
                                <div className='cont_items'>
                                    <button className='boton nav-link active btn btn-light'>
                                            <div className='iconsize'>{iter.icon}</div>
                                        <h6 className='nombreslide'> {iter.name}  </h6>
                                    </button>
                                </div>
                            </li>
                        )
                        }
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    );
}
