import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Component/Fooditems";
import Errormessage from "./Component/ErrorMessage";
import Container from "./Component/Container";
import Foodinput from "./Component/Foodinput";
import { useState } from "react";
function App() {
  // let foodItems = [
  //   "Dal",
  //   "Salad",
  //   "Vegetable",
  //   "Maggii",
  //   "Ghee",
  //   "Chicken",
  //   "Chapati",
  // ];
  const [foodItems, setFooditems] = useState([
    "Dal",
    "Salad",
    "Vegetable",
    "Maggii",
    "Ghee",
    "Chicken",
    "Chapati",
  ]);
  // let foodItems = [];
  const [textToShow, setTextToshow] = useState("");
  // console.log(`Input enter by user ${textToShow}`)
  const [ItemToAdd, setItemToAdd] = useState("");
  let handleOnChange = (event) => {
    setTextToshow(event.target.value);
    setItemToAdd(event.target.value);
  };
  let addToItem = () => {
    console.log(ItemToAdd);
    let newfooditems = [...foodItems,ItemToAdd]
    setFooditems(newfooditems);
    setTextToshow(" ");
  };
  return (
    <>
      <Container>
        <h1 className="foodheading">Healthy Food</h1>
        <Foodinput
          handleOnChange={handleOnChange}
          addToItem={addToItem}
          textToShow = {textToShow}
        ></Foodinput>
        <p>{textToShow}</p>
        <FoodItems items={foodItems}></FoodItems>
        <Errormessage items={foodItems}></Errormessage>
      </Container>
      <Container>
        <div style={{ textAlign: "center", color: "red" }}>
          In this project Add and buy button fully working <hr />
          you can add healthy food for your meal
        </div>
      </Container>
    </>
  );
}
export default App;
