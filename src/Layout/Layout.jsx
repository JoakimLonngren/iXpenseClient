import { Outlet } from "react-router-dom";
import styles from './Layout.module.scss';

function Layout(){
    return(
        <div className={styles.layoutContainer}>
            <header style={{backgroundColor:"red"}}/*className={styles.header}*/>
                <h3>iXpense</h3>
            </header>

            <main className={styles.main}>
                <Outlet/>
            </main>
        </div>
    )
}
export default Layout