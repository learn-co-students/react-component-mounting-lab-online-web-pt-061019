import React, { Component } from 'react';

class Timer extends Component {
  state = {
    time: 0,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
  };

  // add your code here
  // Write a componentDidMount that initializes an interval. Pass clockTick as the callback function and set it to 1000 to update every second.
  // To quickly recap, the componentDidMount method is useful to initiating one time or ongoing actions within the logic of a component. It can also be used for DOM manipulation, fetching data or opening a web socket connection.
  componentDidMount() {
    this.interval = setInterval(this.clockTick, 1000);
  }

  // The componentWillUnmount is most often used for cleaning up ongoing processes, such as intervals and can also be used to halt ongoing activities involved in 3rd party libraries.
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { time, color } = this.state;
    return (
      <section className='Timer' style={{ background: color }}>
        <h1>{time}</h1>
        <button onClick={this.stopClock}>Stop</button>
        <aside className='mountText'>Mounted</aside>
        <small onClick={this.handleClose}>X</small>
      </section>
    );
  }

  //clock functions
  clockTick = () => {
    this.setState((prevState) => ({
      time: prevState.time + 1,
    }));
  };

  stopClock = () => {
    clearInterval(this.interval);
  };

  // for the 'x' button,
  handleClose = () => {
    this.props.removeTimer(this.props.id);
  };
}

export default Timer;
