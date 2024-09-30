import style from "./displayBox.module.css"
function DisplayBox(){
  return (
    <center>
      <input type="text" className={style.display}/>
    </center>

  );
}

export default DisplayBox;