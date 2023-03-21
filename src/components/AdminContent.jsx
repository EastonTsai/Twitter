import styles from 'styles/components/adminContent.module.css'

export const AdminContent = ({title, children}) => {

  return (
    <div className={styles.container}>
      <h2 className={styles.title}> {title} </h2>
      <ul className={styles.tweetsWrap}>
        {children}
      </ul>
    </div>
  )
}
export default AdminContent ;
