import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import DeleteIcon from '@material-ui/icons/Delete';

const List = ({ item, handleDelete }) => {
    return (
        <>
            <PersonIcon />
            {item}
            <DeleteIcon onClick={() => handleDelete(item)}/>
        </>
    )
}

export default List
