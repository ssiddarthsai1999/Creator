import React from 'react';
import ReactDOM from 'react-dom/client';

import store from "./redux/store"
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import "./App.css"
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>

    <App />
</Provider>
  
);


