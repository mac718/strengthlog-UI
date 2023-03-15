import { MouseEventHandler } from "react";
import styles from "./MovementRect.module.css";

type MovementRectProps = {
  movementName: string;
  id: string | undefined;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
  selected: boolean;
};

const MovementRect = ({
  movementName,
  id,
  onClick,
  selected,
}: MovementRectProps) => {
  return (
    <div id={id} className={styles.rect} onClick={onClick}>
      {movementName}
    </div>
  );
};

export default MovementRect;
