import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchQuestion } from '../actions';

class TriviaQuestion extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchQuestion(id);
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
      </div>
    );
  }
}

function mapStateToProps({ questions }, ownProps) {
  return { question: questions[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchQuestion })(TriviaQuestion);
