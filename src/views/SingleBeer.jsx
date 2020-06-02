import React, { Component } from 'react';

import SingleBeer from './../components/SingleBeer';
class SingleBeerView extends Component {
  render() {
    return (
      <div>
        <h1>Single Beer view</h1>
        <SingleBeer />
      </div>
    );
  }
}

export default SingleBeerView;

function scramble(str1, str2) {
  let result = 0;
  let find = true;
  const word1 = Array.from(str1);
  const word2 = Array.from(str2);

  for (let i = 0; i < word2.length; i++) {
    const index = word1.indexOf(word2[i]);
    if (index === -1 && find) {
      break;
    } else {
      word1.splice(index, 1);
      result++;
    }
  }
  return result === word2.length ? true : false;
}
