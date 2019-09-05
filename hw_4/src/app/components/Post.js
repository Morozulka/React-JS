import React, { Component } from 'react';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <h2 className="postTitle">{this.props.postTitle}</h2>
                <p className="postBody">{this.props.postBody}</p>
                <p className="postDate">{this.props.postDate}</p>
            </div>
        )
    }
}