import React, { Component } from 'react'

export default class CardioList extends Component {
  render() {
    return (
        <React.Fragment>
        <div className="groupHeader">CARDIO</div>
        <div className="cardHolder">{this.props.cardio.map(workout =>
          <div key={workout.id} className="card"><span className="workout">{workout.name}</span>
          </div>
        )}
        </div>
      </React.Fragment>
    )
  }
}
