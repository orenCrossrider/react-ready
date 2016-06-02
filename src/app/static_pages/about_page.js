import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
    return (
        <div>
            <h2>About Page</h2>
            <p>
                <Link to="/badlink">Click this bad link</Link> to see the 404 page.
            </p>
        </div>
    );
};

export default AboutPage;
