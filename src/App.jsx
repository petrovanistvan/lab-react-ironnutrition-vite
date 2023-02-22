// src/App.jsx
import { useState } from "react";
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import FoodBox from "./assets/components/FoodBox";
import AddFoodForm from "./assets/components/AddFoodForm";

function App() {
  const [foodsState, setFoodsState] = useState(foods);


  function handleSubmit(e, newFood) {
    e.preventDefault();
    console.log(newFood);
    setFoodsState([...foodsState, newFood]); 
  }

  return (
    <div className='App'>
    
      
      <AddFoodForm handleSubmit = {handleSubmit}/>
      
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodsState.map((food) => {
          return (
            <Col key={food.name}>
              <FoodBox food={food} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default App;