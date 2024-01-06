import React, { useContext, useLayoutEffect, useState } from 'react'
import { AppContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { showBook } = useContext(AppContext);
    const navigate = useNavigate();

    useLayoutEffect(()=>{
        if(showBook){
            navigate("/")
        }
    },[])

  return (
    <div>
        {children}
    </div>
  )
}

export default PrivateRoute