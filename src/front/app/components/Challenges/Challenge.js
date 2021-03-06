import React from 'react';

const Challenge = ({ title, user, location }) => (
    <li className="challenge">
        <div className="challenge__image">Image here</div>
        <span className="challenge__title">
            {title}
        </span>
        <div className="challenge__user-block">
            <span className="challenge__rating">
                {user.rating}
            </span>
            <span>
                {user.firstName} {user.lastName}
            </span>
        </div>
        <span className="challenge__location">
            <span className="icon challenge__icon" />
            {location}
        </span>
    </li>
);

Challenge.propTypes = {
    title: React.PropTypes.string.isRequired,
    user: React.PropTypes.object.isRequired,
    location: React.PropTypes.string.isRequired
};

export default Challenge;
