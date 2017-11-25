import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchQuestion } from '../actions';

class TriviaQuestion extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchQuestion(id);
  }

  renderAnswer(answer, ...choices) {
    return choices[answer];
  }

  revealAnswer() {
    document.getElementById("answer").classList.remove("hidden-answer");
  }

  render() {
    const { question } = this.props;

    if (!question) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/" className="btn btn-primary pull-xs-right">Back to index</Link>
        <h3>Question:</h3>
        <p>{ question.question }</p>
        <h4>Choices:</h4>
        <ul className="list-group">
          <li className="list-group-item">{question.option1}</li>
          <li className="list-group-item">{question.option2}</li>
          <li className="list-group-item">{question.option3}</li>
          <li className="list-group-item">{question.option4}</li>
        </ul>
        <button className="btn btn-primary" onClick={this.revealAnswer}>Answer</button>
        <p id="answer" className="hidden-answer">
          {this.renderAnswer(question.answers, question.option1, question.option2, question.option3, question.option4)}
        </p>
      </div>
    );
  }
}

function mapStateToProps({ questions }, ownProps) {
  return { question: questions[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchQuestion })(TriviaQuestion);
