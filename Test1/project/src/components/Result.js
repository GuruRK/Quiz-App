import React from 'react';

class Results extends React.Component {
  render() {
    
    return (
      <div className="well">
        <h4>You got {this.props.score} out of {this.props.questions.length}</h4>
        <a className="btn btn-primary" href="/">Take test again</a>
      </div>
    );
  }
}

export default Results;