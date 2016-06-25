import React from 'react'


export class CommentList extends React.Component {
  render() {
    return (
      <div>
        <Comment contents={'foo'} />
        <Comment contents={'bar'} />
        <Comment contents={'baz'} />
      </div>
    )
  }
}

export class Comment extends React.Component {
  render() {
    // let p = this.props;
    return (
      <p>{this.props.contents}</p>
    )
  }
}

Comment.propTypes = {
  contents: React.PropTypes.string
};