import React, { Component } from 'react';
import './App.css';
import WinningNumbers from './components/WinningNumbers';
import Tiers from './components/Tiers';
import Sidebar from './components/Sidebar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://www.lottoland.com/api/drawings/euroJackpot")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            result: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, result } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className='container'>
          <header className='header'>Lottoland</header>
          <WinningNumbers numbers={result.last.numbers} euroNumbers={result.last.euroNumbers} />
          <div className='tiers_sidebar'>
            <Tiers odds={result.last.odds} />
            <Sidebar drawingDate={result.last.drawingDate} extractionNo={result.last.nr} />
          </div>

        </div>
      );
    }
  }
}

export default App;
