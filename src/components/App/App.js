import React from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';

const baseURL = "https://swapi-thinkful.herokuapp.com/api/people/?search="

class App extends React.Component {

  state = {
    names: [],
  }
  
  
  onSubmit = (e) => {
    let input = e.split(' ').join('+');
    fetch(`${baseURL}${input}`) 
    .then(response => {
      if(!response.ok) {
        throw new Error ('Oops! Something went wrong here -- awkward .')
      }
      return response.json();
    })
    .then(data => {
      const results = data;
      //console.log(results, 'are these the names?')
      this.setState({
        names: results
      })
    })
  }

  
  
  render () {
    console.log('App COMPONENT is running!!');
    console.log(this.state.names)
    return (
      <>
      <Header />
      <main className='App'>
        <Search onSubmit={this.onSubmit} />
       
          
        
      </main>
      </>
    );
  }
  
}

export default App;
