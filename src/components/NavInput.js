import React from 'react';
import CityInput from './CityInput';
import Button from './Button';
import { withRouter } from 'react-router-dom';

class NavInput extends React.Component {
    state = {
        cityname: ''
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({
            cityname: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push({
            pathname: '/forecast',
            search: `?city=${this.state.cityname}`
        });
        this.setState({cityname: ''});
    }

    render() {
        return (
            <div className = 'nav-container'>
                <h1>Weather App</h1>
                <form className = 'form-container' onSubmit = {this.handleSubmit}>
                    <CityInput 
                        value = {this.state.cityname}
                        onChange = {this.handleChange}
                    />
                    <Button disabled = {!this.state.cityname}/>
                </form>
            </div>
        )
    }
}

export default withRouter(NavInput);


