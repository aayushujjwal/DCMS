import React from 'react';
import './Styles/EventsPage.css';
import Header2 from './Header2';

const EventsPage = () => {
  const events = [
    {
      title: 'Dance Party',
      date: 'July 20, 2023',
      description: 'Join us for a night of non-stop dancing and music!',
    },
    {
      title: 'Hip-Hop Workshop',
      date: 'August 5, 2023',
      description: 'Learn the latest hip-hop moves from professional dancers.',
    },
    {
      title: 'Salsa Night',
      date: 'August 15, 2023',
      description: 'Experience the vibrant rhythms of salsa music and dance.',
    },
  ];

  return (
    <>
    <Header2></Header2>
    <div className="events-container">
      {events.map((event, index) => (
        <div key={index} className="event-card">
          <div className="event-title">{event.title}</div>
          <div className="event-date">{event.date}</div>
          <div className="event-description">{event.description}</div>
          <button className="event-button">Register</button>
        </div>
      ))}
    </div>
   
    </>
  );
}

export default EventsPage;
