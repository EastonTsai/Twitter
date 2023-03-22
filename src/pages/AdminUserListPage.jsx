import { dummy } from 'dummy/dummy'
import { AdminContent } from 'components/AdminContent'
import { UserCard } from 'components/UserCard'

//這裡是 '使用者列表' 區
export const AdminUserListPage = () => {

  

  //-------假資料區------------------------------

  let users = dummy.data.map( dm => {
    return(
      <UserCard
        cover={dm.coverPage}
        avatar={dm.avator}
        name={dm.name}
        account={dm.account}
        tweets={'從缺'}
        likes={dm.likeCounts}
        followers={dm.followerCounts}
        followings={dm.followingCounts}
      />
    )
  })
    //-------假資料區-----------------------------


  return(
    // AdminContent 只是一個 '容器' , 這片 UserCard 這個元件
    <AdminContent title={'使用者列表'}>
      <div className="container pt-3">
        <div className="row row-cols-auto g-3">
          {users}
        </div>
      </div>
    </AdminContent>   
  )
}
export default AdminUserListPage;