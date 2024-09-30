import Button from "./Button.jsx";
import styles from "./AllButtons.module.css";

function AllButtons({ data, handleOnClick }) {
  return (
    <center>
      <div className={styles.allbtn}>
        {data.map((item) => (
          <Button content={item} handleOnClick = {handleOnClick}/>
        ))}
      </div>
    </center>
  );
}

export default AllButtons;
