import React from 'react';
import { Switch, Route } from 'react-router-dom';

//need to create the main components and import here
import Home from '../components/Home';
import Drinks from '../components/Drinks';
import Food from '../components/Food';
import Contribute from '../components/Contribute';
//Homepage, drink menu, food menu, Contribute page

export default (
    <Switch>
        <Route exact path= "/" component={Home}/>
        <Route path="/drinks" component={Drinks}/>
        <Route path="/food" component={Food}/>
        <Route path="/contribute" component={Contribute}/>
    </Switch>
 )
