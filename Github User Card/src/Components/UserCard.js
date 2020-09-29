import React from 'react';
import './UserCard.css';

class UserCard extends React.Component {
    render() {
        return (
            <div className="usercard">
                <img className='avatar-img' src={this.props.userData.avatar_url} alt='Avatar' />
                <div>
                    <h3>{this.props.userData.name}</h3>
                </div>
                <div className='follow-container'>
                    <span>Followers: <b>{this.props.userData.followers}</b></span>
                    <span> </span>
                    <span>Followers: <b>{this.props.userData.following}</b></span>
                </div>
                <div className='repo-container'>
                    <span>Repos: <b>{this.props.userData.public_repos}</b></span>
                </div>
                <div className='bio-container'>
                    <span>{this.props.userData.bio}</span>
                </div>
                <div className='streak-container'>
                    <img src={`http://ghchart.rshah.org/${this.props.userData.login}`} alt="2016rshah's Github chart" />
                </div>
            </div>
        );
    }
}

export default UserCard;