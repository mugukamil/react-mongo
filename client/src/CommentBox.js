import React, { Component } from 'react';
import Comment from './Comment'
import CommentForm from './CommentForm'
import './App.css';

class CommentBox extends Component {
    constructor() {
        super()

        this.state = {
            showComments: false,
            comments: []
        }
    }

    componentWillMount() {
        this._fetchComments()
    }

    componentDidMount() {
        this._timer = setInterval(() => this._fetchComments, 5000)
    }

    componentWillUnmount() {
        clearInterval(this._timer)
    }

    _addComment(author, body) {
        const comment = {author, body}

        console.log(comment);

        fetch('/api/comments', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(comment)
        }).then((response) => {
            // this.setState({ comments: this.state.comments.concat([response.comment]) })
            this._fetchComments()
         })
    }

    _deleteComment(comment) {
        console.log(comment);
        fetch(`api/comments/${comment.id}`, { method: 'DELETE' })
            .then(res => {
                this._fetchComments()
                // const comments = [...this.state.comments]
                // const commentIndex = comments.indexOf(comment)
                // comments.splice(commentIndex, 1)

                // this.setState({ comments })
            })

    }

    _getComments() {
        return this.state.comments.map((comment) => <Comment key={comment._id} author={comment.author} body={comment.body} id={comment._id} onDelete={this._deleteComment.bind(this)} />)
        // return this.state.comments.map((comment) => <Comment key={comment._id} author={comment.author} body={comment.body} onDelete={this._deleteComment(comment).bind(this)} />)
    }

    _fetchComments() {
        fetch('/api/comments', {
            accept: 'application/json'
        })
        .then(r => r.json())
        .then(comments => {
            this.setState({comments})
        })
    }

    _getCommentsTitle(commentCount) {
        if (commentCount === 0) {
            return 'No comments yet'
        } else if (commentCount === 1) {
            return '1 comment'
        } else {
            return `${commentCount} comments`
        }
    }

    _handleClick() {
        this.setState({ showComments: !this.state.showComments })
    }

    render() {
        const comments = this._getComments()
        const commentCount = this._getCommentsTitle(comments.length)
        let buttonText = 'Show Comments'
        let commentNodes

        if (this.state.showComments) {
            buttonText = 'Hide comments'
            commentNodes = <div className="comment-list row">{comments}</div>
        }

        return (
            <div className="comment-box">
                <CommentForm addComment={this._addComment.bind(this)} />
                <h3>Comments</h3>
                <h4 className="comment-count">{commentCount}</h4>
                <button onClick={this._handleClick.bind(this)} className="btn btn-primary">{buttonText}</button>
                {commentNodes}
            </div>
        )
    }
}

export default CommentBox
