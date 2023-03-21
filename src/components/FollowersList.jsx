
//---------假資料
import {demmy} from 'demmy/demmy'
import { ListItem } from 'components/ListItem'

// 元件起始點 -----------------
const FollowersList = () => {

    //-------使用假資料-----------------------------
  let listItems = demmy.data.map( dm => {
          return(
            <ListItem
              name={dm.name}
              text={dm.description}
              isFollow= {dm.isFollowed}
              avatar={dm.avator}
            />
          )
        })
  //-------使用假資料-----------------------------


  
  return(
    <div>
      <div className='row justify-content-center'>
        <div className='col-6'>
          {listItems}
        </div>
      </div>
    </div>
  )
}
export default FollowersList;