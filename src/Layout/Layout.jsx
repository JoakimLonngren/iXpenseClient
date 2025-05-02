import { Outlet } from "react-router-dom";
import styles from './Layout.module.scss';
import Logout from "../Components/Logout/Logout";

function Layout(){
    return(
        <div className={styles.layoutContainer}>
            <header className={styles.header}>
                <span>iXpense</span>
                <div className={styles.links}>
                    <h5>Add Receipt</h5>
                    <h5>My Receipts</h5>
                    <h5>Summary</h5>
                </div> 
                <Logout/>
            </header>

            <main className={styles.main}>
                <Outlet/>
            </main>
        </div>
    )
}
export default Layout