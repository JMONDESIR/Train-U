import React, { Component } from 'react'

export default class ArmsList extends Component {
  render() {
    return (
        <React.Fragment>
        <div className="groupHeader">ARMS</div>
        <div className="cardHolder">{this.props.arms.map(workout =>
          <div key={workout.id} className="card"><span className="workout">{workout.name}</span>
          </div>
        )}
        </div>
      </React.Fragment>
    )
  }
}
