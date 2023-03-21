
import { AdminContent } from 'components/AdminContent'
import { UserCard } from 'components/UserCard'

//這裡是 '使用者列表' 區
export const AdminUserListPage = () => {

  //-------假資料區------------------------------
    let demmy = {
    data:[
      {
        name: 'AAA',
        account: 'aaa',
        text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiufq wlkej hlqkw erkjqhw lje lkr jekrj hqwlkt hwkljt herjy erjy ,merby ,ren by,ernby, rn by ber',
        cover: 'https://picsum.photos/500/400?random=1',
        avatar: 'https://picsum.photos/500/400?random=2',
        tweets: '25',
        likes: '32',
        followers: '99',
        followings: '5',
      },
      {
        name: 'AAA',
        account: 'aaa',
        text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiufq wlkej hlqkw erkjqhw lje lkr jekrj hqwlkt hwkljt herjy erjy ,merby ,ren by,ernby, rn by ber',
        cover: 'https://picsum.photos/500/400?random=1',
        avatar: 'https://picsum.photos/500/400?random=2',
        tweets: '25',
        likes: '32',
        followers: '76',
        followings: '5',
      },
      {
        name: 'AAA',
        account: 'aaa',
        text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiufq wlkej hlqkw erkjqhw lje lkr jekrj hqwlkt hwkljt herjy erjy ,merby ,ren by,ernby, rn by ber',
        cover: 'https://picsum.photos/500/400?random=1',
        avatar: 'https://picsum.photos/500/400?random=2',
        tweets: '25',
        likes: '32',
        followers: '76',
        followings: '5',
      },
      {
        name: 'AAA',
        account: 'aaa',
        text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiufq wlkej hlqkw erkjqhw lje lkr jekrj hqwlkt hwkljt herjy erjy ,merby ,ren by,ernby, rn by ber',
        cover: 'https://picsum.photos/500/400?random=1',
        avatar: 'https://picsum.photos/500/400?random=2',
        tweets: '25',
        likes: '32',
        followers: '76',
        followings: '5',
      },
      {
        name: 'AAA',
        account: 'aaa',
        text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiufq wlkej hlqkw erkjqhw lje lkr jekrj hqwlkt hwkljt herjy erjy ,merby ,ren by,ernby, rn by ber',
        cover: 'https://picsum.photos/500/400?random=1',
        avatar: 'https://picsum.photos/500/400?random=2',
        tweets: '25',
        likes: '32',
        followers: '76',
        followings: '5',
      },
      {
        name: 'AAA',
        account: 'aaa',
        text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiufq wlkej hlqkw erkjqhw lje lkr jekrj hqwlkt hwkljt herjy erjy ,merby ,ren by,ernby, rn by ber',
        cover: 'https://picsum.photos/500/400?random=1',
        avatar: 'https://picsum.photos/500/400?random=2',
        tweets: '25',
        likes: '32',
        followers: '76',
        followings: '5',
      },
      {
        name: 'AAA',
        account: 'aaa',
        text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiufq wlkej hlqkw erkjqhw lje lkr jekrj hqwlkt hwkljt herjy erjy ,merby ,ren by,ernby, rn by ber',
        cover: 'https://picsum.photos/500/400?random=1',
        avatar: 'https://picsum.photos/500/400?random=2',
        tweets: '25',
        likes: '32',
        followers: '76',
        followings: '5',
      },
      {
        name: 'AAA',
        account: 'aaa',
        text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiufq wlkej hlqkw erkjqhw lje lkr jekrj hqwlkt hwkljt herjy erjy ,merby ,ren by,ernby, rn by ber',
        cover: 'https://picsum.photos/500/400?random=1',
        avatar: 'https://picsum.photos/500/400?random=2',
        tweets: '25',
        likes: '32',
        followers: '76',
        followings: '5',
      },
      {
        name: 'AAA',
        account: 'aaa',
        text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiufq wlkej hlqkw erkjqhw lje lkr jekrj hqwlkt hwkljt herjy erjy ,merby ,ren by,ernby, rn by ber',
        cover: 'https://picsum.photos/500/400?random=1',
        avatar: 'https://picsum.photos/500/400?random=2',
        tweets: '25',
        likes: '32',
        followers: '76',
        followings: '5',
      },
      {
        name: 'AAA',
        account: 'aaa',
        text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiufq wlkej hlqkw erkjqhw lje lkr jekrj hqwlkt hwkljt herjy erjy ,merby ,ren by,ernby, rn by ber',
        cover: 'https://picsum.photos/500/400?random=1',
        avatar: 'https://picsum.photos/500/400?random=2',
        tweets: '25',
        likes: '32',
        followers: '76',
        followings: '5',
      },
      {
        name: 'AAA',
        account: 'aaa',
        text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiufq wlkej hlqkw erkjqhw lje lkr jekrj hqwlkt hwkljt herjy erjy ,merby ,ren by,ernby, rn by ber',
        cover: 'https://picsum.photos/500/400?random=1',
        avatar: 'https://picsum.photos/500/400?random=2',
        tweets: '25',
        likes: '32',
        followers: '76',
        followings: '5',
      },
      {
        name: 'AAA',
        account: 'aaa',
        text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiufq wlkej hlqkw erkjqhw lje lkr jekrj hqwlkt hwkljt herjy erjy ,merby ,ren by,ernby, rn by ber',
        cover: 'https://picsum.photos/500/400?random=1',
        avatar: 'https://picsum.photos/500/400?random=2',
        tweets: '25',
        likes: '32',
        followers: '76',
        followings: '5',
      },
      {
        name: 'AAA',
        account: 'aaa',
        text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiufq wlkej hlqkw erkjqhw lje lkr jekrj hqwlkt hwkljt herjy erjy ,merby ,ren by,ernby, rn by ber',
        cover: 'https://picsum.photos/500/400?random=1',
        avatar: 'https://picsum.photos/500/400?random=2',
        tweets: '25',
        likes: '32',
        followers: '76',
        followings: '5',
      },
      {
        name: 'AAA',
        account: 'aaa',
        text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiufq wlkej hlqkw erkjqhw lje lkr jekrj hqwlkt hwkljt herjy erjy ,merby ,ren by,ernby, rn by ber',
        cover: 'https://picsum.photos/500/400?random=1',
        avatar: 'https://picsum.photos/500/400?random=2',
        tweets: '25',
        likes: '32',
        followers: '76',
        followings: '5',
      },
      {
        name: 'AAA',
        account: 'aaa',
        text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiufq wlkej hlqkw erkjqhw lje lkr jekrj hqwlkt hwkljt herjy erjy ,merby ,ren by,ernby, rn by ber',
        cover: 'https://picsum.photos/500/400?random=1',
        avatar: 'https://picsum.photos/500/400?random=2',
        tweets: '25',
        likes: '32',
        followers: '76',
        followings: '5',
      },
      {
        name: 'AAA',
        account: 'aaa',
        text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiufq wlkej hlqkw erkjqhw lje lkr jekrj hqwlkt hwkljt herjy erjy ,merby ,ren by,ernby, rn by ber',
        cover: 'https://picsum.photos/500/400?random=1',
        avatar: 'https://picsum.photos/500/400?random=2',
        tweets: '25',
        likes: '32',
        followers: '76',
        followings: '5',
      },
      {
        name: 'AAA',
        account: 'aaa',
        text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiufq wlkej hlqkw erkjqhw lje lkr jekrj hqwlkt hwkljt herjy erjy ,merby ,ren by,ernby, rn by ber',
        cover: 'https://picsum.photos/500/400?random=1',
        avatar: 'https://picsum.photos/500/400?random=2',
        tweets: '25',
        likes: '32',
        followers: '76',
        followings: '5',
      },
      {
        name: 'AAA',
        account: 'aaa',
        text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiufq wlkej hlqkw erkjqhw lje lkr jekrj hqwlkt hwkljt herjy erjy ,merby ,ren by,ernby, rn by ber',
        cover: 'https://picsum.photos/500/400?random=1',
        avatar: 'https://picsum.photos/500/400?random=2',
        tweets: '25',
        likes: '32',
        followers: '76',
        followings: '5',
      },
      {
        name: 'AAA',
        account: 'aaa',
        text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiufq wlkej hlqkw erkjqhw lje lkr jekrj hqwlkt hwkljt herjy erjy ,merby ,ren by,ernby, rn by ber',
        cover: 'https://picsum.photos/500/400?random=1',
        avatar: 'https://picsum.photos/500/400?random=2',
        tweets: '25',
        likes: '32',
        followers: '76',
        followings: '5',
      },
      {
        name: 'AAA',
        account: 'aaa',
        text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiufq wlkej hlqkw erkjqhw lje lkr jekrj hqwlkt hwkljt herjy erjy ,merby ,ren by,ernby, rn by ber',
        cover: 'https://picsum.photos/500/400?random=1',
        avatar: 'https://picsum.photos/500/400?random=2',
        tweets: '25',
        likes: '32',
        followers: '76',
        followings: '5',
      },
    ]
  }
  let users = demmy.data.map( dm => {
    return(
      <UserCard
        cover={dm.cover}
        avatar={dm.avatar}
        name={dm.name}
        account={dm.account}
        tweets={dm.tweets}
        likes={dm.likes}
        followers={dm.followers}
        followings={dm.followings}
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