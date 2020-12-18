import React, { useState } from "react";
import { Route, Link, Switch, useRouteMatch } from 'react-router-dom';

export default function Pizza(props) {

    const {
        values,
        change,
        disabled,
        errors,
        submit,
    } = props

    const { url } = useRouteMatch();
    console.log('url', url);

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
      }

    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }

  return (
    <>
      <h1>Pizza Form</h1>
      <form onSubmit={onSubmit}> 
            <div>
                <h2>Customize Your Pizza</h2>
                <div>
                {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
                <div>{errors.name}</div>
                <div>{errors.size}</div>
                <div>{errors.sauze}</div>
                <div>{errors.specialInstructions}</div>
                </div>
            </div>

            <div>
                <div className='genInfoDiv'>
                <label>Your Name
                    <input
                        onChange={onChange}
                        value={values.name}
                        name='name'
                        type='text'
                    />
                </label>
                <label>Size&nbsp;
                <select
                    value={values.size}
                    onChange={onChange}
                    name='size'
                >
                    <option value=''>- Select an size -</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='xlarge'>Extra Large</option>
                </select>
                </label>
                <label>Red
                    <input type='radio' name='sauce' value='red' onChange=   {onChange} checked={values.sauce === 'red'}/>
                </label>
                <label>Garlic Ranch
                    <input type='radio' name='sauce' value='garlicRanch' onChange={onChange} checked={values.sauce === 'garlicRanch'}/>
                </label>
                <label>BBQ Sauce
                    <input type='radio' name='sauce' value='bbqSauce' onChange={onChange} checked={values.sauce === 'bbqSauce'}/>
                </label>
                <label>Spinach Alredo
                    <input type='radio' name='sauce' value='spinachAlfredo' onChange={onChange} checked={values.sauce === 'spinachAlfredo'}/>
                </label>
                <div className='form-group checkboxes'>
                    <h4>Toppings</h4>
                    {/* ////////// CHECKBOXES ////////// */}
                    <label>Pepperoni
                    <input  type='checkbox' name='pepperoni' checked={values.pepperoni} onChange={onChange}/>
                    </label>
                    <label>Sausage
                    <input  type='checkbox' name='sausage' checked={values.sausage} onChange={onChange}/>
                    </label>
                    <label>Bacon
                    <input  type='checkbox' name='bacon' checked={values.bacon} onChange={onChange}/>
                    </label>
                    <label>Onions
                    <input  type='checkbox' name='onions' checked={values.onions} onChange={onChange}/>
                    </label>
                    <label>GreenPeppers
                    <input  type='checkbox' name='greenPeppers' checked={values.greenPeppers} onChange={onChange}/>
                    </label>
                    <label>Olives
                    <input  type='checkbox' name='olives' checked={values.olives} onChange={onChange}/>
                    </label>
                </div>
                <label>Special Instruction
                    <input
                        onChange={onChange}
                        value={values.specialInstructions}
                        name='specialInstructions'
                        type='text'
                    />
                </label>
                </div>
                <button className='submitButton' >Submit Order</button>
            </div>
            <hr/>
        </form>
   
    </>
  );
};

// disabled={disabled} 