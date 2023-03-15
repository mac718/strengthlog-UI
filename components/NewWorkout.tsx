import { ReactElement, useState } from "react";
import MovementRect from "./MovementRect";
import styles from "./NewWorkout.module.css";
import { v4 as uuidv4 } from "uuid";

type Movement = {
  category: string;
  name: string;
};

type NewWorkoutProps = {
  movements: {
    KneeDominant: Movement[];
    HipDominant: Movement[];
    HorizontalPush: Movement[];
    VerticalPush: Movement[];
  };
};

const NewWorkout = ({ movements }: NewWorkoutProps) => {
  const [selectedMovements, setSelectedMovements] = useState<ReactElement[]>(
    []
  );
  // for handleRemoveElment - see below
  const [addedMovement, setAddedMovement] = useState<ReactElement>(<></>);

  const handleRemoveMovement = (event: any) => {
    //const target = event.target as HTMLDivElement; //get rid of property does not exist error

    const id = event.target.id;

    /* When this handler is triggered, selectedMovements is still missing the last movement that had been
       added. To rectify this, each movement that is added to selectedMovements overwrites the value of 
       addedMovement, so the last element added can be appended in this handler before performing the 
       index lookup and splice. */
    const selectedMovementsCopy = [...selectedMovements, addedMovement];
    const movementIndex = selectedMovementsCopy.findIndex(
      (m) => m.props.id === id
    );

    selectedMovementsCopy.splice(movementIndex, 1);

    setSelectedMovements(selectedMovementsCopy);
  };

  const handleMovementClick = (event: any, name: string) => {
    console.log(event);
    const id = uuidv4();
    const selectedMovement = (
      <MovementRect
        movementName={name}
        id={id}
        onClick={handleRemoveMovement}
        selected={true}
        key={id}
      />
    );
    setAddedMovement(selectedMovement);
    setSelectedMovements((prev) => [...prev, selectedMovement]);
    console.log(selectedMovements);
  };

  const kneeDom = movements["KneeDominant"].map((m) => (
    <MovementRect
      id={undefined}
      movementName={m.name}
      onClick={(event: any) => handleMovementClick(event, m.name)}
      selected={false}
      key={m.name}
    />
  ));

  const hipDom = movements["HipDominant"].map((m) => (
    <MovementRect
      id={undefined}
      movementName={m.name}
      onClick={(event: any) => handleMovementClick(event, m.name)}
      selected={false}
      key={m.name}
    />
  ));

  const horPush = movements["HorizontalPush"].map((m) => (
    <MovementRect
      id={undefined}
      movementName={m.name}
      onClick={(event: any) => handleMovementClick(event, m.name)}
      selected={false}
      key={m.name}
    />
  ));

  const vertPush = movements["VerticalPush"].map((m) => (
    <MovementRect
      id={undefined}
      movementName={m.name}
      onClick={(event: any) => handleMovementClick(event, m.name)}
      selected={false}
      key={m.name}
    />
  ));

  return (
    <>
      <h1>Today's Movements</h1>
      <div className={styles.selected}>{selectedMovements}</div>
      <div>
        <div className={styles.category}>Hip Dominant</div>
        <div className={styles.movements}>{hipDom}</div>
      </div>
      <div>
        <div className={styles.category}>Horizontal Push</div>
        <div className={styles.movements}>{horPush}</div>
      </div>
      <div>
        <div className={styles.category}>Vertical Push</div>
        <div className={styles.movements}>{vertPush}</div>
      </div>
      <div>
        <div className={styles.category}>Knee Dominant</div>
        <div className={styles.movements}>{kneeDom}</div>
      </div>
    </>
  );
};

export default NewWorkout;
