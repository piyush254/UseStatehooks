import styles from "./item.module.css";
const Item = ({ foodItems, itempurchase }) => {
  // const itempurchase = (event) => {
  // console.log(event)
  // console.log(event.target.value)
  // console.log(`${foodItems} purchased`);
  // };
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={`${styles["kg-span"]}`}>{foodItems}</span>
      <button
        onClick={itempurchase}
        type="button"
        className={`${styles["kg-btn"]} btn btn-success`}
      >
        Success
      </button>
    </li>
  );
};
export default Item;
