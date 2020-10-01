import React, { Component } from 'react';
import firebase from './firebase';


// Create Component
class CommentList extends Component {
    constructor() {
        super();
        // Set empty comments array and clear userTag input
        this.state = {
            comments: [],
            userTag: '',
        }
    }

    componentDidMount() {
        // Call the getComments function
        this.getComments();
    }
    
    getComments = () => {
        // Establish a reference to database
        const dbRef = firebase.database().ref();

        // On
        dbRef.on('value', (response) => {
            // New variable to store updated comment list
            const updatedList = [];
            // Store the value of the resonse we get back in a variable
            const data = response.val();
            // Push all of the new information as an object into the updatedList array
            for (let key in data) {
                updatedList.push({
                    key: key,
                    id: data[key].id,
                    tag: data[key].tag,
                    voteCount: data[key].voteCount,
                })
            }
            // Update state to include new comments (updatedList array)
            this.setState({
                comments: updatedList
            });
        });
    }

    // Create a function to target the value passed into the input
    handleChange = (event) => {
        this.setState({
            // update userTag with the value
            userTag: event.target.value
        })
    }

    handleClick = (event) => {
        // Prevent the page from refreshing
        event.preventDefault();
        // Create a variable to reference the database
        const dbRef = firebase.database().ref();

        // Create an object to store the data received from input
        const userComment = {
            id: this.props.movieID,
            tag: this.state.userTag,
            voteCount: 0,
        };
        // Push the data to the database
        dbRef.push(userComment);
        // Clear the input
        this.setState({
            userTag: ''
        })
    }

    upVoteOrDownVote = (e, commentKey, isUp) => {
        e.preventDefault();
        const tagToUpdate = this.state.comments.find(comment => comment.key = commentKey);
        const updatedComment = {
            ...tagToUpdate,
            voteCount: isUp ? ++tagToUpdate.voteCount : --tagToUpdate.voteCount
        };
        const dbRef = firebase.database().ref(commentKey);
        // Push the data to the database
        dbRef.update({ voteCount: updatedComment.voteCount })
        /* const updatedComments = [...this.state.comments.filter(comment => comment.key !== commentKey), updatedComment];
        this.setState({
            comments: updatedComments
        }); */

        
    }

    render() {
        return (
            <div className="commentList">
                <form action="submit">
                    <label htmlFor="newTag" className="visuallyHidden">tag it</label>
                    <input
                        type="text"
                        id="newTag"
                        onChange={this.handleChange}
                        value={this.state.userTag}
                    />
                    <button onClick={this.handleClick} className="tag">tag it</button>
                </form>
                <ul>
                    {this.state.comments.filter(tag => {
                        return tag.id === this.props.movieID;
                    }).sort(function(a,b){
                        return b.voteCount - a.voteCount
                    }).map((tag) => {
                        return(
                            <li key={tag.key}>
                                <div>
                                    <p className="votes" id="voteCount"><span className="score">{tag.voteCount}</span></p>
                                </div>

                                <p className="tagged">{tag.tag}</p>

                                <div className="voteButtBox">
                                    <button className="voteButt" onClick={e => this.upVoteOrDownVote(e, tag.key, true)}>
                                        <i className="fas fa-chevron-circle-up"></i>
                                    </button>
                                    <button className="voteButt" onClick={e => this.upVoteOrDownVote(e, tag.key)}>
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