import React from 'react';
import { Link } from 'react-router-dom';


const EventsPage = () => {
    return (
        <div>
            <h1>Events Page</h1>
            <p>This is the events page.</p>
            <Link to="/">Go back to the homepage</Link>
        </div>
    );
};

export default EventsPage;