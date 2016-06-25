import React from 'react'


let comments = [
  {
    author: 'Piotr',
    contents: 'This is awesome'
  }, {
    author: 'Filip',
    contents: 'This is bad'
  }, {
    author: 'Justin',
    contents: 'This is shit'
  }
];

export class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.updateNumberOfComments = this.updateNumberOfComments.bind(this);
    this.state = {
      numberOfComments: 2
    }
  }

  updateNumberOfComments(event) {
    console.log('value', event.target.value);
    this.setState({
      numberOfComments: event.target.value
    })
  }

  render() {
    let noc = this.state.numberOfComments;
    return (
      <div>
        <input type="number" value={noc} onChange={this.updateNumberOfComments} />
        {comments.slice(0, noc).map(comment => (
          <Comment
            contents={comment.contents}
            author={comment.author}
          />
        ))}
      </div>
    )
  }
}

export class Comment extends React.Component {
  render() {
    // let p = this.props;
    return (
      <div>
        <p>{this.props.author}: {this.props.contents}</p>
      </div>
    )
  }
}

Comment.propTypes = {
  contents: React.PropTypes.string,
  author: React.PropTypes.string
};