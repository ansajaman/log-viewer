import React, { useEffect, useState } from 'react';
import { SearchBar } from './SearchBar';
import './TopBar.css';

export function TopBar() {
    return (<div className='top'>
        <SearchBar />
    </div>);
}