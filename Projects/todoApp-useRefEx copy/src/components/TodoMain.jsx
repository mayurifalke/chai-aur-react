//useRef hook is for improve performance. we can pass the ref to the input field and can access it's current value as we accessed as below
import style from "./TodoMain.module.css";
import { MdAddComment } from "react-icons/md";
import { useRef } from "react";

export default function TodoMain({ handleOnClick }) {
  // let [inputText, setInputText] = useState("");
  // let [inputDate, setInputDate] = useState("");
  let inputTextElement = useRef();
  let inputDateElement = useRef();

  // function handleOnChangeInput(event) {
  //   let newInput = event.target.value;
  //   setInputText(newInput);
  // }
  // function handleOnChangeDate(event) {
  //   let newDate = event.target.value;
  //   setInputDate(newDate);
  // }
  return (
    <div className={`${style["marg"]}`}>
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            ref={inputTextElement}
            placeholder="Enter Todo here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={inputDateElement}  />
        </div>
        <div className="col-2">
          {/* By default type ofbutton is submit in the form */}
          <button type="button" className="btn btn-success"
           onClick={(event) => {
            //accessing the value of input field using ref
            let inputText = inputTextElement.current.value;
            let inputDate = inputDateElement.current.value;
            inputTextElement.current.value = "";
            inputDateElement.current.value = ""
            handleOnClick(inputText, inputDate);
          }}>
            <MdAddComment />
          </button>
        </div>
      </div>
    </div>
  );
}
