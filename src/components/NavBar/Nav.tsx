import Link from "next/link";
import Image from "next/image";
import styles from "./Nav.module.css";
export default function Navbar() {
  return (
    <nav className={styles.navBar}>
      <h1 className={styles.titleHospitalName}>Ibn-i Sina Hospital</h1>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/appointments">Appointments</Link>
        </li>
        <li>
          <Link href="/inventory">Inventory</Link>
        </li>
        <li>
          <Link href="/patient-portal">Patient Portal</Link>
        </li>
      </ul>
      <div className={styles.profile}>
        <Image
          src="/profile.jpg"
          alt="profile"
          width={50}
          height={50}
          className={styles.profileImg}
        />
        <div className={styles.hamburgerMenu}></div>
      </div>
    </nav>
  );
}
