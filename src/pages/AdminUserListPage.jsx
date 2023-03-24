import { dummy } from 'dummy/dummy'//假資料待刪---------
import { AdminContent } from 'components/AdminContent'
// import { useEffect, useState } from 'react'
// import { getAdminUsers } from 'api/CRUD'
import UserCard from 'components/UserCard'

//這裡是 '使用者列表' 區
export const AdminUserListPage = () => {
  // const [ users, setUsers ] = useState(null)

  // useEffect(()=>{
  //   const getData = async () => { //請求清單用的函式
  //     const data = await getAdminUsers()
  //     setUsers(data)
  //   }
  //   getData()
  // },[])

  //-------假資料區------------------------------

  const usersList = dummy.data.map( user => {
    return(
      <UserCard
        key={user.id}
        cover={user.coverPage}
        avatar={user.avator}
        name={user.name}
        account={user.account}
        tweets={'從缺'}
        likes={user.likeCounts}
        followers={user.followerCounts}
        followings={user.followingCounts}
      />
    )
  })
    //-------假資料區-----------------------------


  return(
    // AdminContent 只是一個 '容器' , 這片 UserCard 這個元件
    <AdminContent title={'使用者列表'}>
      <div className="container pt-3">
        <div className="row row-cols-auto g-3">
          {usersList}
        </div>
      </div>
    </AdminContent>   
  )
}
export default AdminUserListPage;