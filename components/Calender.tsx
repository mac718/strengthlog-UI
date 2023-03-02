import getDaysInMonth from "date-fns/getDaysInMonth";
import lastDayOfMonth from "date-fns/lastDayOfMonth";
import { ReactElement } from "react";
import CalenderSquare from "./CalenderSquare";
import styles from "./Calender.module.css";
import { useState } from "react";

const Calender = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = getDaysInMonth(currentDate);

  const squares: ReactElement[] = [];

  const goToPreviousMonth = () => {
    let year: number = currentDate.getFullYear();
    let month: number;
    if (currentDate.getMonth() === 0) {
      month = 11;
      year = currentDate.getFullYear() - 1;
    } else {
      month = currentDate.getMonth() - 1;
    }
    setCurrentDate((prev) => new Date(year, month, prev.getDate()));
  };

  const goToNextMonth = () => {
    let year: number = currentDate.getFullYear();
    let month: number;
    if (currentDate.getMonth() === 12) {
      month = 1;
      year = currentDate.getFullYear() + 1;
    } else {
      month = currentDate.getMonth() + 1;
    }
    setCurrentDate((prev) => new Date(year, month, prev.getDate()));
  };

  const firstOfCurrentMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  const previousMonth =
    currentDate.getMonth() === 0 ? 11 : currentDate.getMonth() - 1;
  const daysInpreviousMonth = getDaysInMonth(previousMonth);

  //squares for last few days of previous month
  for (
    let i = daysInpreviousMonth - firstOfCurrentMonth.getDay();
    i < daysInpreviousMonth;
    i++
  ) {
    squares.push(<CalenderSquare date={i} dark={true} />);
  }

  //squares for current month
  for (let i = 1; i <= daysInMonth; i++) {
    squares.push(<CalenderSquare date={i} dark={false} key={i} />);
  }

  //squares for first few days of next month
  console.log("last day", lastDayOfMonth(currentDate).getDay());
  for (let i = 0; i < 6 - lastDayOfMonth(currentDate).getDay(); i++) {
    squares.push(<CalenderSquare date={i + 1} dark={true} />);
  }

  return (
    <div>
      <h1 className={styles["month-year-heading"]}>
        <span onClick={goToPreviousMonth}>{"<"}</span>
        {currentDate.toLocaleString("default", { month: "long" })}{" "}
        {currentDate.getFullYear()}
        <span onClick={goToNextMonth}>{">"}</span>
      </h1>
      <div className={styles.grid}>{squares}</div>
    </div>
  );
};

export default Calender;
