import Navbar from './components/Navbar/Navbar';
import { fontWhite, fs1, shadow, smallShadow, textShadow } from './CssVariables';
import styled from '@emotion/styled';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import FormAndGrid  from './components/Form + NameGrid/FormAndGrid';
import react, { useState, useEffect } from 'react'


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



  return (
    <Main className='App'>
      
      <Navbar />
      
      <H1>
        search name
      </H1>

      <FormAndGrid />

    </Main>
  );
}

export default App;
