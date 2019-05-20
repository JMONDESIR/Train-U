// Main
import React, { Component } from "react"
import GroupManager from "../modules/GroupManager"
import Drawer from './Drawer'
export default class ApplicationViews extends Component {

    state = {
        groups: [],
        workouts: [],
        iconClicked: false,
        currentUser: {}
    }

    // ===Get and set muscle groups===//
    componentDidMount() {
        // user gets the current user object from session storge
        const user = sessionStorage.getItem("credentials")

        GroupManager.getAll().then(groups => {
            this.setState({
                groups: groups,
                currentUser: JSON.parse(user)
            })
        })
    }

    // ===gets the workouts by group for child components/icons
    handleClick = id => {
        GroupManager.getWorkoutByMuscleGroup(id).then(workouts => {
            this.setState({
                workouts: workouts,
                iconClicked: true
            })
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

    handleDelete = (id) => {
        // both fetch calls cannot use the same "id" parameter
        GroupManager.deleteWorkout(id).then(() => GroupManager.getWorkoutByMuscleGroup(this.state.workouts[0].groupId))
            .then(workouts => {
                this.setState({
                    workouts: workouts
                })
            })
    }

    // This function will be called by the child component and get the selected workout id from it
    getUpdatedWorkouts = (id) => {
        GroupManager.getWorkoutByMuscleGroup(id)
            .then(workouts => {
                this.setState({
                    workouts: workouts
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <Drawer
                    // data
                    navList={this.state.groups}
                    workouts={this.state.workouts}
                    currentUser={this.state.currentUser}

                    // click handlers
                    getUpdatedWorkouts={this.getUpdatedWorkouts}
                    iconClicked={this.state.iconClicked}
                    handleClick={this.handleClick}
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}
                    openCreateExerciseForm={this.openCreateExerciseForm}
                    // this.props is passing prop FROM main.js to handle sign out
                    handleSignOut={this.props.handleSignOut}
                />
            </React.Fragment>
        )
    }
}

// Drawer
