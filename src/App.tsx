import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './globalStyle.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { storeWrapper } from './redux';
import { Router } from './Router';
import swal from 'sweetalert';
import { config } from './util/config';
import {  verifyUserLoggedIn } from './services/firebaseActions';



function App() {

useEffect(() => {
  verifyUserLoggedIn().then((res) => {
    console.log('res', res);
    if(!res){
      // navigate('/login')
      console.log('deslogado', res);
    
    } else {
      console.log('logado', {res});
    }
  }).catch((err) => {
    console.log(err);
  })
}, []);


  return (
   <Provider store={storeWrapper}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
   </Provider>
  )
}

export default App
