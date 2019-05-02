import React, { Component } from 'react'

export default class LegsList extends Component {
  render() {
    return (
        <React.Fragment>
        <div className="groupHeader">LEGS</div>
        <div className="cardHolder">{this.props.legs.map(workout =>
          <div key={workout.id} className="card"><span className="workout">{workout.name}</span>
          </div>
        )}
        </div>
      </React.Fragment>
    )
  }
}
