import './WelcomeFunc.css';
function WelcomeFunc(props) {
    return <div className='welcome'>
            <p className="welcome__text">это {props.text} компонент</p>
            <button className="welcome__button">{"это"+" кнопка"}</button>
            </div>
}

export default WelcomeFunc;