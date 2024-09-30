import Button from "./Button.jsx";
import styles from "./AllButtons.module.css";

function AllButtons({ data }) {
  return (
    <center>
      <div className={styles.allbtn}>
        {data.map((item) => (
          <Button content={item} />
        ))}
      </div>
    </center>
  );
}

export default AllButtons;
