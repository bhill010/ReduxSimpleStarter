import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchQuestion } from '../actions';

class TriviaQuestion extends Component {
  componentDidMount() {
    if(!this.props.question){
      const { id } = this.props.match.params;
      console.log("fetching question...");
      this.props.fetchQuestion(id);
    }

  }

  renderAnswer(answer, ...choices) {
    return choices[answer];
  }

  revealAnswer() {
    document.getElementById("answer").classList.remove("hidden-answer");
  }

  render() {
    console.log("state", this.props.question);
    const { question } = this.props;
    console.log("question", question);

    if (!question) {
      return <div>Loading...</div>;
    }

    return (
      <div className="question">
        <Link to="/" className="btn btn-danger pull-xs-right question-back-button">Back to index</Link>
        <h3 className="question-header">Question:</h3>
        <p className="question-paragraph">{ question.question }</p>
        <h4 className="question-header">Choices:</h4>
        <ul className="list-group question-list">
          <li className="list-group-item question-item">{question.option1}</li>
          <li className="list-group-item question-item">{question.option2}</li>
          <li className="list-group-item question-item">{question.option3}</li>
          <li className="list-group-item question-item">{question.option4}</li>
        </ul>
        <button className="btn btn-primary question-button" onClick={this.revealAnswer}>Answer</button>
        <p id="answer" className="hidden-answer question-paragraph">
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
