import React, {useState,useEffect} from 'react'
import _ from 'lodash'
import ApiService from '../../services/apiService'

import ContentRow from '../ContentRow'
import UserDetails from '../UserDetails'
import UsersList from '../UsersList'
import {Record} from '../UserDetails/UserDetails'
import FilterPanel from '../Filter'
import AddUser from '../AddUser'
import AddModal from '../AddModal/AddModal'



const App = () => {

    const {getAllUsers} = new ApiService(),
          [row, setRow] = useState(null),
          [search, setSearch] = useState(''),
          [currentPage, setCurrentPage] = useState(0),
          [visibleModal, setVisibleModal] = useState(false),
          [data, setData] = useState([]),
          [loading, setLoading] = useState(false),
          [pageSize] = useState(7),
          [sortType, setSortType] = useState('asc'),
          [sortField, setSortField] = useState('id');

  useEffect(() => {
    setLoading(true)
    getAllUsers()
      .then(data => {
        setData(_.orderBy(data, sortField, sortType))
        setLoading(false)
    })
      .catch(() => {
        setLoading(false)
      })
  }, [])


  const addItem = (item) => {

    const newArr = [item, ...data]

    setData(newArr)

    toggleModal()
  }



  const onSort = sortField => {
    const cloneData = data.concat();
    const sortDirection = sortType === 'asc' ? 'desc' : 'asc';

    const orderedData = _.orderBy(cloneData, sortField, sortDirection);

    setData(orderedData);
    setSortType(sortDirection);
    setSortField(sortField)
  }

  const onFilter = () => {
    
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

  const filteredData = onFilter()
  
  const pageCount = Math.ceil(filteredData.length / pageSize),   
        view = _.chunk(filteredData, pageSize)[currentPage]

    

    const onRowSelect = row => {
        setRow(row)
    }

    const onSearch = str => {
        setSearch(str)
        setCurrentPage(0)
    }

    const onPageChange = ({selected}) => {
        setCurrentPage(selected)
    }

    const toggleModal = () => {
        setVisibleModal(!visibleModal)
        console.log('click')
    }




    const userDetails = (
        <UserDetails selectedRow = {row}>
            <Record label = 'First name: ' field = 'firstName'/>
            <Record label = 'Last name: ' field = 'lastName'/>
            <Record label = 'Email: ' field = 'email'/>
            <Record label = 'Phone: ' field = 'phone'/>
        </UserDetails>
    )

    const usersList = (
        <UsersList
            search = {search}
            onRowSelect = {onRowSelect}
            onPageChange = {onPageChange}
            currentPage = {currentPage}
            loading = {loading}
            view = {view}
            onSort = {onSort}
            sortType = {sortType}
            sortField = {sortField}
            data = {data}
            pageSize = {pageSize}
            pageCount = {pageCount}
        />
    )

    const filterPanel = (
        <FilterPanel
                onSearch = {onSearch}
            />
    )

    const addUser = (
        <AddUser openModal = {toggleModal}/>
    )

    return (
        <div className = 'container'>
            <ContentRow
                left = {filterPanel}
                right = {addUser}
            />
            <ContentRow 
                left = {usersList} 
                right = {userDetails} 
            />
            <AddModal closeModal = {toggleModal} isModalOpen = {visibleModal} addItem = {addItem}/>
        </div>
    )
}

export default App




