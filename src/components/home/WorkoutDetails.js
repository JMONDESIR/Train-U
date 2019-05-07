import React, { Component } from 'react'
import Workout from "../workout/Workout"

export default class WorkoutDetails extends Component {

        state = {
                details: []
        }

  render() {
    return (
      <div>
          {this.props.workouts.name.map((name, i) => <Workout key={i} workout={name} />)}
      </div>
    )
  }
}
