import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './ResultView.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectArray, selectedKeyword, setSelectedJsonArray, selectedJsonArray } from '../features/counter/counterSlice';


export function ResultView() {

    const jsonArray = useSelector(selectArray);
    const keyword = useSelector(selectedKeyword);
    const selectedJson = useSelector(selectedJsonArray);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(setSelectedJsonArray(jsonArray.filter((a)=>a.name.includes(keyword))));
    }, [keyword])

    return (
        <div className='view'> 
        <Accordion defaultActiveKey="0">
            {selectedJson.map((val, index) => {
                return (<Accordion.Item eventKey={index}>
                <Accordion.Header>{val.name}</Accordion.Header>
                <Accordion.Body>
                  {val.name}
                  {val.message}
                </Accordion.Body>
              </Accordion.Item>
            
            )})}
            </Accordion>
        </div>
      );
}