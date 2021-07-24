// src/Cars.jsx

import React, { useContext } from 'react';
import CarsContext from './context/CarsContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

function Cars(){  
    const {cars, moveCar} = useContext(CarsContext);    
    return (
      <div>
        <div>
          <img
            className={cars.red ? 'car-right' : 'car-left'}
            src={carRed}
            alt="red car"
          />
          <button
            onClick={() => moveCar('red', !cars.red)}
            type="button"
          >
            Move
        </button>
        </div>
        <div>
          <img
            className={cars.blue ? 'car-right' : 'car-left'}
            src={carBlue}
            alt="blue car"
          />
          <button
            onClick={() => moveCar('blue', !cars.blue)}
            type="button"
          >
            Move
        </button>
        </div>
        <div>
          <img
            className={cars.yellow ? 'car-right' : 'car-left'}
            src={carYellow}
            alt="yellow car"
          />
          <button
            onClick={() => moveCar('yellow', !cars.yellow)}
            type="button"
          >
            Move
        </button>
        </div>
      </div>
    )
  }
// Cars.contextType = CarsContext;

export default Cars;
