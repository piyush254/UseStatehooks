import styles from "./Container.module.css";
const foodinput = ({ handleOnChange , addToItem }) => {
  return (
    <div className="input-div">
      <input
        className={styles.foodinput}
        type="text"
        onChange={handleOnChange}
      />
      <button onClick= {addToItem} type="button" className={`${styles["kg-btn"]} btn btn-success`}>
        AddToList
      </button>
    </div>
  );
};

export default foodinput;
