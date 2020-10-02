import React from 'react';
import ReactPaginate from 'react-paginate';
import Loader from '../Loader';
import Table  from '../Table';
import ErrorBoundry from '../ErrorBoundry';

import './UsersList.scss'




const UsersList = ({onRowSelect, currentPage, onPageChange, loading, view, onSort, sortType, sortField, data, pageSize, pageCount}) => {
       

  return(
    <div className = 'users-list'>

      {loading ? 
        <Loader/> :
        <ErrorBoundry>
          
            {!view ? 
              <h2>Items is not defined</h2>
              :<Table 
                data = {view}
                onSort = {onSort}
                sortType = {sortType}
                sortField = {sortField}
                onRowSelect = {onRowSelect}
              />  
            }
            {data.length > pageSize && pageCount > 1 
              ? <ReactPaginate
                  previousLabel={'previous'}
                  nextLabel={'next'}
                  pageCount={pageCount}
                  pageRangeDisplayed={pageCount}
                  onPageChange={onPageChange}
                  containerClassName={'pagination justify-content-center'}
                  activeClassName={'active'}
                  pageClassName={'page-item'}
                  pageLinkClassName={'page-link'}
                  previousClassName={'page-link'}
                  nextClassName={'page-link'}
                  initialPage = {currentPage}
                  forcePage = {currentPage}
                  disabledClassName = {'disabled'}
                /> : null
              }
        </ErrorBoundry>
      }
    </div>
  )
}

export default UsersList


/* export default class UsersList extends Component{

  state = {
    data: null,
    loading:false,
    currentPage: 0,
    rowsPerPage: 7,
    sortType: 'asc',
    sortField: 'id',
    error: false
  }

  apiService = new ApiService()


  componentDidMount(){
    this.setState({loading:true})
    this.apiService.getAllUsers()
      .then(data => {
        this.setState({
          data,
          loading:false
        })
      })
      .catch(() => {
        this.setState({
          error:true,
          loading:false
        })
      })
  }

  onPageChange = ({selected}) => {
    setCurrentPage(selected + 1)
  }

  onSort = sortField => {
    const cloneData = data.concat();
    const sortDirection = sortType === 'asc' ? 'desc' : 'asc';

    const orderedData = _.orderBy(cloneData, sortField, sortDirection);

    setData(orderedData);
    setSortType(sortDirection);
    setSortField(sortField)
  }

  onFilter = () => {
  
    if(!search){
      return data
    }

    return data.filter(item => {
      return item['firstName'].toLowerCase().includes(search.toLowerCase())
            || item['lastName'].toLowerCase().includes(search.toLowerCase())
            || item['email'].toLowerCase().includes(search.toLowerCase())
            || item['phone'].toLowerCase().includes(search.toLowerCase())
    })
  }



  render(){
    const {data, loading, currentPage, error, rowsPerPage, sortField, sortType}


    



  }



} */
