import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1>CONTACT app</h1>
      <p>
        <a href="https://www.youtube.com/">youtube</a> | Mohammad Baharlou`s
        react app, week 14☑︎
      </p>
    </div>
  );
}

export default Header;
