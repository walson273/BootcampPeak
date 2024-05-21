import React from "react";
import { useState } from 'react';
import { Si1001Tracklists } from "react-icons/si";

export default function Menu() {
  const [open_1, setOpen_1] = useState("white");
  const [open_2, setOpen_2] = useState("white");
  const [open_3, setOpen_3] = useState("white");
  const [open_4, setOpen_4] = useState("white");
  const [open_5, setOpen_5] = useState("white");
  const [open_6, setOpen_6] = useState("white");
  const activacion_1 = () => {
    if(open_1 == "white"){
    setOpen_1("#007bff");
    setOpen_2("white");
    setOpen_3("white");
    setOpen_4("white");
    setOpen_5("white");
    setOpen_6("white");
    }
    else if(open_1 == "#007bff"){
    setOpen_1("white");
    setOpen_2("white");
    setOpen_3("white");
    setOpen_4("white");
    setOpen_5("white");
    setOpen_6("white");
    }
  };
  const activacion_2 = () => {
    if(open_2 == "white"){
    setOpen_1("white");
    setOpen_2("#007bff");
    setOpen_3("white");
    setOpen_4("white");
    setOpen_5("white");
    setOpen_6("white");
    }
    else if(open_2 == "#007bff"){
      setOpen_1("white");
      setOpen_2("white");
      setOpen_3("white");
      setOpen_4("white");
      setOpen_5("white");
      setOpen_6("white");
      }
  };  
  const activacion_3 = () => {
    if(open_3 == "white"){
    setOpen_1("white");
    setOpen_2("white");
    setOpen_3("#007bff");
    setOpen_4("white");
    setOpen_5("white");
    setOpen_6("white");
    }
    else if(open_3 == "#007bff"){
      setOpen_1("white");
      setOpen_2("white");
      setOpen_3("white");
      setOpen_4("white");
      setOpen_5("white");
      setOpen_6("white");
      }
  };
  const activacion_4 = () => {
    if(open_4 == "white"){
    setOpen_1("white");
    setOpen_2("white");
    setOpen_3("white");
    setOpen_4("#007bff");
    setOpen_5("white");
    setOpen_6("white");
    }
    else if(open_4 == "#007bff"){
      setOpen_1("white");
      setOpen_2("white");
      setOpen_3("white");
      setOpen_4("white");
      setOpen_5("white");
      setOpen_6("white");
      }
  };  
  const activacion_5 = () => {
    if(open_5 == "white"){
    setOpen_1("white");
    setOpen_2("white");
    setOpen_3("white");
    setOpen_4("white");
    setOpen_5("#007bff");
    setOpen_6("white");
    }
    else if(open_5 == "#007bff"){
      setOpen_1("white");
      setOpen_2("white");
      setOpen_3("white");
      setOpen_4("white");
      setOpen_5("white");
      setOpen_6("white");
      }
  };
  const activacion_6 = () => {
    if(open_6 == "white"){
    setOpen_1("white");
    setOpen_2("white");
    setOpen_3("white");
    setOpen_4("white");
    setOpen_5("white");
    setOpen_6("#007bff");
    }
    else if(open_6 == "#007bff"){
      setOpen_1("white");
      setOpen_2("white");
      setOpen_3("white");
      setOpen_4("white");
      setOpen_5("white");
      setOpen_6("white");
      }
  };  
  return (
    <>
      <div className="" style={{ width: "14rem", height: "100vh", borderRadius: "20px" }}>
        <div className="col" style={{ width: "14rem", height: "100vh", borderRadius: "20px" }}>
          <div className="row-2 bg-light" style={{ borderRadius: "15px 15px 0px 0px" }}>
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-3  d-flex justify-content-center align-items-center">
                <img src="Imagen_1.png" alt="..." style={{ width: "45px", height: "45px" }} />
              </div>
              <div className="col-7 d-flex justify-content-center align-items-center">
                <h6>TELEPERFUMES</h6>
              </div>
            </div>
          </div>
          <div className="row-6 bg-success d-flex justify-content-start" style={{ height: "50vh" }}>
            <ul class="list-group list-group-flush">
              <div>
                <h6>Menu</h6>
              </div>
              <li className="list-group-item mb-2" style={{ backgroundColor: open_1, cursor: "pointer", borderRadius: "10px" }} onClick={activacion_1}><Si1001Tracklists />Items-0</li>
              <li className="list-group-item mb-2" style={{ backgroundColor: open_2, cursor: "pointer", borderRadius: "10px" }} onClick={activacion_2}><Si1001Tracklists />Items-0</li>
              <li className="list-group-item mb-2" style={{ backgroundColor: open_3, cursor: "pointer", borderRadius: "10px" }} onClick={activacion_3}><Si1001Tracklists />Items-0</li>
              <li className="list-group-item mb-2" style={{ backgroundColor: open_4, cursor: "pointer", borderRadius: "10px" }} onClick={activacion_4}><Si1001Tracklists />Items-0</li>
              <li className="list-group-item mb-2" style={{ backgroundColor: open_5, cursor: "pointer", borderRadius: "10px" }} onClick={activacion_5}><Si1001Tracklists />Items-0</li>
              <li className="list-group-item mb-2" style={{ backgroundColor: open_6, cursor: "pointer", borderRadius: "10px" }} onClick={activacion_6}><Si1001Tracklists />Items-0</li>
            </ul>
          </div>
          <div className="row-2 border bg-info" style={{ height: "21vh" }}>
            <p>TELEPERFUMES</p>
          </div>
          <div className="row-2 border bg-light" style={{ height: "21vh", borderRadius: "0px 0px 15px 15px" }}>
            <h6>TELEPERFUMES</h6>
          </div>
        </div>
      </div>
    </>
  )
}
