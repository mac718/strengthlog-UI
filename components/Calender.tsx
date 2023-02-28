import getDaysInMonth from "date-fns/getDaysInMonth";
import lastDayOfMonth from "date-fns/lastDayOfMonth";
import { ReactElement } from "react";
import CalenderSquare from "./CalenderSquare";
import styles from "./Calender.module.css";

const Calender = () => {
  const currentDate = new Date();
  const daysInMonth = getDaysInMonth(currentDate);

  const squares: ReactElement[] = [];

  const firstOfCurrentMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  const previousMonth = currentDate.getMonth() - 1;
  const daysInpreviousMonth = getDaysInMonth(previousMonth);

  for (
    let i = daysInpreviousMonth - currentDate.getDay();
    i <= daysInpreviousMonth;
    i++
  ) {
    squares.push(<CalenderSquare date={i} dark={true} />);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    squares.push(<CalenderSquare date={i} dark={false} key={i} />);
  }

  let nextMonthDay = 1;
  for (let i = 7 - lastDayOfMonth(currentDate).getDay(); i <= 8; i++) {
    squares.push(<CalenderSquare date={nextMonthDay} dark={true} />);
    nextMonthDay++;
  }

  return (
    <div>
      <h1>
        {currentDate.toLocaleString("default", { month: "long" })}{" "}
        {currentDate.getFullYear()}
      </h1>
      <div className={styles.grid}>{squares}</div>
    </div>
  );
};

export default Calender;
