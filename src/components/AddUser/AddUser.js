import React from 'react'


const AddUser = ({openModal}) => {


    return(
        <button onClick = {() => openModal()} className = 'add-btn btn btn-success mt-3 mb-3'>Add User</button>
    )
}

export default AddUser