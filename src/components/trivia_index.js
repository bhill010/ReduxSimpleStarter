import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions';

class TriviaIndex extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  renderQuestions() {
    if (!this.props.questions) {
      return <div>Loading...</div>;
    }

    return _.map(this.props.questions, (question, index) => {
      return (
        <li key={index} className="list-group-item">
          { question.category.name }
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Question Categories</h3>
        <ul className="list-group">
          { this.renderQuestions() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { questions: state.questions };
}

export default connect(mapStateToProps, { fetchQuestions })(TriviaIndex);
