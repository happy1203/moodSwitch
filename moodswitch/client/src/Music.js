import './Music.css';
import { Navbar } from './Navbar';
import { EmailContext } from './emailContext';
import { NameContext } from './nameContext';
import { useContext } from 'react';


export const Music = () => {
    const { email } = useContext(EmailContext);
    const { name } = useContext(NameContext); 
    return (
        <>
            <Navbar />
            <h1>Hi {name}!</h1>
            <h4> Welcome to your musical therapy hub. Here you will find a variety of musical ways to improve your mood :)</h4>
            <br></br>
            <h3>Your Progress</h3>
            
        </>
    )
}
