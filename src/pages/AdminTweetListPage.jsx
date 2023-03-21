
import { AdminContent } from 'components/AdminContent'
import { AdminTweet } from 'components/AdminTweet'

//這裡是 '推文清單' 區
export const AdminTweetListPage = () => {


    //-------假資料區-----------------------------
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
  let tweets = demmy.data.map( dm => {
          return(
            <AdminTweet
              name={dm.name}
              account={dm.account}
              text={dm.text}
            />
          )
        })
  //-------假資料區-----------------------------



  return(
    // AdminContent 只是一個 '容器' , 內文是 AdminTweet 這個元件
    <AdminContent title={'推文清單'}>
      {tweets}
    </AdminContent>  
  )
}
export default AdminTweetListPage;