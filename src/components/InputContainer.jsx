import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import { useSelector } from 'react-redux';
import { fontWhite, fs1, shadow, smallShadow, textShadow } from '../CssVariables';

const InputContainer = () => {

    const InputContainer = styled.div`
    background: #fff;
    width: 330px;
    height: 50px;
    
    padding-left: 20px;
    box-sizing: border-box;
    border-radius: 100px;
    ${smallShadow}
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
  `

  const IconContainer = styled.button`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #040C51;
    border: none;
    cursor: pointer;
    
  `
  const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  `
  const Icon = styled.i` 
    font-size: 30px;
    color: #fff;
  `
    
  const navigate = useNavigate()
  const [query, setQuery] = useState();

  const setQueryFunction = (e) => {
    setQuery(e.target.value);
    console.log(query)
  }

  return (
    <InputContainer>
          
        <Form>
            <Input change={setQueryFunction} />
            <IconContainer type='sumbit'>
                <Link to='/list'> 
                <Icon className='fa-solid fa-magnifying-glass'></Icon>
                </Link>
            </IconContainer >

        </Form>
    
    </InputContainer>
  )
}

export default InputContainer