import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Test from '../containers/Test';
import Homepage from '../containers/Homepage';
import CheckIn from '../containers/CheckIn';

class ContentRouter extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/test" component={Test} />
                    <Route path="/check-in" component={CheckIn}/>
                </Switch>
            </React.Fragment>
        )
    }
}

export default ContentRouter