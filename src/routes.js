import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/index'
import Gallery from './pages/gallery'
import Image from './pages/image'
import Error from './pages/error'
import React from 'react';

const Pages = [
    {'path': '/', 'component': Home},
    {'path': '/gallery/:year', 'component': Gallery},
    {'path': '/image/:year/:month/:imagePath', 'component': Image},
    {'path': 'error', 'component': Error},
]

const Routes = () => {
    const Routes = []
    Pages.map(route => (
        route.path === 'error' ?
            Routes.push(<Route component={route.component} key={route.path}/>)
        : route.path === '/gallery/:year/:month' ?
            Routes.push(<Route path={route.path} component={route.component} key={route.path}/>)
        : Routes.push(<Route exact path={route.path} component={route.component} key={route.path}/>)
    ))
    return <Router><Switch>{Routes}</Switch></Router>
}
export default Routes
