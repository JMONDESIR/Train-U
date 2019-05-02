import React, { Component } from 'react'

export default class ChestList extends Component {

  pushups() {
  console.log("clicked")
}

  render() {
    return (
      <React.Fragment>
        <div className="groupHeader">CHEST</div>
        <div className="cardHolder">{this.props.chest.map(workout =>
          <div key={workout.id} className="card" id={workout.id}><span className="workout">{workout.name}</span>
          </div>
        )}
        </div>
      </React.Fragment>
    )
  }
}

// export default class ChestList extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <div className="groupHeader">{this.props.title}</div>
//         <div className="cardHolder">{this.props.chest.map(workout =>
//           <div className="cardWrapper"><span className="workout">{workout.name}</span>
//           </div>
//         )}
//         </div>
//       </React.Fragment>
//     )
//   }
// }

