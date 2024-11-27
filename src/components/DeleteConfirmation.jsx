import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {

  useEffect(() => {
    console.log('Timer Start');
    let timer = setTimeout(() => {
      onConfirm()
    }, TIMER)

    return () => {//clean-up function
      console.log('timer cleaned up')
      clearTimeout(timer)
    }
  }, [onConfirm]) //Passing Function as dependency i.e. we need to wrap this function or the reference of function to which this function is pointing in useCallback hook, so that the function would not be created everytime the component re-renders

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  );
}
