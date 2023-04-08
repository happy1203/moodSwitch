import './Music.css';
import { Navbar } from './Navbar';
import { EmailContext } from './EmailContext';
import { useContext } from 'react';


export const Music = () => {
    const { email, setEmail } = useContext(EmailContext);
    return (
        <>
            <Navbar />
            <h1>MUSICCCC</h1>
            <h1>{email}</h1>
        </>
    )
}
