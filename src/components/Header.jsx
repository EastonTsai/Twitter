import { ReactComponent as Logo } from "files/icon/logo.svg"
import styles from "styles/components/header.module.css"

export const Header = ({ title }) => {
  return (
    <div className={`container ${styles.headerContainer}`}>
      <div className="row">
        <Logo />
      </div>
      <div className="row">
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  )
}
