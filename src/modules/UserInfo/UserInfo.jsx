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
        <div className={styles.userInfoBox}>
            <RegisterForm onClick={handlSubmit} />
            {userInfo.length !== 0 && <ul className={styles.list}>
                <h3 className={styles.titleInfo}>User Info:</h3>
                {userInfo.map(({id, name, email}) => {
                   
                    return (<li key={id} className={styles.items}>
                        <p>{ name}</p>
                        <p>{email }</p>
                    </li>)
              })}  
            </ul>}
        </div>
    )
}

export default UserInfo