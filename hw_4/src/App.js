import React from 'react';
import ReactDOM from 'react-dom';
import './app/styles/style.css';

import WelcomeModal from './app/components/WelcomeModal';
import Blog from './app/components/Blog';

class App extends React.Component {
	render() {
        const postsToBlog = [
            {postTitle: "Post 1", postBody: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, ipsa omnis dolores illo architecto totam quia facilis reprehenderit dicta blanditiis.", postDate: "01.01.2019"},
            {postTitle: "Post 2", postBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dolor.", postDate: "02.02.2019"},
            {postTitle: "Post 3", postBody: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, ipsa omnis dolores illo architecto totam quia facilis.", postDate: "03.03.2019"}
        ];

        return(
        <div>
            <WelcomeModal />
            <Blog posts={postsToBlog} />
        </div>
        ) 
    }
}
ReactDOM.render(<App />, document.querySelector("#root"));