import React, { Component } from 'react'

export default class Groups extends Component {
  render() {
    return (
        <React.Fragment>
        <div classname>
                <div className="muscleBox">
                        {this.props.home.map(group =>
                                <div class="hexagon">
                                        <div class="hexTop">{group.name}</div>
                                        <div class="hexBottom"></div>
                                </div>
                        )}
                </div>
        </div>
</React.Fragment>
    )
  }
}
