import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  render() {
    const date = this.props.drawingDate.split(',')[0];
    return (
      <div className='sidebar'>
        <div className='info_box'>
          <h4>The EuroJackpot numbers for {date}</h4>
          <p><strong>The {this.props.extractionNo}th draw for the EuroJackpot was held on {date}</strong>, as usual at 9pm in Helsinki.</p>
        </div>
        <div className='info_box'>
          <h4>EuroJackpot numbers for {date}</h4>

          <p>The balls used for the draw are made of a synthetic polymer, softer than ping-pong balls. The results are broadcast after the draw, with the draw-machines independently checked by the VTT Technical Research Center of Finland.</p>

          <p>Lottoland published the draw results immediately after the draw on {date}.</p>
        </div>

      </div>
    );
  }
}

export default Sidebar;
