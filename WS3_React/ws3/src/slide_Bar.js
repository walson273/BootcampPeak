import React from 'react';
export const BSlide = (prop) => {
    return (
        <React.Fragment>
            <div className='slidebar border bg-success'>
                <nav>
                    <ul className='nav'>
                        {prop.dat.map((iter) =>
                            <li className='box_items list-group-item nav-item '>
                                <div className='cont_items'>
                                    <button type="button" className='boton  btn btn-light'>
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
