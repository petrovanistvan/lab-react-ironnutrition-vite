// src/App.jsx
import { useState } from "react";
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import FoodBox from "./assets/components/FoodBox";
import AddFoodForm from "./assets/components/AddFoodForm";
import Search from "./assets/components/Search";

function App() {
  const [foodsState, setFoodsState] = useState(foods);
  const [searchState, setSearchState] = useState("");
  const handleDelete = (e, foodToDelete) => {
    e.preventDefault();
    const updatedFoods = foodsState.filter((food) => food !== foodToDelete);
    setFoodsState(updatedFoods);
  };

  function handleSubmit(e, newFood) {
    e.preventDefault();
    setFoodsState([...foodsState, newFood]); 
  }
  
  const handleSearch = (searchTerm) => {
    const filteredFoods = foodsState.filter((food) => {
      return food.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFoodsState(filteredFoods);
  };

  return (
    <div className='App'>
      <Search searchState = {searchState} setSearchState = {setSearchState}/>
      
      <AddFoodForm handleSubmit = {handleSubmit}/>
      
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodsState.filter((food) => {
      return food.name.toLowerCase().includes(searchState.toLowerCase());
    }).map((food) => {
          return (
            <Col key={food.name}>
              <FoodBox food={food} onDelete={handleDelete}/>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default App;