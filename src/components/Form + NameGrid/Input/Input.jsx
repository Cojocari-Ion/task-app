import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../../../store/slices/searchValueSlice'

const Input = () => {
    const inputStyle = {
        height: '40px',
        width: '75%',
        border: 'none',
        outline: 'none',
        fontSize: '25px',
        textTransform: 'lowercase',
    }

    const [myText, setMyText] = useState('')
    const dispatch = useDispatch()

    const query = useSelector(state => state.searchQuery)

    const getQuery = (e) => {
      setMyText(e.target.value)
    }
    
    useEffect(() => {
      dispatch(setQuery({
        searchQuery: myText,
      }));
      
      console.log(query)
      
    }, [myText])



  return (
    <input style={inputStyle} type="text" onChange={getQuery} />            
  )
  
}

export default Input