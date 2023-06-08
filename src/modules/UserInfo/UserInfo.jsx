import { useState } from 'react';
import styles from './UserInfo.module.scss';
import RegisterForm from '../RegisterForm/RegisterForm';
import { nanoid } from 'nanoid';


const UserInfo = () => {

    const [userInfo, setUserInfo] = useState([]);

    const handlSubmit = (result) => {
        result.id = nanoid();
        setUserInfo(prevUser => [...prevUser, result]);
    }
    
    return (
        <>
            <RegisterForm onClick={handlSubmit} />
            <ul className={styles.list}>
                {userInfo.map(({id, name, email}) => {
                   
                    return (<li key={id} className={styles.items}>
                        <p>{ name}</p>
                        <p>{email }</p>
                    </li>)
              })}  
            </ul>
            
        </>
    )
}

export default UserInfo