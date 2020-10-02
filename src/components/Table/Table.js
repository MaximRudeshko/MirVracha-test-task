import React from 'react'
import './Table.scss'

const Table = ({data, onSort, sortType, sortField, onRowSelect}) => {
    
    const arrow = <i className={`fa fa-arrow-up ${sortType === 'desc' ? 'active' : ''} ml-1`}></i>

    return(
        <table className="table-bordered table table-hover">
            <thead className = 'bg-primary'>
                <tr>
                <th width = '10%' onClick = {() => onSort('id')}>ID {sortField === 'id' ? arrow : null}</th>
                <th width = '18%' onClick = {() => onSort('firstName')}>First Name {sortField === 'firstName' ? arrow : null}</th>
                <th width = '18%' onClick = {() => onSort('lastName')}>Last Name {sortField === 'lastName' ? arrow : null}</th>
                <th width = '35%' onClick = {() => onSort('email')}>Email {sortField === 'email' ? arrow : null}</th>
                <th width = '20%' onClick = {() => onSort('phone')}>Phone {sortField === 'phone' ? arrow : null}</th>
                </tr>
            </thead>
            <tbody>
                {data ? data.map( row => {
                    return (
                        <tr key = {row.id + Math.random()*1000} onClick = {() => onRowSelect(row)} >
                            <th>{row.id}</th>
                            <th>{row.firstName}</th>
                            <th>{row.lastName}</th>
                            <th>{row.email}</th>
                            <th>{row.phone}</th>
                        </tr>
                    )
                }) : null }
            </tbody>
        </table>
    
    ) 
}

export default Table