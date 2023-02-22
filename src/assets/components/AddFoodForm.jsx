import { Card, Row, Col, Divider, Input, Button } from 'antd';

function AddFoodForm({name, image, calories, servings}) {
    return (
        <div>
            <form>
            <Input value={name} type="text"/>
            <Input value={image} type="text"/>
            <Input value={calories} type="text"/>
            <Input value={servings} type="text"/>
            </form>
        </div>
    );
  }
  
  export default AddFoodForm;

//   import React from "react";
// import Rating from "./Rating";

// function DriverCard({ name, rating, img, car }) {

//     return (
//     <div className="driverCardContainer">
//     <div className="imageDisplay">
//         <img src={img} alt=""></img>
//     </div>
//     <div>
//     <p>{name}</p>
//     <Rating>
//         {rating}
//     </Rating>
//         <p>{car.model} - {car.licensePlate}</p>
//     </div>
//     </div>
//   );
// }

// export default DriverCard;