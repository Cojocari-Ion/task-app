import React, { useEffect } from 'react';
import { fontWhite, fs1, shadow, smallShadow, textShadow, primaryTextColor, primaryBackgroundColor } from '../../CssVariables';
import styled from '@emotion/styled';
import { useState } from 'react';
import Input from './Input/Input';

const SearchForm = ({ getQuery }) => {

    const FormSection = styled.div`
        width: 100%;
        height: auto;
        
    `

    const Form = styled.form`
        display: flex;
        flex-direction: row;
        justify-content: center;
    `

    const InputButtonContainer = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        width: 500px;
        margin-right: 20px;
        height: 60px;
        padding: 0 0 0 20px;
        border-radius: 50px;
        overflow: hidden;
        ${smallShadow}
    `

    const SearchButton = styled.button`
        height: 100%;
        width: 20%;
        ${primaryBackgroundColor}
        border: none;
        cursor: pointer;
        color: #fff;
    `

    const inputStyle = {
        height: '40px',
        width: '75%',
        border: 'none',
        outline: 'none',
        fontSize: '25px',
        textTransform: 'lowercase',
    }

    const Icon = styled.i`
        color: #fff;
        font-size: 30px;
    `

    const ClearButton = styled.button`
        min-width: 130px;
        border-radius: 50px;
        border: none;
        font-size: 25px;
        font-weight: 600; 
        text-transform: uppercase;
        background: #ff0000;
        color: #fff;
        cursor: pointer;
    `

    const [query, setQuery] = useState('');

    const onChange = (q) => {
        setQuery(q);
        getQuery(q);
        console.log(query);
    }
    
  
    return (
    <FormSection>
        <Form>
            <InputButtonContainer>
                
                <Input getQuery={(q) => setQuery(q)}  />
                
                <SearchButton type='submit'>
                    <Icon className="fa-solid fa-magnifying-glass"></Icon>
                </SearchButton>
            </InputButtonContainer>

            <ClearButton>
                clear
            </ClearButton>

        </Form>
    </FormSection>
  )
}

export default SearchForm