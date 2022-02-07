import propTypes from 'prop-types';
import React from "react";
import s from "./Transactions.module.css"


function TransactionHistory({items}) {
    return (
        <table className={s.transHistory} >
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
        <tbody>       
        {items.map(item => 
                    <tr key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                

                )
                }
                </tbody>
     </table >
    )
}

TransactionHistory.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape(
            {
                id: propTypes.string.isRequired,
                type: propTypes.string,
                amount: propTypes.string,
                currency:propTypes.string
            }
        )
    )
}



export default TransactionHistory