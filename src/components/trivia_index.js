import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
      if (index === "undefined") {
        return;
      }
      
      return (
        <Link key={question.id} to={`/questions/${question.id}`}>
          <li className="list-group-item">
            { console.log(`question ${index}`, this.props.question) }
            { question.category.name }
          </li>
        </Link>
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
