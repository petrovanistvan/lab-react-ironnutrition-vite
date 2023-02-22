// src/App.jsx
import { useState } from "react";
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import FoodBox from "./assets/components/FoodBox";

function App() {
  const [foodsState, setFoodsState] = useState(foods);
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const handleAddFood = (food) => {
    setFoodsState([...foodsState, food]);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredFoods = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchTerm);
    });
    setFoodsState(filteredFoods);
  };

  return (
    <div className='App'>
      {showForm ? (
        <div>
          <Input placeholder="Name" />
          <Input placeholder="Calories" />
          <Input placeholder="Image URL" />
          <Button onClick={handleToggleForm}>Cancel</Button>
          <Button onClick={() => handleAddFood()}>Add Food</Button>
        </div>
      ) : (
        <Button onClick={handleToggleForm}>Hide Form / Add New Food</Button>
      )}
      <Input placeholder="Search" onChange={handleSearch} />
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