import React, { useState } from 'react';

const SearchTable = ({ Data }) => {
  const [data, setData] = useState(Data);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filteredData = Data.filter(
      (item) =>
        item.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <div>
      <div>
        <form>
          <input
            type='text'
            placeholder='Enter name or location to search'
            value={searchTerm}
            onChange={handleSearch}
          />
        </form>
      </div>
      <div style={{ overflowX: 'auto' }}>
        {data.length > 0 ? (
          <table className='table'>
            <thead>
              <tr>
                <th>sno</th>
                <th>customer_name</th>
                <th>age</th>
                <th>phone</th>
                <th>location</th>
                <th>created_date</th>
                <th>created_time</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.sno}</td>
                  <td>{item.customer_name}</td>
                  <td>{item.age}</td>
                  <td>{item.phone}</td>
                  <td>{item.location}</td>
                  <td>{item.created_date}</td>
                  <td>{item.created_time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No matching records found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchTable;
