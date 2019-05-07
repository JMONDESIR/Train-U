import { Route } from 'react-router-dom'
import React, { Component } from "react"
import GroupManager from "../modules/GroupManager"
import SignUp from './auth/SignUp';
import Drawer from './Drawer'
import CreateExercise from "../components/profile/CreateExercise"
export default class ApplicationViews extends Component {

    state = {
        users: [],
        groups: [],
        workouts: [],
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

    addWorkout = workout => {
        GroupManager.addWorkout(workout)
            .then(() => GroupManager.getAll())
            .then(workouts =>
                this.setState({
                    workouts: workouts
                })
            )
    }

    handleDelete = id => {
        GroupManager.deleteWorkout(id).then(() => GroupManager.getWorkoutByMuscleGroup(id))
            .then(workouts => {
                this.setState({
                    workouts: workouts
                })
            })
    }

    handleEdit = id => {
        console.log(id)
    }

    openCreateExerciseForm = () => {
        console.log("clicked")
    }

    render() {
        return (
            <React.Fragment>
                <Drawer
                    navList={this.state.groups}
                    handleClick={this.handleClick}
                    workouts={this.state.workouts}
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}
                    openCreateExerciseForm={this.openCreateExerciseForm}
                />
                <Route
                    path="/profile" render={props => {
                        return <SignUp {...props} />
                    }}
                />
                <Route
                    path="/exercise/new" render={props => {
                        return <CreateExercise {...props} />
                    }}
                />
            </React.Fragment>
        )
    }
}
