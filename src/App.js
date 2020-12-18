import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import Pizza from './components/pizzaForm';
import Order from './components/orders';
import schema from './Validations/formSchema';
import axios from 'axios';
import * as Yup from 'yup';


const initialFormValues = {
  name: '',
    // size dropdown
  size: '',
  // Choice of sauce radio 
  sauce: '',
  // Add toppings checkboxes - up to something
  pepperoni: false,
  sausage: false,
  bacon: false,
  onions: false, 
  greenPeppers: false,
  olives: false,
  // choice of substitute (personal stretch)
  // special instructions input
  specialInstructions: '',
}

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
  specialInstructions: '',
}

const initialOrders = []
const initialDisabled = true;


export default function App() {

const [orders, setOrders] = useState(initialOrders)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

const postNewOrder = newOrder => {
  axios
  .post(`https://reqres.in/api/users`, newOrder)
  .then((res) => {
    setOrders([res.data, ...orders]);
    setFormValues(initialFormValues);
  })
  .catch((err) => {
    debugger;
  })
};

const inputChange = (name, value) => {

  Yup
    .reach(schema, name) //get to this part of the schema
    .validate(value) //validate this value
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: '',
      })
    })
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      })
    })

  setFormValues({
    ...formValues,
    [name]: value
  })
};

const formSubmit = () => {
  const newOrder = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    sauce: formValues.sauce.trim(),
    toppings: ['pepperoni', 'sausage', 'bacon', 'onions', 'greenPeppers', 'olives'].filter((topping) => formValues[topping]),
    specialInstructions: formValues.specialInstructions.trim(),
  }
  postNewOrder(newOrder);
}

useEffect(() => {
  schema.isValid(formValues).then(valid => {
    setDisabled(!valid);
  });
}, [formValues]);


  return (
    <>
      <h1>Lambda Eats</h1>
      <nav className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
      </nav>
      <div>
        <button>
        <Link to="/pizza">Make Your Own Pizza</Link>
        </button>
      </div>
      <div className="App">
        <Switch>
          <Route path='/pizza'/>
            <Pizza 
            values={formValues}
            change={inputChange}
            disabled={disabled}
            errors={formErrors}
            submit={formSubmit}
            />
          <Route exact path='/'/>
        </Switch>
        {
          orders.map(order => {
            return (
              <Order key={order.id} details={order} />
            )
          })
        }
      </div>
    </>
  );
};

