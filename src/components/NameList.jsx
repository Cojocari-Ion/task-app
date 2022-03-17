import React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/react'
import { fontWhite, fs1, shadow, smallShadow, textShadow } from '../CssVariables';
import { db } from '../firestore';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";

import { dataNames } from '../data';


const NamesList = () => {

    const List = styled.ul`
    max-width: 100vw;
    list-style: none;
    padding: 0 120px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin-top: 50px
  `

  const ListItem = styled.li`
    height: 50px;
    text-align: center;
    border-radius: 5px;
    background: #fff;
    ${smallShadow}
    color: #040C51;
    font-weight: 700;
    text-transform: capitalize;
    
  `

  const queryName = useSelector(state => state.query);
  const query = queryName.searchQuery.searchQuery;
  

  return (
      <div>
        <List>
          {dataNames.filter(name => name.includes(query)).map(filteredName => (
            <ListItem>
              {filteredName}
            </ListItem>
          ))}
        </List>
      </div>
  )
}

export default NamesList