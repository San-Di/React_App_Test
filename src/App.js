import React from 'react';
// const App = () => <h1>Hi</h1>  //stateless function component


class App extends React.Component {

  constructor(){
    super();
    this.state = { currentEvent : '---' }
    this.update = this.update.bind(this); //*****
  }

  update(e){
      this.setState({currentEvent : e.target.value})
  }

  render(){
    
    return (
      <div>
        <input type="text" onChange={this.update} />{this.state.currentEvent}
      </div>
      );
  }
}


export default App
