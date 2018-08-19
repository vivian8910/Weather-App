import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Body from './Body';
import Results from './Results';
import Detail from './Detail';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className = 'container'>
                    <Switch>
                        <Route exact path = '/' component = {Body} />
                        <Route path = '/forecast' component = {Results} />
                        <Route path = '/details' component = {Detail} />
                        <Route render = {() => <p>Not Found</p>} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;