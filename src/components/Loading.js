import React from 'react';

const styles = {
    content: {
        textAlign: 'center',
        fontSize: '35px'
    }
}
class Loading extends React.Component {
    state = {
        loading: 'Loading',
    }

    componentDidMount() {
        const stopper = this.state.loading + '...';
        this.interval = window.setInterval(() => {
            if (this.state.loading !== stopper) {
                this.setState((prevState) => ({
                    loading: prevState.loading + '.'
                }))
            }
            this.setState({
                loading: 'Loading'
            })
        }, 100);
    }

    componentWillUnmount() {
        window.clearInterval(this.interval);
    }

    render() {
        return (
            <p style = {styles.content}>
                {this.state.loading}
            </p>
        )
    }
}

export default Loading;