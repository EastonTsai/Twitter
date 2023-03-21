

import styles from 'styles/components/adminTweet.module.css'
import { ReactComponent as CloseIcon } from 'files/icon/close.svg'
import { ReactComponent as UserIcon } from 'files/icon/logo.svg';

//這是 '一篇' 文章的樣式
export const AdminTweet = ({
  avatar,
  name,
  account,
  text,
}) => {
  /*按 XX do something... */
  const handleClick = () => { }

  return(
    <li className={styles.wrap}>
      <div className={styles.userAvatar}> 
        {/*預設沒傳頭像的顯示 */}{/*我在 vscode 上看 <img> 下有波浪文 , 不知什麼問題 ? */}
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