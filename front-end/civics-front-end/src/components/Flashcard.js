import React, { Component } from 'react'

export default class Flashcard extends Component {
    render() {
        return (
            <div>
                <h3>
                    Category: {this.props.category}
                </h3>
                <p>
                    Q: {this.props.question}
                </p>
                <p>
                    A: {this.props.isQuestion ? "..." : this.props.answer}
                </p>
            </div>
        )
    }
}
