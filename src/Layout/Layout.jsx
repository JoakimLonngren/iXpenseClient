import { Outlet, useNavigate } from "react-router-dom";
import styles from './Layout.module.scss';
import Logout from "../Components/Logout/Logout";

function Layout(){
    const navigate = useNavigate()

    return(
        <div className={styles.layoutContainer}>
            <header className={styles.header}>
                <span onClick={() => navigate('/profilePage')}>iXpense</span>
                <div className={styles.links}>
                    <h5 onClick={() => navigate('/createReceipt')}>Register receipt</h5>
                    <h5 onClick={() => navigate('/receiptList')}>Your receipts</h5>
                    <h5 onClick={() => navigate('/summaryPage')}>Period summary</h5>
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