import React, {useState} from 'react';
import styles from './Home.module.css';


const Home = (props)=> {

    const [start, setStart] = useState(false);


    const startHandler = () => {

        setStart(true);
        props.toggleBack(start);


    }



    return(
        <div className={styles.background}>
            
            <h1> Maket</h1>

            <h2>Home building for all!</h2>

            <button onClick={startHandler}>Start</button>

        </div>
    )
}

export default Home;