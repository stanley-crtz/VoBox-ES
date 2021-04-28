import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './Routers/Routes';
import './Assets/CSS/Style.css'

export const VoBox = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
