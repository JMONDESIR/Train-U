import { Route } from 'react-router-dom'
import React, { Component } from "react"
import Home from "./home/Home"
import GroupManager from "../modules/GroupManager"
import Workout from "./workout/Workout"
export default class ApplicationViews extends Component {


        state = {
            users: [],
            groups: [],
            workouts: [{
                id: 29,
                name: 'Jump Rope',
                description: "Just testing this shit",
                img: 'dontfuckwithme.jpg',
                link: '',
                userId: 1,
                groupId: 7
            }],
            userWorkouts: [],
        }

    componentDidMount() {

        GroupManager.getAll().then(groups => {
            this.setState({
                groups: groups
            })
        })
    }


    handleClick = id => {
        GroupManager.getWorkoutByMuscleGroup(id).then(workouts => {
            this.setState({
                workouts: workouts
            })
            console.log(this.state.workouts)
            this.forceUpdate()
        })

    }

    render() {
        return (
            <React.Fragment>
                <Route
                    exact path="/home" render={props => {
                        return <Home  {...props} links={this.state.groups} handleClick={this.handleClick} workouts={this.state.workouts} />
                    }}
                />
            </React.Fragment>
        )
    }
}
