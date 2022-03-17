import styled from '@emotion/styled';
import { jsx, css } from '@emotion/react'
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import { fontWhite, fs1, shadow, smallShadow, textShadow } from './CssVariables';
import { db } from './firestore';
import NamesList from './components/NameList';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import EmptyElement from './components/EmptyElement';
import Input from './components/Input';
import {dataNames} from './data'


function App() {

  const Main = styled.div`
    background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);
    max-width: 100vw;
    min-height: 800px;
    font-family: 'Poppins', sans-serif;
    overflow-y: none;
  `
  const H1 = styled.h1`
    ${fontWhite}
    width: 100%;
    text-align: center;
    margin: 50px 0 0 0;
    ${fs1}
    ${textShadow}
  `

  const ClearButton = styled.button`
    height: 50px;
    ${fontWhite}
    font-size: 27px;
    padding: 0 20px;
    font-weight: 700;
    border-radius: 50px;
    background: #ff0000;
    border: none;
    ${smallShadow}
    margin-left: 20px;
    cursor: pointer;
  `

  const InputAndButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
  }

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

  
  const navigate = useNavigate();
  
  return (
    <Main className='App'>
      <Navbar />
      
      <H1>
        search name
      </H1>

      <InputAndButtons>

      <InputContainer>
          
          <Form onSubmit={(e) => {e.preventDefault(); navigate('/list')}} >
              <Input/>
              <IconContainer type='sumbit'>
                  <Link to='/list'> 
                  <Icon className='fa-solid fa-magnifying-glass'></Icon>
                  </Link>
              </IconContainer >
  
          </Form>
      
      </InputContainer>

        <ClearButton>
          <Link style={linkStyle} to='/'>
            clear
          </Link>

        </ClearButton>
      
      </InputAndButtons>



      <Routes>
        <Route path="/" element={<EmptyElement />} />
        <Route path="/list" element={<NamesList />} />
      </Routes>

   </Main>
  );
}

export default App;
