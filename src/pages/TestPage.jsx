import { InputBox, Btn, TweetsTab, FollowTab } from "components/Common"
import { Menu } from "components/Menu"
import AuthContext from "contexts/AuthContext"
import { useEffect, useContext } from "react"

export default function TestPage() {
  const context = useContext(AuthContext)
  //判斷是否為已登入的狀態
  // useEffect(()=>{
  //   (()=>{
  //     context.checkTokenWithSecondStage()
  //   })()
  // })
  return (
    <div>
      <Menu />
      <h5>Default Input</h5>
      <InputBox
        label="帳號"
        type="text"
        placeHolder="請填入帳號"
        wordCount="0/12"
      />
      <br />
      <h5>Error Input</h5>
      <InputBox
        className="error"
        label="帳號"
        type="text"
        placeHolder="請填入帳號"
        warningMessage="帳號不存在"
      />
      <br />
      <h5>Disable Input</h5>
      <InputBox
        className="disable"
        label="帳號"
        type="text"
        placeHolder="請填入帳號"
      />
      <br />
      <br />
      <Btn className="btnRoundColor" text="圓形按鈕" />
      <Btn className="btnRound" text="圓形按鈕" />
      <br />
      <br />
      <TweetsTab />
      <br />
      <FollowTab />
    </div>
  )
}
