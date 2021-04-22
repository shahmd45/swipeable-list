import React from 'react';
import Hammer from 'react-hammerjs';
import List from './List'

function SwipeableList(props) {
    const { items, handleDelete, page, itemsPerPage } = props
    
    return (
        <div className='SwipeableContainer'>
            {items.length > 0 ? items
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((item, i) => {
                return (
                    <Hammer key={item + i} onSwipe={() => handleDelete(item, i)} > 
                        <div className='SwipeableContainer__List'>
                            <List item={item} {...props}/>
                        </div>
                    </Hammer>
                )
            }) : (
                <div className='SwipeableContainer'>
                    <p> No Data </p>
                </div> 
            )}
        </div>
    );
}

export default SwipeableList;