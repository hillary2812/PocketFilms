// import styles from "./footer.module.css";

// const Footer = () => (
//   <div className="footer" style={styles}>
//     Footer
//   </div>
// );

// export default NavBar;
import Link from "next/link";
import styles from "../styles/footer.module.css";
import HomeOutlined from "@ant-design/icons/HomeOutlined";
import SearchOutlined from "@ant-design/icons/SearchOutlined";
import BorderBottomOutlined from "@ant-design/icons/BorderBottomOutlined";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <ul className={styles.navItems}>
        <li className={styles.footerItems}>
          <HomeOutlined />
          HOME
        </li>
        <li className={styles.footerItems}>
          <SearchOutlined />
          Search
        </li>
        <li className={styles.footerItems}>
          <BorderBottomOutlined />
          Distribute
        </li>
        <li className={styles.footerItems}>
          <Image src="/icons/Group.svg" width={100} height={64} />
          Festivals
        </li>
      </ul>
    </footer>
  );
}
