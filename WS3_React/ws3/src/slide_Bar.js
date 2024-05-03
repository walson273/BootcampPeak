import React from 'react';
//import { BsBriefcase } from "react-icons/bs";

export const BSlide = (prop) => {
    return (
      <React.Fragment>
        <h1 className="greeting">AQUITOYYYYYYYYYY</h1>
        <div className='lista'>
 
        <nav>
               
          <ul>
           {prop.dat.map((iter) =>
            <li className='list-group-item'>  
 
              <div>
 
                  <button type="button" className='btn btn-light'>

                    {iter.icon}
                    <h1> {iter.name}  </h1>
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
