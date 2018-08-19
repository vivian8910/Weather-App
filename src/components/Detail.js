import React from 'react';
import NavInput from './NavInput';

const styles = {
    content: {
        display: 'inline-block',
        width: '100%',
        fontSize: '100px',
        text: 'center',
        padding: '55px'
    }
}
class Detail extends React.Component {
    handleClick = (event) => {
        this.props.history.push({
            pathname: '/forecast',
            search: `?city=${this.props.location.state.city}`
        })
    }
    render() {
        const { weatherData, city } = this.props.location.state
        return (
            <div>
                <NavInput />
                
                <i className = {`wi wi-yahoo-${weatherData.code}`} style = {styles.content}></i>
                <ul className = 'details-container'>
                    <li>{weatherData.day}, {weatherData.date}</li>
                    <li>{city}</li>
                    <li>{weatherData.text}</li>
                    <li>min temp: {weatherData.low}</li>
                    <li>max temp: {weatherData.high}</li>
                    
                </ul>
                <button className = 'backbutton' onClick = {this.handleClick}>Back</button>
            </div>
        )
    }
}

export default Detail;