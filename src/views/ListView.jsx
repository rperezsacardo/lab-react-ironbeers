import React, { Component } from 'react';

import { getBeers } from './../services/beersApi';

class ListView extends Component {
  constructor() {
    super();
    this.state = {
      beersList: [],
    };
  }
  componentDidMount() {
    getBeers()
      .then((result) => {
        this.setState({
          beersList: [...result],
        });
        console.log(result);
      })
      .catch((error) => console.log(error));
  }

  render() {
    const beerList = this.state.beersList;
    return (
      <div>
        <h1>List beers</h1>

        <ul>
          {beerList.map((el) => {
            return <li>{el.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ListView;
