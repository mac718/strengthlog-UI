import styles from "./NewWorkout.module.css";

const NewWorkout = () => {
  return (
    <>
      <div>
        <div>Today's Movements</div>
        <div></div>
      </div>
      <div>
        <div className={styles.category}>Horizontal Push</div>
        <div></div>
      </div>
      <div>
        <div className={styles.category}>Vertical Push</div>
        <div></div>
      </div>
      <div>
        <div className={styles.category}>Knee Dominant</div>
        <div></div>
      </div>
    </>
  );
};

export default NewWorkout;
