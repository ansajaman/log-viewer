import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import {
setSelectedKeyword
  } from '../features/counter/counterSlice';

export function SearchBar() {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    return <Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
      onChange={(e) => setValue(e.target.value)}
    />
    <Button onClick={() => dispatch(setSelectedKeyword(value))} variant="outline-success">Search</Button>
  </Form>;
}