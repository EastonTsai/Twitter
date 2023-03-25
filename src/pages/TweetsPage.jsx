import { PostBox } from "components/PostBox"
import { TweetsList } from "components/TweetsList"
import { RecommendBoard } from "components/RecommendBoard"
import styles from "styles/pages/tweetsPage.module.css"
import { useState, useEffect } from "react"
import { addTweet, getAllTweets } from "api/CRUD"

export default function TweetsPage() {
  const [ tweets, setTweets ] = useState([])
  const [ inputValue, setInputValue ] = useState('')
  //進來先取得全站所有推文
  useEffect(()=>{
    const getTweets = async () => {
      const tweets = await getAllTweets()
      setTweets(tweets)
    }
    getTweets()
  },[])

//這裡是點擊 postBox 裡的 '推文' 去新增推文
  const handleAddTweet = async ()=>{
    if(inputValue.length < 1 || inputValue.trim('') === '' ){ return }
    //送出
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
      setTweets([data, ...tweets])
      setInputValue('')
  }

  return (
    <>
      <main className={`col-6 ${styles.mainStyle}`}>
        <div className="tweetsPage">
          <PostBox 
            value={inputValue}
            onChange={(e)=>{setInputValue(e.target.value)}}
            onClick={handleAddTweet}
          />
          <TweetsList tweets={tweets} />
        </div>
      </main>
      <footer className="col-3">
        <RecommendBoard />
      </footer>
    </>
  )
}
