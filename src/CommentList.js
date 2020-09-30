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
        this.getComments();
    }
    
    getComments() {
        const dbRef = firebase.database().ref();

        dbRef.on('value', (response) => {
            const updatedList = [];
            const data = response.val();

            for (let key in data) {
                updatedList.push({
                    key: key,
                    id: data[key].id,
                    tag: data[key].tag,
                    voteCount: data[key].voteCount,
                })
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

        const userComment = {
            id: this.props.movieID,
            tag: this.state.userTag,
            voteCount: 0,
        };

        dbRef.push(userComment);

        this.setState({
            userTag: ''
        })
    }

    upVote = () => {
        this.voteCount = this.voteCount + 1;
    }

    downVote = (e) => {
        this.voteCount = this.voteCount - 1;
    }

    render() {
        return (
            <div className="commentList">
                <form action="submit">
                    <label htmlFor="newTag" className="visuallyHidden">tag it</label>
                    <input
                        type="text"
                        id="newTag"
                        className=""
                        onChange={this.handleChange}
                        value={this.state.userTag}
                    />
                    <button onClick={this.handleClick} className="tag">tag it</button>
                </form>
                <ul>
                    {this.state.comments.filter(tag => {
                        return tag.id === this.props.movieID;
                    }).map((tag) => {
                        return(
                            <li key={tag.key}>
                                <div>
                                    <p className="votes" id="voteCount">{this.voteCount}VOTE COUNT</p>
                                </div>

                                <p className="tagged">{tag.tag}</p>

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