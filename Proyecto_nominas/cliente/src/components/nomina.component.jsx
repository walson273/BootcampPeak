
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React, { useState, useMemo } from 'react';
import { useLoaderData } from 'react-router-dom';

export async function nomina_user() {
  const nominass = await getNominas();
  console.log(nominass);
  console.log(h);
  return h;
}

const Nominad = () => {
  const nominasa = useLoaderData();
  const datos = nominasa.data;
  for (let index = 0; index < datos.length; index++) {
    let d = 0;
    if (datos[index].mes.toLowerCase() == "octubre") {
      d = 10;
    } else if (datos[index].mes.toLowerCase() == "enero") {
      d = 1;
    } else if (datos[index].mes.toLowerCase() == "septiembre") {
      d = 9;
    } else if (datos[index].mes.toLowerCase() == "febrero") {
      d = 2;
    } else if (datos[index].mes.toLowerCase() == "marzo") {
      d = 3;
    } else if (datos[index].mes.toLowerCase() == "abril") {
      d = 4;
    } else if (datos[index].mes.toLowerCase() == "mayo") {
      d = 5;
    } else if (datos[index].mes.toLowerCase() == "junio") {
      d = 6;
    } else if (datos[index].mes.toLowerCase() == "julio") {
      d = 7;
    } else if (datos[index].mes.toLowerCase() == "agosto") {
      d = 8;
    } else if (datos[index].mes.toLowerCase() == "noviembre") {
      d = 11;
    } else if (datos[index].mes.toLowerCase() == "diciembre") {
      d = 12;
    }
    datos[index].mesn = d;

  }
  const [data, setData] = useState(datos);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedRows, setExpandedRows] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [open, setOpen] = React.useState(false);

  const filteredAndSortedData = useMemo(() => {
    let filteredItems = searchTerm ? data.filter(item => item.mes?.toString().toLowerCase().includes(searchTerm.toLowerCase())) : [...data];
    if (sortConfig !== null) {
      filteredItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  }, [data, sortConfig, currentPage, searchTerm]);

  function rotar() {
    document.getElementById("flecha").style.transform = "rotate(180deg)";
  }

  const toggleRow = (index) => {
    setOpen(!open);
    const newExpandedRows = expandedRows.includes(index)
      ? expandedRows.filter(id => id !== index)
      : [...expandedRows, index];
    setExpandedRows(newExpandedRows);

  };

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  return (
    <div className="  rounded-lg" style={{ marginLeft: "5.625rem"}}>
      <input className="border p-2 mb-3 w-25" type="text" placeholder="Buscar por mes" onChange={(e) => setSearchTerm(e.target.value)} style={{marginTop:"2rem"}} />
      <div className="">
        <table className=" text-left border-collapse" style={{ width: "85%" }}>
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b p-4"> </th>
              <th className="border-b p-4" onClick={() => requestSort('devengado')} style={{ cursor: "pointer" }}>Total devengado {sortConfig.key === 'devengado' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : '↕'}</th>
              <th className="border-b p-4" onClick={() => requestSort('total_descuentos')} style={{ cursor: "pointer" }}>Descuentos {sortConfig.key === 'total_descuentos' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : '↕'}</th>
              <th className="border-b p-4" onClick={() => requestSort('mesn')} style={{ cursor: "pointer" }}>Mes {sortConfig.key === 'mesn' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : '↕'}</th>
              <th className="border-b p-4" onClick={() => requestSort('anio')} style={{ cursor: "pointer" }}>Año {sortConfig.key === 'anio' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : '↕'}</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedData?.map((item, index) => [
              <tr key={index} className="hover:bg-gray-50" onClick={() => toggleRow(index)}>
                <td className="p-4 border-b"><IconButton id="flecha" aria-label="expand row" size="small">
                  {open ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </IconButton></td>
                <td className="p-4 border-b">${item.devengado.toLocaleString("es")}</td>
                <td className="p-4 border-b">${item.total_descuentos.toLocaleString("es")}</td>
                <td className="p-4 border-b">{item.mes}</td>
                <td className="p-4 border-b">{item.anio}</td>
              </tr>,
              expandedRows.includes(index) && (
                <tr key={`detail-${index}`} className="bg-gray-100">
                  <td colSpan="5" className="border-b">
                    <div className="flex flex-wrap justify-content-center">
                      <table className="flex flex-wrap pt-4">
                        <tbody>
                          <tr>
                            <td className="border border-zinc-500 p-2">Sueldo base</td>
                            <td className="border border-zinc-500 p-2" colSpan="2">${item.base.toLocaleString("es")}</td>
                          </tr>
                          <tr>
                            <td className="border border-zinc-500 p-2 text-center fw-bold" colSpan="2">Concepto</td>
                            <td className="border border-zinc-500 px-3 text-center fw-bold">Devengo</td>
                          </tr>
                          <tr>
                            <td className="border border-zinc-500 p-2">Dias trabajados</td>
                            <td className="border border-zinc-500 px-4">{item.dias_trabajados}</td>
                            <td className="border border-zinc-500 px-3">${item.salario_dias.toLocaleString("es")}</td>
                          </tr>
                          <tr>
                            <td className="border border-zinc-500 p-2">Bonos</td>
                            <td className="border border-zinc-500 px-4">1</td>
                            <td className="border border-zinc-500 px-3">${item.bonos.toLocaleString("es")}</td>
                          </tr>
                        </tbody>
                      </table>

                      <table className="flex flex-wrap p-4">
                        <tbody>
                          <tr>
                            <td className="border border-zinc-500 p-2 text-center fw-bold" colSpan="2">Egresos</td>
                          </tr>
                          <tr>
                            <td className="border border-zinc-500 p-2">Pension</td>
                            <td className="border border-zinc-500 px-3">${item.pension.toLocaleString("es")}</td>
                          </tr>
                          <tr>
                            <td className="border border-zinc-500 p-2">Cesantias</td>
                            <td className="border border-zinc-500 px-3">${item.cesantias.toLocaleString("es")}</td>
                          </tr>
                          <tr>
                            <td className="border border-zinc-500 p-2">Eps</td>
                            <td className="border border-zinc-500 px-3">${item.eps.toLocaleString("es")}</td>
                          </tr>
                          <tr>
                            <td className="border border-zinc-500 pl-2 pr-3 py-2">Total descuentos</td>
                            <td className="border border-zinc-500 px-3">${item.total_descuentos.toLocaleString("es")}</td>
                          </tr>
                        </tbody>
                      </table>

                      <table className="flex pt-4">
                        <tbody>
                          <tr>
                            <td className="border border-zinc-500 p-2 fw-bold">Neto</td>
                            <td className="border border-zinc-500 px-3" colSpan="2">${item.total_neto.toLocaleString("es")}</td>
                          </tr>
                          <tr>
                            <td className="border border-zinc-500 p-2 fw-bold">Devengado</td>
                            <td className="border border-zinc-500 px-3" colSpan="2">${item.devengado.toLocaleString("es")}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )
            ])}
            {filteredAndSortedData.length === 0 && (
              <tr>
                <td colSpan="5" className="p-4 text-center">No se encuentran resultados</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="mt-4 flex justify-between items-center" style={{ width: "85%" }}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={prevPage}>Anterior</button>
          <div>
            <span>Registros por pagina</span>
            <select className="ml-2 border p-2" value={itemsPerPage} onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
            <span> &nbsp;&nbsp;&nbsp;&nbsp;Pagina {currentPage} de {totalPages}</span>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={nextPage}>Siguiente</button>
        </div>
      </div>
    </div>
  );
}
export default Nominad;