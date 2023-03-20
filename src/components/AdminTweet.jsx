

import styles from 'styles/components/adminTweet.module.css'
import { ReactComponent as CloseIcon } from 'files/icon/close.svg'
import { ReactComponent as UserIcon } from 'files/icon/Icon.svg';

export const AdminTweet = ({
  avatar,
  name,
  account,
  text,
}) => {

  const handleClick = () => { /*按 XX do something... */}

  return(
    <li className={styles.wrap}>
      <div className={styles.userAvatar}> 
        {/*預設沒傳頭像的顯示 */}
        {avatar ? <img src={avatar} /> : <UserIcon/>}
      </div>
      <div className={styles.tweetContent}>
        <h3 className={styles.name}>
          {name} 
          <span className={styles.account}> {account} </span> 
        </h3>
        <p className={styles.text}> {text} </p>
      </div>
      <button 
        className={styles.closeButton}
        onClick={handleClick}
      >
        <CloseIcon /> 
      </button>
    </li>
  )
} 

export default AdminTweet ;