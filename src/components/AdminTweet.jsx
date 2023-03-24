

import styles from 'styles/components/adminTweet.module.css'
import { ReactComponent as CloseIcon } from 'files/icon/close.svg'
import { ReactComponent as UserIcon } from 'files/icon/logo.svg';

//這是 '一篇' 文章的樣式
export default function AdminTweet ({
  id, 
  avatar, 
  name, 
  account, 
  description, 
  handleDeleteTweet,
  createdAt,
}) {
  return(
    <li className={styles.wrap}>
      <div className={styles.userAvatar}> 
        {/*預設沒傳頭像的顯示 */}
        {avatar ? <img alt='' src={avatar} /> : <UserIcon/>}
      </div>
      <div className={styles.tweetContent}>
        <h3 className={styles.name}>
          {name} 
          <span className={styles.account}> @{account} </span> 
          <span className={styles.account}> {createdAt?createdAt:'功能未實現'} </span> 
        </h3>
        <p className={styles.text}> {description} </p>
      </div>
      <button 
        className={styles.closeButton}
        onClick={()=>{handleDeleteTweet(id)}}
      >
        <CloseIcon /> 
      </button>
    </li>
  )
} 
