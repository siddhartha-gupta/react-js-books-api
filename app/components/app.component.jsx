import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route} from 'react-router';
// Import custom components
import Home from './home.component.jsx'
import About from './about.component.jsx'
import Car from './car.component.jsx'

render(
    <Router>
        <Route path="/" component={Home}/>
        <Route path="/cars" component={Car}/>
        <Route path="/about" component={About}/>
    </Router>,
    document.getElementById('app')
);