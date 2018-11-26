import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Test from '../containers/Test';
import Homepage from '../containers/Homepage';
import List from '../containers/List';

class ContentRouter extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/test" component={Test} />
                    <Route path="/list" component={List} />
                </Switch>
            </React.Fragment>
        )
    }
}

export default ContentRouter