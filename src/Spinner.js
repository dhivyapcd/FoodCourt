import ReactDom from 'react-dom'
import React from 'react';
import './spinner.css'

/**
 * @author:Dhivya
 * @description:Displaying loading Symbol
 * @param {*} props 
 * @returns 
 */
const Spinner = () => {
   
    return ( 
        ReactDom.createPortal( <div id ='loader' data-testid='spinner'> </div>,
            document.getElementById('spinner')))
}
export default Spinner;