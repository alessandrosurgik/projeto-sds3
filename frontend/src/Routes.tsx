import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from 'pages/Home'
import Dashboard from 'pages/Dashbboard';

function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Routes;