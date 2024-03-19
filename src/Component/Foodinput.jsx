import styles from "./Container.module.css";
const foodinput = ({ handleOnChange , addToItem ,textToShow }) => {
  return (
    <div className="input-div">
      <input
        className={styles.foodinput}
        type="text"
        onChange={handleOnChange}
        value={textToShow}
        placeholder="Enter item that you want to buy"
      />
      <button onClick= {addToItem} type="button" className={`${styles["kg-btn"]} btn btn-success`}>
        AddToList
      </button>
    </div>
  );
};

export default foodinput;
