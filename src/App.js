import React from 'react';
import './App.css';
import Card from './Card';
import Slideshow from './Slideshow';

import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {languages:[], alphabets:[]}
    this.alphabetsConfig = {};
  }

  async componentDidMount(){
    if(this.alphabetsConfig){
      const response = await fetch("alphabet-config.json");
      const jsonResponse = await response.json();
      this.alphabetsConfig = jsonResponse;
      this.setState({languages:this.alphabetsConfig.SUPPORTED_LANGUAGES});
    }
    await this.setLanguage(this.state.languages[0]);
  }

  async setLanguage(language) {
    this.setState({alphabets:this.alphabetsConfig.ALPHABETS[language]});
  }
  
  render() {
    return (
      <>
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">#</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        {this.state.languages.map((value, index) => {
          return <Nav.Link href="#" className="noSelect" key={value} onClick={()=>{this.setLanguage(value)}}>{value}</Nav.Link>
        })}
    </Nav>
    Welcome Guest!
  </Navbar.Collapse>
</Navbar>

      <div>
        {/* <p>Language: {this.state.language}</p> */}
        {/* {this.state.alphabets.map(char=>(
          <Card key={char} content={char}/>
        ))} */}
        {/* <br /> */}
        {/* SlideShow: */}
        <Slideshow list={this.state.alphabets}/>
      </div>
      </>
    );
  } 
}

export default App;
