import React, { Component } from 'react';
import './App.css';

class CommentForm extends Component {
    _handleSubmit(event) {
        event.preventDefault()

        let author = this._author
        let body = this._body

        this.props.addComment(author.value, body.value)
    }

    render() {
        return (
            <form className="comment-form form">
                <label>Join the discussion</label>
                <div className="comment-form-fields form-group">
                    <input type="text" placeholder="Name:" ref={(input) => this._author = input} className="form-control" />
                    <textarea className="form-control" placeholder="Comments:" ref={(textarea) => this._body = textarea}></textarea>
                </div>
                <div className="comment-form-actions">
                    <button type="submit" onClick={this._handleSubmit.bind(this)} className="btn btn-primary">Post Comment</button>
                </div>
            </form>
        )
    }
}

export default CommentForm
