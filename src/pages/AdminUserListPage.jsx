import styles from 'styles/components/adminUserListPage.module.css'
import { AdminContent } from 'components/AdminContent'
import { useEffect, useState, useContext } from 'react'
import { getAdminUsersApi } from 'api/CRUD'
import UserCard from 'components/UserCard'
import { useNavigate } from 'react-router'
import AuthContext from 'contexts/AuthContext'

export default function AdminUserListPage (){
  const [ users, setUsers ] = useState(null)
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
      const data = await getAdminUsersApi()
      if(data === '請求失敗'){
        alert('伺服器發生問題')
        navigate('/login')
      }
      if(data.status === 'error'){
        navigate('/login')
      }
      console.log(data)
      setUsers(data)
    }
    getData()
  },[])

  //要渲染的使用者清單
  const usersList = users?.data.map( user => {
    return(
      <UserCard
        key={user.id}
        cover={user.coverPage}
        avatar={user.avatar}
        name={user.name}
        account={user.account}
        tweets={user.tweetCounts}
        likes={user.likeCounts}
        followings={user.followingCounts}
        followers={user.followerCounts}
      />
    )
  })


  return(
    // AdminContent 只是一個 '容器' , 放很多片 UserCard 這個元件
    <AdminContent title={'使用者列表'}>
      <div className={`container pt-3 ${styles.wrap}`}>
        <div className="row row-cols-auto g-3">
          {usersList}
        </div>
      </div>
    </AdminContent>   
  )
}
