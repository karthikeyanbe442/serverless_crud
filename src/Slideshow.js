import React from 'react';
import './Slideshow.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Slideshow extends React.Component {

    constructor(props){
        super(props);
        this.index = 0;
        this.state = {char: "X",color:{}};
        this.handlePreviousClick = this.handlePreviousClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidUpdate(prevState){
        if(this.props != prevState){
            this.index = 0;
            this.updateChar();
        }
    }

    handlePreviousClick() {
        if(this.index-1 >= 0) {
            this.index -= 1;
        }
        else{
            this.index = this.props.list.length-1;
        }
        this.updateChar();
    }

    handleClick() {
        if(this.index + 2 <= this.props.list.length) {
            this.index += 1;
        }
        else{
            this.index = 0;
        }
        this.updateChar();
    }

    updateChar(){
        if(this.props && this.props.list){
            this.setState({char:this.props.list[this.index], color: this.getRandomRGB()});
        }
    }

    getRandomRGB(){
        let r = this.getRandom(0,125);
        let g = this.getRandom(0,125);
        let b = this.getRandom(0,125);
        let lightColor = "RGBA("+r+","+g+","+b+",0.2)";
        let darkColor = "RGBA("+r+","+g+","+b+",1)";
        return {
            lightColor : lightColor,
            darkColor: darkColor
        };
    }

    getRandom(min, max){
        return Math.floor(Math.random() * (max-min+1)) + min;
    }

    render() {
        return (
            // <div className="slideshow-content noselect" 
            //     style={{color:this.state.color.darkColor, backgroundColor: this.state.color.lightColor}} 
            //     onClick={this.handleClick}>
            //     {this.state.char}
            // </div>
            // <Container style={{color:this.state.color.darkColor, backgroundColor: this.state.color.lightColor}} className="effect1 slideshow-background">
            <Container style={{color:this.state.color.darkColor}} className="effect1 slideshow-background">
                <Row>
                    <Col className="noSelect"
                        onClick={this.handlePreviousClick}>&nbsp;</Col>
                    <Col className="slideshow-content noselect"                         
                        onClick={this.handleClick}>
                            {this.state.char}
                    </Col>
                    <Col className="noSelect"
                        onClick={this.handleClick}>&nbsp;</Col>
                </Row>
            </Container>
        );
    }
}

export default Slideshow;