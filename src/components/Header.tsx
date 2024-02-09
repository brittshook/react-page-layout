import styles from "./Header.module.css";

type Props = {
  children: string;
  showBackButton?: boolean;
};

export const Header = ({ children, showBackButton }: Props) => {
  return (
    <header className={styles.header}>
      {showBackButton && (
        <button className={styles.back} type="button">
          <img src="icons/back.svg" alt="back" title="back"></img>
        </button>
      )}
      <h2>{children}</h2>
    </header>
  );
};
