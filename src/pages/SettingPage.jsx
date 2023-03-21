import styles from "styles/pages/settingPage.module.css"
import { InputBox, Btn } from "components/Common"

export default function SettingPage() {
  const res = dummyData.data
  return (
    <main className="col-6">
      <div className={styles.settingContainer}>
        <h4>帳號設定</h4>
        <div className={styles.inputContainer}>
          <InputBox label="帳號" type="test" value={res.account} />
          <InputBox label="名稱" type="test" value={res.name} />
          <InputBox label="Email" type="email" value={res.email} />
          <InputBox label="密碼" type="password" />
          <InputBox label="密碼再確認" type="password" />
        </div>
        <Btn className="btnRoundColor" text="儲存" />
      </div>
    </main>
  )
}

// GET /api/users/:id
const dummyData = {
  data: {
    id: 5,
    account: "user5",
    name: "user5",
    email: "user5@example.com",
    // "avator":"http://xxx.xxx",
    // "coverPage":"http://xxx.xxx",
    createdAt: "YYYY-MM-DDThh:mm:ss.000Z",
    updatedAt: "YYYY-MM-DDThh:mm:ss.000Z",
    followingCounts: 12,
    followerCounts: 10,
  },
}
