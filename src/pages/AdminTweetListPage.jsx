
import {dummy} from 'dummy/dummy' //假資料待刪------------
import { getAdminTweets } from 'api/CRUD'
import { deleteTweet } from 'api/CRUD';
import { AdminContent } from 'components/AdminContent'
import AdminTweet from 'components/AdminTweet'
import { useEffect, useState } from 'react'

//這裡是 '推文清單' 區
export default function AdminTweetListPage () {
  const [ tweets, setTweets ] = useState(null)

  useEffect(()=>{
    const getData = async () => { //請求清單用的函式
      const token = localStorage.getItem('adminToken')
      const data = await getAdminTweets(token)
      console.log(data.data)
      setTweets(data.data)
    }
    getData()
  },[])

    //-------使用假資料-----------------------------
  // const tweets = dummy.data
  let userTweets = tweets?.map( tweet => {
          return(
            <AdminTweet
              key={tweet.id}
              id={tweet.id}
              name={tweet.name}
              account={tweet.account}
              avatar={tweet.avatar}
              description={tweet.description}
              // createdAt //計數推文創建多久了
              // handleDeleteTweet={handleDeleteTweet}
            />
          )
        })
  // -------使用假資料-----------------------------
  // 刪除推文的函式 - 傳到 AdminTweet 元件使用
  const handleDeleteTweet = async (id) => {
    const message = await deleteTweet(id)
    console.log(message) //通知有沒有成功
    setTweets(
      tweets.filter(tweet => tweet.id === id)
    )
  }



  return(
    // AdminContent 只是一個 '容器' , 內文是 AdminTweet 這個元件
    <AdminContent title={'推文清單'}>
      {userTweets}
    </AdminContent>  
  )
}
