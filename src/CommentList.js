import React, { Component } from 'react';
import firebase from './firebase';


class CommentList extends Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            userTag: '',
        }
    }

    componentDidMount() {
        // store reference to database in variable 
        const dbRef = firebase.database().ref();

        dbRef.on('value', (response) => {
            const updatedList = [];
            const data = response.val();

            for (let key in data) {
                updatedList.push({key: key, name: data[key]})
            }

            this.setState({
                comments: updatedList
            });
        });
    }

    handleChange = (event) => {
        this.setState({
            userTag: event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        const dbRef = firebase.database().ref();

        dbRef.push(this.state.userTag);

        this.setState({
            userTag: ''
        })
    }

    upVote = (e) => {
        console.log('clicked')
    }

    downVote = (e) => {
        console.log('clicked')
    }

    render() {
        return (
            <div className="commentList">
                <form action="submit">
                    <label htmlFor="newTag">tag it</label>
                    <input
                        type="text"
                        id="newTag"
                        onChange={this.handleChange}
                        value={this.state.userTag}
                    />
                    <button onClick={this.handleClick}>tag it</button>
                </form>
                <ul>
                    {this.state.comments.map((tag) => {
                        return(
                            <li key={tag.key}>
                                <div>
                                    <p className="votes" id="voteCount">VOTE COUNT</p>
                                </div>

                                <p className="tagged">{tag.name}</p>

                                <div className="voteButtBox">
                                    <button className="voteButt" onClick={this.upVote}>
                                        <i className="fas fa-chevron-circle-up"></i>
                                    </button>
                                    <button className="voteButt" onClick={this.downVote}>
                                        <i className="fas fa-chevron-circle-down"></i>
                                    </button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default CommentList;