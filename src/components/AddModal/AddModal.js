import React, {useState} from 'react'

import './AddModal.scss'

const AddModal = ({isModalOpen, closeModal, addItem}) => {

    const [id, setId] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)

    const onSubmit = e => {
        e.preventDefault()
        addItem({
            id,
            firstName,
            lastName,
            email,
            phone
        })

        e.target.reset()
    }


    return (
        <div className = {`add-modal ${!isModalOpen ? 'hide' : ''}`}>
            <form onSubmit = {onSubmit} className='bg-success'>
                <i className="fa fa-times-circle-o" aria-hidden="true" onClick = {() => closeModal()}   ></i>
                <div className="form-row">
                    <div className="form-group col">
                        <label htmlFor="inputId">ID<span>*</span></label>
                        <input onChange = {(e) => setId(e.target.value)} type="number" className="form-control" id="inputId" placeholder="ID"/>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="inputFirstName">First Name<span>*</span></label>
                        <input onChange = {(e) => setFirstName(e.target.value)} type="text" className="form-control" id="inputFirstName" placeholder="First Name"/>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="inputLastName">last Name<span>*</span></label>
                        <input onChange = {(e) => setLastName(e.target.value)} type="text" className="form-control" id="inputLastName" placeholder="Last Name"/>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="inputEmail">Email<span>*</span></label>
                        <input onChange = {(e) => setEmail(e.target.value)} type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="inputPassword4">Phone<span>*</span></label>
                        <input onChange = {(e) => setPhone(e.target.value)} type="phone" className="form-control" id="inputPhone" placeholder="Phone"/>
                    </div>
                </div>
                <button className = 'btn btn-primary '
                        type = 'submit'
                        disabled = {id && firstName && lastName && email && phone != null ? false : true }
                >Add User</button>
            </form>
        </div>
    )
}

export default AddModal