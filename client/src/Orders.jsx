import React, {Component} from 'react';
import axios from 'axios';
import Order from './components/Order';

class Orders extends Component {
  state = {results: [], last_order: null}

  remove_order = (id) => {
    let new_state = [];
    let old_last_order = {...this.state.last_order};

    for (let i = 0; i < this.state.results.length; i++) {
      if (i != id) {
        new_state.push(this.state.results[i]);
      }
    }
    console.log('remove order');
    console.log("Old");
    console.log(old_last_order);
    console.log("Old");
    this.setState({results: new_state, last_order: old_last_order});
  }

  refreshOrders = (last_order) => {
    axios.post('/api/getneworders', {last_order: last_order})
      .then(res => {
        if (res.data.length > 0) {
          let new_state = [...this.state.results];

          for (let i = 0; i < res.data.length; i++) {
            new_state.push(res.data[i]);
          }

          console.log("Refresh State");
          this.setState({results: new_state, last_order: new_state[new_state.length - 1]});
        }
      })
      .catch (err => {
        console.log(err);
      });
  }

  componentWillMount () {
    axios.get('api/getorders')
      .then(res => {
        console.log("did mount");
        this.setState({results: res.data, last_order: res.data[res.data.length - 1]});
      })
      .catch(err => {
        console.log(err);
      });

    setInterval(() => this.refreshOrders(this.state.last_order), 5000);
  }

  render () {
    console.log(this.state.last_order);
    return (
      <div>
        <h1>Orders</h1>
        <table>
          {this.state.results.map((order, id) => {
            return (
              <Order name={order.name} cocktail={order.cocktail} removeHandler={() => {this.remove_order(id)}} />
            );
          })}
        </table>
      </div>
    )
  }
}

export default Orders;
