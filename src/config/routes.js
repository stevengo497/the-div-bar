import React from 'react';
import { Switch, Route } from 'react-router-dom';

//need to create the main components and import here
import Home from '../components/Home';
import TheVar from '../components/TheVar';
import Boilerplates from '../components/Boilerplates';
import OpenSource from '../components/OpenSource';
import Contact from '../components/Contact';
//Homepage, drink menu, food menu, Contribute page

export default (
    <Switch>
        <Route exact path= "/" component={Home}/>
        <Route path="/thevar" component={TheVar}/>
        <Route path="/boilerplates" component={Boilerplates}/>
        <Route path="/opensource" component={OpenSource}/>
        <Route path="/contact" component={Contact}/>
    </Switch>
 )
