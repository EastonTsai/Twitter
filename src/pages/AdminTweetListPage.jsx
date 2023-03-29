
import { deleteTweetApi, getAdminTweets } from 'api/CRUD'
import { AdminContent } from 'components/AdminContent'
import AdminTweet from 'components/AdminTweet'
import AuthContext from 'contexts/AuthContext'
import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router'

//這裡是 '推文清單' 區
export default function AdminTweetListPage () {
  const [ tweets, setTweets ] = useState(null)
  const navigate = useNavigate()
  const context = useContext(AuthContext)
  //判斷是否為已登入的狀態
  // useEffect(()=>{
  //   (()=>{
  //     context.checkTokenWithAdminSecondStageInAdmin()
  //   })()
  // })

  useEffect(()=>{
    const getData = async () => { //請求清單用的函式
      const data = await getAdminTweets()
      if(data.status === 'error'){
        alert('伺服器發生問題')
        console.error('來自後端的 message: ',data.message)
        navigate('/login')
        return
      }
      setTweets(data)
    }
    getData()
  },[])

    // 刪除推文的函式 - 傳到 AdminTweet 元件使用
  const handleDeleteTweet = async (id) => {
    const message = await deleteTweetApi(id)
    console.log(message) //通知有沒有成功
    setTweets(
      tweets.filter(tweet => tweet.id !== id)
    )
  }
  //要被渲染的清單
  let userTweets = tweets?.map( tweet => {
          return(
            <AdminTweet
              key={tweet.id}
              id={tweet.id}
              name={tweet.User.name}
              account={tweet.User.account}
              avatar={tweet.User.avatar}
              description={tweet.description}
              createdAt={tweet.createdAt}
              handleDeleteTweet={handleDeleteTweet}
            />
          )
        })

  return(
    // AdminContent 只是一個 '容器' , 內文是 AdminTweet 這個元件
    <AdminContent title={'推文清單'}>
      {userTweets}
    </AdminContent>  
  )
}
