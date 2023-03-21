
//---------假資料
import {demmy} from 'demmy/demmy'
import { AdminContent } from 'components/AdminContent'
import { AdminTweet } from 'components/AdminTweet'

//這裡是 '推文清單' 區
export const AdminTweetListPage = () => {


    //-------使用假資料-----------------------------
  let tweets = demmy.data.map( dm => {
          return(
            <AdminTweet
              name={dm.name}
              account={dm.account}
              text={dm.text}
            />
          )
        })
  //-------使用假資料-----------------------------



  return(
    // AdminContent 只是一個 '容器' , 內文是 AdminTweet 這個元件
    <AdminContent title={'推文清單'}>
      {tweets}
    </AdminContent>  
  )
}
export default AdminTweetListPage;