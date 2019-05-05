import React, { Component } from 'react'

export default class GroupDetail extends Component {
        render() {
                return (
                        <section className="animal">
                                <div className="card w-50 pa3 bg-light-red">
                                        <div className="card-body">
                                                <p className="card-title b">
                                                        {this.props.home.name}
                                                        Testing
                                                </p>
                                        </div>
                                </div>
                        </section>
                )
        }
}
