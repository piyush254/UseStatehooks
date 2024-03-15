import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Component/Fooditems";
import Errormessage from "./Component/ErrorMessage";
function App() {
  let foodItems = ["Dal", "Salad", "Vegetable", "Maggii", "Ghee","Chicken"];
  // let foodItems = [];
  return (
    <>
      <h1 className="foodheading">Healthy Food</h1>
      <FoodItems items = {foodItems}></FoodItems>
      <Errormessage items = {foodItems}></Errormessage>
    </>
  );
}
export default App;
