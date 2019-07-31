import React, { Component } from 'react'

export class Flashcard extends Component {
    render() {
        return (
            <div>
                <p>
                    Q: {this.props.question.question}?
                </p>
                <p>
                    A: {this.props.isQuestion ? "..." : this.props.question.answer}
                </p>
            </div>
        )
    }
}

export default Flashcard
