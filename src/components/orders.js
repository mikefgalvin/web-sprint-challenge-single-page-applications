import React from 'react'

function Order({ details }) {
  if (!details) {
    return <h3>Working fetching order details...</h3>
  }

  return (
    <div className='order-div'>
        <h2>{details.name}</h2>
      <p>Size: {details.size}</p>
      <p>Sauce: {details.sauce}</p>
      {
        !!details.toppings && !!details.toppings.length &&
        <div>
          Toppings:
          <ul>
            {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
      <p>Special Instructions: {details.specialInstructions}</p>


    </div>
  )
}

export default Order;