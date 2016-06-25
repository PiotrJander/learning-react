import React from 'react'


export class CommentList extends React.Component {
  render() {
    return (
      <div>
        <Comment />
        <Comment />
        <Comment />
      </div>
    )
  }
}

export class Comment extends React.Component {
  render() {
    return (
      <p>Comment</p>
    )
  }
}