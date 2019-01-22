import React, { Component } from 'react';
import './WinningNumbers.css';

class WinningNumbers extends Component {

  render() {
    return (
      <div className='winning_numbers'>
        <h4>EuroJackpot Results for Friday 18 Jan 2019</h4>
        {this.props.numbers.map((number, index) => <span className='number' key={index}>{number}</span>)}
        {this.props.euroNumbers.map((number, index) => <span className='number euro_number' key={index}>{number}</span>)}
      </div>
    );
  }

}

export default WinningNumbers;
