import Image from "next/image";
import Link from "../components/Link";
import Footer from "../components/Link";
import Header from "../components/Link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <Footer />
    </div>
  );
}
