import React, { Component } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class App extends Component {
  state = {
    searchTerm: ''
  }
  onTextChange = (event) => {
    const value = event.target.value; 

     this.setState({searchTerm: value})
  }

  onSearchClick = () => {
    console.log(this.state.searchTerm)
    this.setState({searchTerm: ''})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Photos
          </Typography>
              <TextField 
              className='textfield'
              placeholder='Search on Spotify'
              onChange= {this.onTextChange}
              value= {this.state.searchTerm} />
              <Button 
              onClick={this.onSearchClick}
              disabled={this.state.searchTerm.length === 0}>Search</Button>
            </Toolbar>
          </AppBar>
        </header>
        <div>

        </div>
      </div>
    );
  }
}

export default App;
