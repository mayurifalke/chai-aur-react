import { useState } from "react";
import style from "./TodoMain.module.css";
import { MdAddComment } from "react-icons/md";

export default function TodoMain({ handleOnClick }) {
  let [inputText, setInputText] = useState("");
  let [inputDate, setInputDate] = useState("");

  function handleOnChangeInput(event) {
    let newInput = event.target.value;
    setInputText(newInput);
  }
  function handleOnChangeDate(event) {
    let newDate = event.target.value;
    setInputDate(newDate);
  }
  return (
    <div className={`  ${style["marg"]}`}>
      <form
        className="row"
        onSubmit={(event) => {
          //by default the form submit the data of form on the browser thus prevent it's default bheaviour
          event.preventDefault();
          handleOnClick(inputText, inputDate);
          setInputText("");
          setInputDate("");
        }}
      >
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            onChange={handleOnChangeInput}
            value={inputText}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleOnChangeDate} value={inputDate} />
        </div>
        <div className="col-2">
          {/* By default type ofbutton is submit in the form */}
          <button type="submit" className="btn btn-success">
            <MdAddComment />
          </button>
        </div>
      </form>
    </div>
  );
}
