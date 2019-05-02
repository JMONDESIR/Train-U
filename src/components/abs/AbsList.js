import React, { Component } from 'react'

export default class AbsList extends Component {
  render() {
    return (
        <React.Fragment>
        <div className="groupHeader">ABS</div>
        <div className="cardHolder">{this.props.abs.map(workout =>
          <div key={workout.id} className="card"><span className="workout">{workout.name}</span>
          </div>
        )}
        </div>
      </React.Fragment>
    )
  }
}
