import React from 'react';
import CityInput from './CityInput';
import Button from './Button';
import NavInput from './NavInput';

class Body extends React.Component {
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
        })
    }

    render() {
        return (
            <div className = 'detail-container'>
                <NavInput />
                <form className = 'form-container-b' onSubmit = {this.handleSubmit}>
                    <label className = 'label' htmlFor= 'cityname'>
                        Enter a City and State
                    </label>
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

export default Body;