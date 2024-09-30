import style from "./displayBox.module.css"
function DisplayBox({displayVal}){
  return (
    <center>
      <input type="text" className={style.display} value={displayVal} readOnly/>
    </center>

  );
}

export default DisplayBox;