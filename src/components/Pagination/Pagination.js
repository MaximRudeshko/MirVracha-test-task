import React from 'react'


const Pagination = ({totalItems, postsPerPage, paginate, currentPage}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalItems / postsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination justify-content-center">
                <button 
                    onClick = {() => paginate(--currentPage)} 
                    className= {`page-item ${currentPage === 1 ? 'disabled': null}`}
                    >
                    <a disabled = {true} className="page-link" href="#">Previous</a>
                </button>
                {pageNumbers.map(number => {
                    return (
                        <li onClick = {() => paginate(number)} key = {number} className="page-item">
                            <a className="page-link"  href="#" >{number}</a>
                        </li>
                    )
                })}
                <button onClick = {() => paginate(++currentPage)} className= {`page-item ${currentPage === pageNumbers.length ? 'disabled': null}`}>
                    <a className="page-link" href="#">Next</a>
                </button>
            </ul>
        </nav>
    )
}

export default Pagination