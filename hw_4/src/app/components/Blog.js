import React, { Component } from 'react';

import Post from './Post'

export default class Blog extends Component {
    render() {
        const posts = this.props.posts.map((post, index) => {
            return <Post key={index} 
                    postTitle={post.postTitle} 
                    postBody={post.postBody} 
                    postDate={post.postDate} />
        })

        return posts;
    }
}