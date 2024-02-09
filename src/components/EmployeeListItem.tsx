import styles from "./EmployeeListItem.module.css";

type Props = {
  name: string;
  title: string;
  imgPath: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  size: "small" | "large";
};

export const EmployeeListItem = ({
  name,
  title,
  imgPath,
  onClick,
  size,
}: Props) => {
  return (
    <div
      id={name}
      className={`has-click-event ${styles.container} ${
        size === "large" && styles["container-large"]
      }`}
      onClick={onClick}
    >
      <img className={size} src={imgPath} alt={name} title={name}></img>
      <div>
        <h3 className={size}>{name}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};
