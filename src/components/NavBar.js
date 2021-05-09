import React from 'react';
import {Route,Link} from 'react-router-dom';
import styles from './NavBar.module.css';
//import Home from './Home';
import Welcome from './Welcome';
import Needs from './Needs';
import Lands from './Lands';
import Models from './Models';
import Meeting from './Meeting';
import Budget from './Budget';


const NavBar = () => {


    return(
        <>
        <div className={styles.nav}>
            <ul>
                <li> <Link to="/needs">Your needs</Link></li>
                <li><Link to="/budget">Your budget</Link></li>
                <li><Link to="/lands">Our lands</Link></li>
                <li><Link to="/models">Our models</Link></li>
                <li><Link to="/meeting">Meeting</Link></li>
            </ul>
        </div>
        
        <Route path="/" exact component={Welcome} />
        <Route path="/needs"  component={Needs} />
        <Route path="/budget"  component={Budget} />
        <Route path="/lands"  component={Lands} />
        <Route path="/models"  component={Models} />
        <Route path="/meeting"  component={Meeting} />
        </>
    );



}


export default NavBar;