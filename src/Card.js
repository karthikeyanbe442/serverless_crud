import React from 'react';
import './Card.css';

class Card extends React.Component {
    containerClass = "card-container";
    titleClass = "card-title";
    mediumSize = "card-md"

    constructor(props) {
        super(props);
    }

    renderContent() {
        if (this.props.title) {
            return (
                <div key={this.props.content} className={this.containerClass+" "+this.mediumSize}>
                    <div className={this.title}>{this.props.title}</div>
                    <p>{this.props.content}</p>
                </div>
            );
        }
        else {
            return (
                <div key={this.props.content} className={this.containerClass+" "+this.mediumSize}>
                    <p>{this.props.content}</p>
                </div>
            );
        }
    }

    render() {
        return this.renderContent();
    };
}

export default Card;
