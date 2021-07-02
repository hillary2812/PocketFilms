import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "./Link";

const Header = () => (
  <div className="header" style={styles}>
    <div className="header__logo">
      <Image src="/pocketfilm_logo.svg" width={100} height={64} />
    </div>
    {/* <div className="header__links">
      <Link path="/SignUp" />
    </div> */}
  </div>
);

export default Header;
