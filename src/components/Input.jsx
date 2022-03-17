import React, { useEffect } from 'react';
import { useState } from 'react';
import './Input.css';
import { useDispatch } from 'react-redux';
import { setQuery } from '../store/slices/searchValueSlice';
import { setNewQuery } from '../store/slices/querySlice';
import { useSelector } from 'react-redux';
import { query } from 'firebase/firestore';

const Input = () => {

  const dispatch = useDispatch();
  const [searchedName, setSearchedName] = useState('')
  const queryName = useSelector(state => state.query)

  //const setName = (e) => {
  //  dispatch(setQuery({
  //    searchQuery: e.target.value,
  //  }));
  //  setSearchedName(queryName.searchQuery.searchQuery);
  //  
  //}

  const setName = (e) => {
    setSearchedName(e.target.value)
    dispatch(setQuery({
      searchQuery: searchedName,
    }));
  }

  
  const selectName = useSelector(store => store.query)
 
  useEffect(() => {
    
    console.log(selectName)
  }, [])
  
  const style = {
    textTransform: 'lowercase'
  }

  return (
    <div>
        <input style={style} type="text" onChange={setName}/>
    </div>
  )
}

export default Input