import React, { Component } from 'react';
import './App.css';

class Comment extends Component {
    _handleDelete(event) {
        event.preventDefault()

        let { author, body, id } = this.props

        let comment = {
            author, body, id
        }

        this.props.onDelete(comment)
    }

    render() {
        const {author, body} = this.props

        return (
            <div className="comment col-md-3">
                <div className="panel panel-default">
                    <p className="panel-heading">{author}</p>
                    <p className="panel-body">{body}</p>
                    <div className="panel-footer">
                        <a href="#" className="comment-footer-delete" onClick={this._handleDelete.bind(this)}>Delete Comment</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Comment
