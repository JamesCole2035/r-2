import './WelcomeClass.css';
import React from 'react';
class WelcomeClass extends React.Component {
    render() {
        const buttonText = true;
        return(
            <div className='welcome'>
                <p className='welcome__text'>это {this.props.text} компонент</p>
                <button className="welcome__button">{buttonText?"это кнопка":"а нет кнопки"}</button>
            </div>            
        )
    }        
}
export default WelcomeClass;