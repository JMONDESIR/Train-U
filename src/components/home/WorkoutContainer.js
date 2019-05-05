import React, { Component } from 'react'
import Workout from "../workout/Workout"

export default class WorkoutContainer extends Component {
  render() {
    return (
      <div>
                    {this.props.workouts.map((workout, i) => <Workout key={i} workout={workout}/>)}
      </div>
    )
  }
}
