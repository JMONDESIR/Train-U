import React, { Component } from 'react'

export default class Workout extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.workout.name}</h2>
            </div>
        )
    }
}
