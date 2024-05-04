import React from 'react';
export const BSlide = (prop) => {
    return (
        <React.Fragment>
            <div className='slidebar border'>
                <nav>
                    <ul className='nav'>
                    <div id="imagencita" className='border'>
                            <img src="imagencitas/peaku.png" alt="Logo"/>
                            <h2 id='letrita' >PeakU</h2>
                    </div>
                        {prop.dat.map((iter) => (
                            <li className='box_items list-group-item nav-item '>
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
