import { Card, Row, Col, Divider, Input, Button } from 'antd';
import {useState} from "react";

function AddFoodForm({handleSubmit}) {

const [newFood, setNewFood] = useState({ name:"", image:"", calories:"", servings:"" })

function handleChange(event) {
    let typed = event.target.value
    setNewFood({...newFood, [event.target.name] :typed})
}
function submitButton(e) {
    handleSubmit(e, newFood);
    setNewFood({name:"", image:"", calories:"", servings:""});
}
    return (
        <div>
            <form onSubmit={submitButton}>
            <Input value={newFood.name} type="text" name="name" onChange={handleChange}/>
            <Input value={newFood.image} type="text" name="image" onChange={handleChange}/>
            <Input value={newFood.calories} type="text" name="calories" onChange={handleChange}/>
            <Input value={newFood.servings} type="text" name="servings" onChange={handleChange}/>
            <button type="submit">send stuff</button>
            </form>
        </div>
    );
  }
  
  export default AddFoodForm;