import styles from "./CalenderSquare.module.css";
type CalenderSquareProps = {
  date: number;
  dark: boolean;
};

const CalenderSquare = ({ date, dark }: CalenderSquareProps) => {
  let classes = `${styles.square}`;
  if (dark) {
    classes += ` ${styles["not-current"]}`;
  }

  return <div className={classes}>{date}</div>;
};

export default CalenderSquare;
