import { Card, Row, Col, Divider, Input, Button } from 'antd';

function FoodBox({ food, onDelete }) {
    const handleDelete = (e) => {
      onDelete(e, food);
    }

    return (
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <button type="submit" onClick={handleDelete}>delete stuff</button>
      </Card>
    );
  }
  
  export default FoodBox;

//   function submitButton(e) {
//     handleSubmit(e, newFood);
//     setNewFood({name:"", image:"", calories:"", servings:""});
// }