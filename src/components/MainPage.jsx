import React, { useEffect, useState } from 'react';
import fileJson from '../resources/log.jsonl';
import './MainPage.css';
import { TopBar } from './TopBar';
import { ResultView } from './ResultView';
import { useSelector, useDispatch } from 'react-redux';
import {
setJsonArray
  } from '../features/counter/counterSlice';

export function MainPage() {
    
    const dispatch = useDispatch();
    
    
    useEffect(() => {
    async function fetchData() {
        await fetch(fileJson)
        .then(r => r.text())
        .then(text => {
              const val = text.split("\n");
              if(val) {
                const array = val.map(v => 
                    v!=="" ? JSON.parse(v) : {}
                );
                dispatch(setJsonArray(array));
              }
    });
        
  };
  fetchData();   
    }, [])      
  
  return <div className='list-agg'> 
    <TopBar />
    <ResultView />
  </div>;
}