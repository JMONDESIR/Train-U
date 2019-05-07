import React, { Component } from 'react'
import GroupManager from "../../modules/GroupManager"
export default class Workout extends Component {

    state = {
        exercise: []
    }

        getExercise = id => {
            GroupManager.getWorkoutById(id).then(exercise => {
                this.setState({
                    exercise: exercise
                })
                console.log(this.state.exercise)
            })
        }

    render() {
        return (
            <div>
                <h2 className="ttu tracked workoutName pointer" onClick={this.getExercise}>{this.props.workout.name}</h2>
            </div>
        )
    }
}
