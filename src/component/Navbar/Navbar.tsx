import styles from "./Navbar.module.scss"; 
import { NavbarProps } from "./Navbar.types.ts"
import logo from '../../assets/logo.png'

const Navbar = ({}: NavbarProps) => { 
    return(
        <div className={styles.Navbar}>
            <div >
                <img className={styles.Logo} src={logo} alt="" />
            </div>
            <h3>Restaurant Rating App</h3>
        </div>
    )
} 
 
export default Navbar 
