import React from 'react';
//import styles from './Backdrop.module.css';
import NavBar from '../components/NavBar';



const Backdrop = (props) => {


    return(
        <>
        <NavBar removeBackdrop={props.removeBack}/>

        </>

        


    )
}

export default Backdrop;