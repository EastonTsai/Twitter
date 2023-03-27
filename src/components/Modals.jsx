import Modal from "react-bootstrap/Modal"
import { Btn } from "components/Common"
import { ReactComponent as Close } from "files/icon/close.svg"
import { ReactComponent as Default } from "files/icon/defaultAvatar.svg"
import { ReactComponent as Add } from "files/icon/add-photo.svg"
import styles from "styles/components/modals.module.css"
import { InputBox } from "components/Common"
import { ReplyTweetItem } from "components/TweetItem"
import { useState, useRef } from "react"
import { postReplyMessage, putUserProfile } from "api/twitter"
import { addTweet } from "api/CRUD"

// 跳Modal時背景增加遮罩效果
export const ShadowModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} className={styles.shadowModal}></Modal>
  )
}

// 點擊編輯個人資料跳出來的Modal
export const EditModal = ({
  show,
  setShow,
  onHide,
  coverPage,
  avatar,
  name,
  introduction,
  setProfile,
}) => {
  const loginId = localStorage.getItem("id")
  const coverPageInput = useRef()
  const avatarInput = useRef()
  const [nameInputValue, setNameInputValue] = useState(name)
  const [introInputValue, setIntroInputValue] = useState(introduction)

  const handleCoverPageClick = () => {
    coverPageInput.current.click()
  }

  const handleAvatarClick = () => {
    avatarInput.current.click()
  }

  const handleNameChange = (e) => {
    setNameInputValue(e.target.value)
  }

  const handleIntroChange = (e) => {
    setIntroInputValue(e.target.value)
  }

  // 點擊儲存
  const handleSaveClick = async () => {
    const newCoverPage = coverPageInput.current.files[0]
    const newAvatar = avatarInput.current.files[0]
    const formData = new FormData()
    formData.append("id", loginId)
    formData.append("coverPage", newCoverPage)
    formData.append("avatar", newAvatar)
    formData.append("name", nameInputValue)
    formData.append("introduction", introInputValue)

    try {
      const newProfile = await putUserProfile({
        formData,
      })
      console.log(newProfile)
      setProfile((prev) => ({
        ...prev,
        coverPage: newProfile.coverPage,
        avatar: newProfile.avatar,
        name: newProfile.name,
        introduction: newProfile.introduction,
      }))
      setShow(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Modal show={show} onHide={onHide} className={styles.modalStyle}>
      <div className={styles.editModal}>
        <header className={styles.editHeader}>
          <Close onClick={onHide} className={styles.closeIcon} />
          <h5>編輯個人資料</h5>
          <Btn
            className="btnRoundColor"
            text="儲存"
            onClick={handleSaveClick}
          />
        </header>
        <main className={styles.editMain}>
          <div className={styles.coverPageBox}>
            <img src={coverPage} alt="背景圖" />
            <div className={styles.coverPageCover}></div>
            <button
              className={styles.addCoverPageIcon}
              onClick={handleCoverPageClick}
            >
              <Add />
              <input type="file" ref={coverPageInput} />
            </button>
          </div>
          <div className={styles.avatarBox}>
            {!avatar ? (
              <Default className={styles.defaultPhoto} />
            ) : (
              <img src={avatar} alt="avatar" />
            )}
            <div className={styles.avatarCover}></div>
            <button
              className={styles.addAvatarIcon}
              onClick={handleAvatarClick}
            >
              <Add />
              <input type="file" ref={avatarInput} />
            </button>
          </div>
        </main>
        <footer className={styles.editFooter}>
          <InputBox
            label="名稱"
            name="name"
            defaultValue={name}
            value={nameInputValue}
            onChange={handleNameChange}
          />
          <InputBox
            label="自我介紹"
            name="introduction"
            defaultValue={introduction}
            value={introInputValue}
            onChange={handleIntroChange}
          />
        </footer>
      </div>
    </Modal>
  )
}

// 點擊推文跳出來的Modal
export const TweetModal = ({ show, onHide, avatar, handleAllTweets }) => {
  const [inputValue, setInputValue] = useState("")

  const handleAddTweet = async () => {
    if (inputValue.length < 1 || inputValue.trim() === "") {
      //這裡可以跳緊告之類的--------
      return
    }
    const data = await addTweet(inputValue)
    if (!data) {
      alert("Sorry！伺服器故障囉~")
      setInputValue("")
      return
    }
    if (data === "error" || !data) {
      //告訴使用者字數超過了
      return
    }
    handleAllTweets(data)
    setInputValue("")
    onHide()
  }

  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      handleAddTweet()
    }
  }
  return (
    <Modal show={true} onHide={onHide} className={styles.modalStyle}>
      <div className={styles.tweetModal} onKeyDown={handleKeyEnter}>
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
            onChange={(e) => {
              setInputValue(e.target.value)
            }}
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
export const ReplyModal = ({
  show,
  setShow,
  onHide,
  tweet,
  tweetReply,
  setTweetReply,
  setReplyTotal,
}) => {
  // 原始推文資訊
  const originTweet = { tweet }
  const tweetId = originTweet.tweet.id
  const [inputValue, setInputValue] = useState("")

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleClick = async () => {
    if (inputValue.trim().length === 0) {
      return
    } else {
      try {
        const reply = await postReplyMessage({
          id: tweetId,
          comment: inputValue,
        })
        setTweetReply([...tweetReply, reply])
      } catch (error) {
        console.error(error)
      }
    }
    setShow(false)
    setReplyTotal((prev) => prev + 1)
  }

  return (
    <Modal show={show} onHide={onHide} className={styles.modalStyle}>
      <div className={styles.replyModal}>
        <header className={styles.replyHeader}>
          <Close onClick={onHide} className={styles.closeIcon} />
        </header>
        <main className={styles.replyMain}>
          <ReplyTweetItem {...originTweet} />
          <div className={styles.replyInput}>
            <img
              className={styles.avatar}
              src="https://picsum.photos/300/300?text=8"
              alt="大頭照"
            />
            <textarea
              className={styles.postText}
              placeholder="推你的回覆"
              value={inputValue}
              onChange={handleChange}
            ></textarea>
          </div>
        </main>
        <footer className={styles.replyFooter}>
          <Btn
            className="btnRoundColor"
            text="推文"
            type="submit"
            onClick={handleClick}
          />
        </footer>
      </div>
    </Modal>
  )
}
