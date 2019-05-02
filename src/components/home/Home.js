import React, { Component } from 'react'
import "./Home.css"

export default class Home extends Component {
        render() {
                return (
                        <React.Fragment>
                                <div classname>
                                        <div className="muscleBox">
                                                {this.props.home.map(group =>
                                                        <div class="hexagon">
                                                                <div class="hexTop"></div>
                                                                <div class="hexBottom"></div>
                                                        </div>
                                                )}
                                        </div>
                                </div>
                        </React.Fragment>
                )
        }
}
