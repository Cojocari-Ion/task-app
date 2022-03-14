import styled from '@emotion/styled';
import Navbar from './components/Navbar';
import { jsx, css } from '@emotion/react'
import { fontWhite, fs1, shadow, smallShadow, textShadow } from './CssVariables';


function App() {

  const Main = styled.div`
    background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);
    width: 100%;
    min-height: 800px;
    font-family: 'Poppins', sans-serif;
  `
  const H1 = styled.h1`
    ${fontWhite}
    width: 100%;
    text-align: center;
    margin: 50px 0 0 0;
    ${fs1}
    ${textShadow}
  `
  const InputContainer = styled.div`
    background: #fff;
    width: 330px;
    height: 50px;
    margin: 0 auto;
    border-radius: 100px;
    ${smallShadow}
  `
  

  return (
    <Main>
      <Navbar />
      
      <H1>
        search name
      </H1>

      <InputContainer>
        <input 
          type="text" 
          css={{
            background: '#000'
          }}
        />
      </InputContainer>

   </Main>
  );
}

export default App;
