import React, { Component } from 'react'

export default class ShouldersList extends Component {
  render() {
    return (
        <React.Fragment>
        <div className="groupHeader">SHOULDERS</div>
        <div className="cardHolder">{this.props.shoulders.map(workout =>
          <div key={workout.id} className="card"><span className="workout">{workout.name}</span>
          </div>
        )}
        </div>
      </React.Fragment>
    )
  }
}

// const ShouldersList = props => {
//         return (
//                 <div>
//                         <div className="groupHeader">{props.name}</div>
//                         <img className="muscleGroupImage" alt="shit description" />
//                         <div className="description">{props.description}</div>
//                 </div>
//         )
// }

// export default ShouldersList
