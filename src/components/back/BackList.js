import React, { Component } from 'react'

export default class BackList extends Component {
  render() {
    return (
        <React.Fragment>
        <div className="groupHeader">BACK</div>
        <div className="cardHolder">{this.props.back.map(workout =>
          <div key={workout.id} className="card"><span className="workout">{workout.name}</span>
          </div>
        )}
        </div>
      </React.Fragment>
    )
  }
}
