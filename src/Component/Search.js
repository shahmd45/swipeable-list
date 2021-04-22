import React from 'react'
import CancelIcon from '@material-ui/icons/Cancel';

const Search = props => {
    const { search, handleSearch, handleCancel } = props
    return (
        <div className='Search'>
            <input type='text' value={search} placeholder='Search' onChange={handleSearch} /> 
            {search.length > 0 && <CancelIcon className='Search__icon' onClick={handleCancel}/>}
        </div>
    )
}

export default Search;