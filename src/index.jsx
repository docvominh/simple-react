import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import * as serviceWorker from './serviceWorker';
import Article from './components/manager/Article';
import Config from './components/manager/Config';
import Manager from './components/manager/Manager';

const links = [
    {
        key: 1,
        name: 'Java',
        url: '#',
    },
    {
        key: 2,
        name: 'Linux',
        url: '#',
    },
    {
        key: 3,
        name: 'Axon Ivy',
        url: '#',
    },
    {
        key: 4,
        name: 'About',
        url: '/about',
    },
    {
        key: 5,
        name: 'Manager',
        url: '/manager',
    }
];

const managerLinks = [
    {
        key: 1,
        name: 'Dashboard',
        url: '/manager',
    },
    {
        key: 2,
        name: 'Article',
        url: '/manager/article',
    },
    {
        key: 3,
        name: 'Config',
        url: '/manager/config',
    }
];

const HomeRouter = ({ match }) => (
    <React.Fragment>
        <Header links={links} />
        <Switch>
            <Route exact={true} path={`${match.path}`} component={Home} />
            <Route exact={true} path={`${match.path}about`} component={About} />
            <Route exact={true} path={`${match.path}login`} component={Login} />
        </Switch>
        <Footer />
    </React.Fragment>
);

const ManagerRouter = ({ match }) => (
    <React.Fragment>
        <Header links={managerLinks} />
        <Switch>
            <Route exact={true} path={`${match.path}`} component={Manager} />
            <Route path={`${match.path}/article`} component={Article} />
            <Route path={`${match.path}/config`} component={Config} />
        </Switch>
        <Footer />
    </React.Fragment>
);


const router = (
    <Router>
        <Switch>
            <Route path="/manager" component={ManagerRouter} />
            <Route path="/" exact={false} component={HomeRouter} />
            <Route component={NotFound} />
        </Switch>

    </Router>);

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
