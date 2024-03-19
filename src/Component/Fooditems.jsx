import Item from "./item";
const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItems={item}
          itempurchase={() => console.log(`${item} purchase`)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
