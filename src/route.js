import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './component/Auth/Auth';
import Dashboard from './component/Dashboard/Dashboard';
import Post from './component/Post/Post';
import Form from './component/Form/Form';

export default (

    <Switch>
        <Route exact path='/' component={Auth} ></Route>
        <Route path='/dashboard' component={Dashboard} ></Route>
        <Route path='/post/:postid' component={Post} ></Route>
        <Route path='/new' component={Form} ></Route>
    </Switch>
);
