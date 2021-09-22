import React from 'react';
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import RouterContent from './routes';
import { rootStore } from './_redux';

const store = rootStore();

function App() {
  return (
    <Provider store={store}>
      <RouterContent />
  
      <ToastContainer />
    </Provider>
  );
}

export default App;
