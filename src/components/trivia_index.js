import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestion } from '../actions';

class TriviaIndex extends Component {
  componentDidMount() {
    for(var i = 0; i < 5; i++){
      this.props.fetchQuestion();
    }
  }

  renderQuestions() {
    if (!this.props.questions) {
      return <div>Loading...</div>;
    }

    return _.map(this.props.questions, question => {
      return (
        <li key={question.id} className="list-group-item">
          { question.category.title }
        </li>
      );
    });
  }

  render() {
    return (
      <div>
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

export default connect(mapStateToProps, { fetchQuestion })(TriviaIndex);
