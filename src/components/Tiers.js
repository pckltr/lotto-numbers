import React, { Component } from 'react';
import './Tiers.css';

class Tiers extends Component {

  render() {
    return (
      <table className='tiers'>
        <thead>
          <tr>
            <th>Tier</th>
            <th>Winners</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(this.props.odds).map((rank, index) => {
            const tier = this.props.odds[rank];
            if (index > 0) {
              return <tr key={index}>
                <td>{index}</td>
                <td>{tier.winners}</td>
                <td>€{tier.prize}</td>
              </tr>
            } else {
              return null;
            }
          })}
        </tbody>
      </table>
    );
  }

}

export default Tiers;
