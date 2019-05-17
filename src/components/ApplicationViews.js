import React, { Component } from "react"
import GroupManager from "../modules/GroupManager"
import Drawer from './Drawer'
export default class ApplicationViews extends Component {

    state = {
        users: [],
        groups: [],
        workouts: [],
        toggleStateChange: false,
        iconClicked: false,
        currentUser: {}
    }

    // ===Get and set muscle groups===//
    componentDidMount() {
        const user = sessionStorage.getItem("credentials")
        GroupManager.getAll().then(groups => {
            this.setState({
                groups: groups,
                currentUser: JSON.parse(user)
            })
        })
    }

// ===get's the workouts by group for child components/icons
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
                    getUpdatedWorkouts={this.getUpdatedWorkouts}
                    toggleStateChange={this.state.toggleStateChange}
                    navList={this.state.groups}
                    handleClick={this.handleClick}
                    workouts={this.state.workouts}
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}
                    openCreateExerciseForm={this.openCreateExerciseForm}
                    iconClicked={this.state.iconClicked}
                    currentUser={this.state.currentUser}
                    handleSignOut={this.props.handleSignOut}
                />
            </React.Fragment>
        )
    }
}
