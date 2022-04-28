import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import history from 'bets-history';
import Routes from './routes';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router history={history}>
      <Routes />
      <ToastContainer
            position="bottom-center"
            autoClose={300000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
    </Router>
  );
};

export default App;
