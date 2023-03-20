import styles from 'styles/components/adminTweets.module.css'
import { AdminTweet } from 'components/AdminTweet.jsx';

let demmy = {
  data:[
    {
      name: 'AAA',
      account: 'aaa',
      text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiufq wlkej hlqkw erkjqhw lje lkr jekrj hqwlkt hwkljt herjy erjy ,merby ,ren by,ernby, rn by ber'
    },
    {
      name: 'AAA',
      account: 'aaa',
      text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiuf'
    },
    {
      name: 'AAA',
      account: 'aaa',
      text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiuf'
    },
    {
      name: 'AAA',
      account: 'aaa',
      text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiuf'
    },
    {
      name: 'AAA',
      account: 'aaa',
      text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiuf'
    },
    {
      name: 'AAA',
      account: 'aaa',
      text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiuf'
    },
    {
      name: 'AAA',
      account: 'aaa',
      text:'uhi vuh aoiuds iq ehwlg kqwv luwv iauow hiq uwhgl wiuv hoi weu fhqoiwe uf hqewoifuh ufio whfo ewiuf'
    },
  ]
}

export const AdminTweets = () => {
  /*假資料 map 的清單 */
  let tweets = demmy.data.map( dm => {
          return(
            <AdminTweet
              name={dm.name}
              account={dm.account}
              text={dm.text}
            />
          )
        })

  return (
    <div className={styles}>
      <h2 className={styles.title}> 推文清單 </h2>
      <ul>
        {tweets}
      </ul>
    </div>
  )
}
// ------------------------------------
export default AdminTweets ;
