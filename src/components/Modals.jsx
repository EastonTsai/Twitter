import Modal from "react-bootstrap/Modal"
import { Btn } from "components/Common"
import { ReactComponent as Close } from "files/icon/close.svg"
import styles from "styles/components/modals.module.css"
import { InputBox } from "components/Common"
import { ReplyTweetItem } from "components/TweetItem"
import { dummyData } from "components/TweetsList"
import { useState } from "react"
import { addTweet } from "api/CRUD"

// 跳Modal時背景增加遮罩效果
export const ShadowModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} className={styles.shadowModal}></Modal>
  )
}

// 點擊編輯個人資料跳出來的Modal
export const EditModal = ({ show, onHide, coverPage, avatar }) => {
  return (
    <Modal show={show} onHide={onHide} className={styles.modalStyle}>
      <div className={styles.editModal}>
        <header className={styles.editHeader}>
          <Close onClick={onHide} className={styles.closeIcon} />
          <h5>編輯個人資料</h5>
          <Btn className="btnRoundColor" text="儲存" />
        </header>
        <main className={styles.editMain}>
          <div className={styles.coverPageBox}>
            <img src="https://picsum.photos/300/300?text=7" alt="背景圖" />
          </div>
          <div className={styles.avatarBox}>
            <img src="https://picsum.photos/300/300?text=8" alt="大頭貼" />
          </div>
        </main>
        <footer className={styles.editFooter}>
          <InputBox label="名稱" name="name" />
          <InputBox label="自我介紹" name="introduction" />
        </footer>
      </div>
    </Modal>
  )
}

// 點擊推文跳出來的Modal
export const TweetModal = ({ show, onHide, avatar }) => {
  const [ inputValue, setInputValue ] = useState('')

  const handleAddTweet = async () => {
    console.log('555555555555555')
    if(inputValue.length < 1 || inputValue.trim() === ''){
      //這裡可以跳緊告之類的--------
      return 
    }
    const data = await addTweet(inputValue)
    console.log('取得的資料是: ', data)
      if(!data){
        alert('Sorry！伺服器故障囉~')
        setInputValue('')
        return
      }
      if(data === 'error' || !data){
        //告訴使用者字數超過了
        return
      }
    alert('上傳推文囉！記得按 "重新整理" 才能看到最新推文哦！')
    setInputValue('')
    onHide()
  }

  const handleKeyEnter = (e) => {
    if(e.key === 'Enter'){
      handleAddTweet()
    }
  }
  return (
    <Modal show={true} onHide={onHide} className={styles.modalStyle}>
      <div 
        className={styles.tweetModal}
        onKeyDown={handleKeyEnter}
      >
        <header className={styles.tweetHeader}>
          <Close onClick={onHide} className={styles.closeIcon} />
        </header>
        <main className={styles.tweetMain}>
          <img
            className={styles.avatar}
            src="https://picsum.photos/300/300?text=8"
            alt="大頭照"
          />
          <textarea
            className={styles.postText}
            placeholder="有什麼新鮮事？"
            value={inputValue}
            onChange={(e)=>{setInputValue(e.target.value)}}
          ></textarea>
        </main>
        <footer className={styles.tweetFooter}>
          <Btn className="btnRoundColor" text="推文" onClick={handleAddTweet} />
        </footer>
      </div>
    </Modal>
  )
}

// 點擊回覆icon跳出回覆Modal

export const ReplyModal = ({ show, onHide, replyId }) => {
  console.log(replyId)
  // 暫用tweetlist的dummyData
  const replyTweetData = dummyData.data.filter((tweet) => tweet.id === replyId)

  return (
    <Modal show={show} onHide={onHide} className={styles.modalStyle}>
      <div className={styles.replyModal}>
        <header className={styles.replyHeader}>
          <Close onClick={onHide} className={styles.closeIcon} />
        </header>
        <main className={styles.replyMain}>
          <ReplyTweetItem {...replyTweetData[0]} />
          <div className={styles.replyInput}>
            <img
              className={styles.avatar}
              src="https://picsum.photos/300/300?text=8"
              alt="大頭照"
            />
            <textarea
              className={styles.postText}
              placeholder="推你的回覆"
            ></textarea>
          </div>
        </main>
        <footer className={styles.replyFooter}>
          <Btn className="btnRoundColor" text="推文" />
        </footer>
      </div>
    </Modal>
  )
}
