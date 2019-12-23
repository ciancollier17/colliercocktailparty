import React from 'react';
import {Button} from 'reactstrap';

function Order (props) {
  return (
    <React.Fragment>
    <tr>
      <td>{props.name}</td>
      <td>{props.cocktail}</td>
      <td><Button onClick={props.removeHandler} color="danger">Done</Button></td>
    </tr>
    </React.Fragment>
  );
}

export default Order;
