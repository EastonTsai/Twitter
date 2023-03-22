
//---------假資料
import {dummy} from 'dummy/dummy'
import FollowListItem from 'components/FollowListItem'

export default function UserFollowingsList() {

    //-------使用假資料-----------------------------
  let listItems = dummy.data.map( dm => {
          return(
            <FollowListItem
              name={dm.name}
              text={dm.description}
              isFollow= {dm.isFollowed}
              avatar={dm.avator}
            />
          )
        })
  //-------使用假資料-----------------------------

  return(
    <div className="listContainer}">
      {listItems}
    </div>
  )
}
