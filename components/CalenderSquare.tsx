import styles from "./CalenderSquare.module.css";
type CalenderSquareProps = {
  date: number;
  dark: boolean;
  currentDay: boolean;
};

const CalenderSquare = ({ date, dark, currentDay }: CalenderSquareProps) => {
  let classes = `${styles.square}`;
  if (dark) {
    classes += ` ${styles["not-current-month"]}`;
  }
  if (currentDay) {
    classes += ` ${styles["current-day"]}`;
  }

  return <div className={classes}>{date}</div>;
};

export default CalenderSquare;
