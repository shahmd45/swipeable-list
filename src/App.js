import React, {useState} from 'react';
import './App.css';
import Search from './Component/Search'
import SwipeableList from './Component/SwipeableList'
import { Data } from './Data'
import Pagination from "@material-ui/lab/Pagination";

function App() {  
  const itemsPerPage = 5;
  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = useState(Data);
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPage] = useState(Math.ceil(filterData.length / itemsPerPage));

  const handleSearch = e => {
    const value = e.target.value;
      if (value !== '') {
        const FilterData = Data.filter(item => item.toLowerCase().includes(value.toLowerCase()))
        setFilterData(FilterData); 
        setPage(1)
        setNoOfPage(Math.ceil(FilterData.length / itemsPerPage))
      } else {
        setFilterData(Data);  
        setNoOfPage(Math.ceil(Data.length / itemsPerPage))
      }
    setSearch(value);
  }

  const handleCancel = () => {
    setFilterData(Data);
    setSearch('');
    setPage(1)
    setNoOfPage(Math.ceil(Data.length / itemsPerPage))
  }

  const handleDelete = (value) => {
    const FilterData = filterData.filter(item => {
      if (item.toLocaleLowerCase() !== value.toLocaleLowerCase()) {
        return item
      }
    })
    setNoOfPage(Math.ceil(FilterData.length / itemsPerPage))
    setFilterData(FilterData)
  }

  const handleChange = (e, value) => { 
    setPage(value);
  }

  return (
    <div className="App">
       <div className='Container'>
          <Search 
            search={search}
            handleSearch={handleSearch}
            handleCancel={handleCancel}
          />
          <div className='users'>
            Total Users: <span> {filterData.length} </span>
          </div>
          <SwipeableList 
            items={filterData} 
            page={page}
            itemsPerPage={itemsPerPage}
            handleDelete={handleDelete}
          />
          <Pagination
            count={noOfPages}
            page={page}
            onChange={handleChange}
            defaultPage={1}
            size="large"
            showFirstButton
            showLastButton
            className='Pagination'
          />
       </div>
    </div>
  );
}

export default App;
