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
    const [domReady, setDomReady] = React.useState(false)

    React.useEffect(() => {
      setDomReady(true)
    }, [])
    return ( domReady?
        ReactDom.createPortal( <div id ='loader' data-testid='spinner'> </div>,
            document.getElementById('spinner')):null)
}
export default Spinner;