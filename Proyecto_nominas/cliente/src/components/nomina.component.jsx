import React, { useState, useMemo } from 'react';

const mockData = [
  { name: 'John', lastName: 'Doe', salary: 50000, age: 30, country: 'USA' },
  { name: 'Jane', lastName: 'Doe', salary: 60000, age: 28, country: 'Canada' },
  { name: 'Jim', lastName: 'Beam', salary: 55000, age: 35, country: 'UK' },
  { name: 'Jack', lastName: 'Daniels', salary: 65000, age: 40, country: 'USA' },
  { name: 'Jill', lastName: 'Hill', salary: 70000, age: 32, country: 'New Zealand' },
  { name: 'Joe', lastName: 'Bloggs', salary: 48000, age: 29, country: 'Australia' },
  { name: 'Jenny', lastName: 'Jones', salary: 75000, age: 34, country: 'Ireland' },
  { name: 'Julia', lastName: 'Roberts', salary: 82000, age: 45, country: 'USA' },
  { name: 'Jerry', lastName: 'Seinfeld', salary: 54000, age: 55, country: 'USA' },
  { name: 'Jessica', lastName: 'Alba', salary: 73000, age: 38, country: 'USA' },
];

const Table = () => {
  const [data, setData] = useState(mockData);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedRows, setExpandedRows] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const filteredAndSortedData = useMemo(() => {
    let filteredItems = searchTerm ? data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())) : [...data];
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

  const toggleRow = (index) => {
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
    <div>
      <input type="text" placeholder="Search by Name" className="border rounded p-1" onChange={(e) => setSearchTerm(e.target.value)} />
      <div className="container mx-auto px-4 mt-4">
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
              <th className="px-4 py-3 cursor-pointer" onClick={() => requestSort('name')}>Name {sortConfig.key === 'name' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : '↕'}</th>
              <th className="px-4 py-3 cursor-pointer" onClick={() => requestSort('lastName')}>Last Name {sortConfig.key === 'lastName' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : '↕'}</th>
              <th className="px-4 py-3 cursor-pointer" onClick={() => requestSort('salary')}>Salary {sortConfig.key === 'salary' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : '↕'}</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            {filteredAndSortedData.map((item, index) => [
              <tr key={index} className="text-gray-700 dark:text-gray-400" onClick={() => toggleRow(index)}>
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.lastName}</td>
                <td className="px-4 py-3">{item.salary}</td>
              </tr>,
              expandedRows.includes(index) && (
                <tr key={`details-${index}`} className="expandable-row">
                  <td className="px-4 py-3" colSpan="3">
                    <div>Age: {item.age}</div>
                    <div>Country: {item.country}</div>
                  </td>
                </tr>
              )
            ])}
            {filteredAndSortedData.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center py-3">No results found</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded" onClick={prevPage}>Previous</button>
          <div>
            <span>Page {currentPage} of {totalPages}</span>
            <select className="ml-2 border rounded" value={itemsPerPage} onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </div>
          <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded" onClick={nextPage}>Next</button>
        </div>
      </div>
    </div>
  );
}
export default Table;