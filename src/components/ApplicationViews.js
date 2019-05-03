import { Route } from 'react-router-dom'
import React, { Component } from "react"
// import { withRouter } from 'react-router'
import Group from "../modules/Group"

export default class ApplicationViews extends Component {

    state = {
        "users": [],
        "groups": [],
        "workouts": [],
        "userWorkouts": [],
    }

    //===============MOUNTED COMPONENTS===============//
    componentDidMount() {

        const newState = {}


        Group.getAll().then(groups => {
            this.setState({
                groups: groups
            })
        })
    }

    //-----------------------------------------------------------------------------------------------
    render() {
        return (
            <React.Fragment>
                <Route
                    exact path="/groups" render={props => {
                        return <Group  {...props} home={this.state.groups} />
                    }}
                />
            </React.Fragment>
        )
    }
}
