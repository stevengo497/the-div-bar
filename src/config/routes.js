import React from 'react';
import { Switch, Route } from 'react-router-dom';

//need to create the main components and import here
import Home from '../components/Home';
import ReadMe from '../components/ReadMe';
import TheVar from '../components/TheVar';
import Boilerplates from '../components/Boilerplates';
import Contact from '../components/Contact';
//Homepage, drink menu, food menu, Contribute page

export default (
    <Switch>
        <Route exact path= "/" component={Home}/>
        <Route exact path= "/readme" component={ReadMe}/>
        <Route path="/thevar" component={TheVar}/>
        <Route path="/boilerplates" component={Boilerplates}/>
        <Route path="/contact" component={Contact}/>
    </Switch>
 )
