


import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./Events.scss";

// No longer need imports for images since using public folder paths

const eventsData = [
  // Upcoming Events (only these will be shown; past are ignored but kept in data for future if needed)
  {
    id: 1,
    title: "Healthcare Outreach",
    date: "2025-10-12",
    type: "upcoming",
    venue: "Community Health Center, Lagos",
    description: "Free medical checkups and vaccinations for the underserved community.",
    fullDescription: "Join us for a comprehensive health outreach with workshops, vaccinations, and wellness advice. Volunteers welcome!",
    gallery: ["/about01.png", "/about02.png", "/about03.png"],
  },
  {
    id: 2,
    title: "Education Support Fair",
    date: "2025-09-18",
    type: "upcoming",
    venue: "City Library, Abuja",
    description: "Scholarships and mentorship programs for students.",
    fullDescription: "Meet scholarship mentors, attend educational workshops, and learn how to support local students. Volunteers are encouraged to join!",
    gallery: ["/about02.png", "/about01.png", "/about04.png"],
  },
  {
    id: 3,
    title: "Tech Skills Workshop",
    date: "2025-09-25",
    type: "upcoming",
    venue: "Tech Hub, Enugu",
    description: "Digital skills training for youth empowerment.",
    fullDescription: "Learn coding, web development, and digital skills in a hands-on workshop. Volunteers can assist with sessions and mentoring.",
    gallery: ["/about01.png", "/about02.png", "/about03.png"],
  },
  {
    id: 4,
    title: "Women Empowerment Seminar",
    date: "2025-10-05",
    type: "upcoming",
    venue: "Conference Hall, Port Harcourt",
    description: "Workshops and talks empowering women entrepreneurs.",
    fullDescription: "A day of motivational talks, business skill workshops, and networking for women in business. Volunteers welcome to assist.",
    gallery: ["/about02.png", "/about01.png", "/about03.png"],
  },
  {
    id: 5,
    title: "Community Sports Day",
    date: "2025-11-02",
    type: "upcoming",
    venue: "Central Park, Ibadan",
    description: "Fun sports activities for youth and families.",
    fullDescription: "Organized sports competitions, games, and community bonding activities. Volunteers can help organize and referee games.",
    gallery: ["/about03.png", "/about01.png", "/about01.png"],
  },

  // Past Events (these won't be displayed; remove if you want to clean up data)
  {
    id: 6,
    title: "Skills Training Bootcamp",
    date: "2025-07-15",
    type: "past",
    venue: "Innovation Center, Kano",
    description: "Vocational skills training for young adults.",
    fullDescription: "Completed a 3-day intensive skills bootcamp for youth, including IT, carpentry, and design skills.",
    gallery: ["/about01.png", "/about02.png"],
  },
  {
    id: 7,
    title: "Health Awareness Campaign",
    date: "2025-06-10",
    type: "past",
    venue: "Local Community Hall, Lagos",
    description: "Awareness on preventive healthcare and nutrition.",
    fullDescription: "Held workshops, distributed health kits, and educated the community on healthy living practices.",
    gallery: ["/about02.png", "/about03.png"],
  },
  {
    id: 8,
    title: "Child Education Outreach",
    date: "2025-05-22",
    type: "past",
    venue: "Primary School, Enugu",
    description: "Supported children's education through supplies and mentoring.",
    fullDescription: "Distributed books and learning materials, and provided mentorship sessions for students.",
    gallery: ["/about03.png", "/about01.png"],
  },
  {
    id: 9,
    title: "Clean Water Initiative",
    date: "2025-04-18",
    type: "past",
    venue: "Village Center, Ogun State",
    description: "Installation of clean water points and hygiene education.",
    fullDescription: "Installed clean water points, educated locals on sanitation, and distributed hygiene kits.",
    gallery: ["/about01.png", "/about02.png"],
  },
  {
    id: 10,
    title: "Environmental Awareness Walk",
    date: "2025-03-12",
    type: "past",
    venue: "City Streets, Abuja",
    description: "Promoting eco-friendly practices and community cleanup.",
    fullDescription: "Conducted awareness walk, distributed flyers, and engaged volunteers in city clean-up activities.",
    gallery: ["/about03.png", "/about04.png"],
  },
];

// Sort function for upcoming (by soonest date)
const sortByDate = (events) => events.sort((a, b) => new Date(a.date) - new Date(b.date));

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const now = new Date(); // Current date/time for dynamic filtering

  // Filter upcoming events: Keep if not more than 48 hours past the event date
  const filteredUpcomingEvents = eventsData
    .filter((e) => {
      if (e.type !== "upcoming") return false;
      const eventDate = new Date(e.date);
      const expiryDate = new Date(eventDate.getTime() + 48 * 60 * 60 * 1000); // Add 48 hours
      return now < expiryDate; // Show if now is before expiry
    });

  const sortedEvents = sortByDate(filteredUpcomingEvents);

  // Function to check if volunteer button should show (hides if event date has passed)
  const canVolunteer = (eventDate) => {
    const eventDay = new Date(eventDate);
    eventDay.setHours(23, 59, 59, 999); // End of the event day
    return now <= eventDay; // Show button if now is on or before event day
  };

  return (
    <section className="events-page">
      <div className="background-art"></div>

      <motion.h2
        className="events-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Upcoming <span className="highlight">Events</span>
      </motion.h2>

      <p className="events-intro">
        At Healing Hands Foundation, our upcoming events empower widows, families, and communities through health, education, and skill-building initiatives. Join us and make a difference!
      </p>

      <div className="events-grid">
        {sortedEvents.length > 0 ? (
          sortedEvents.map((event) => (
            <motion.div
              key={event.id}
              className="event-card"
              onClick={() => setSelectedEvent(event)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: event.id * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={event.gallery[0]} alt={event.title} />
              <div className="event-info">
                <h4>{event.title}</h4>
                <p>{event.description}</p>
                <span className="event-date">
                  {new Date(event.date).toDateString()} | {event.venue}
                </span>
                <button className="learn-more">Learn More</button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="no-events">No upcoming events right now—check back soon for new opportunities to get involved!</p>
        )}
      </div>

      {selectedEvent && (
        <div className="event-modal">
          <div className="modal-backdrop" onClick={() => setSelectedEvent(null)} />
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <HiX className="modal-close" onClick={() => setSelectedEvent(null)} />
            <h2>{selectedEvent.title}</h2>
            <span className="modal-date">
              {new Date(selectedEvent.date).toDateString()} | {selectedEvent.venue}
            </span>
            <p>{selectedEvent.fullDescription}</p>
            <p className="impact-note">Get ready to make an impact—volunteers like you help us reach more communities!</p>
            <div className="modal-gallery">
              {selectedEvent.gallery.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt={`${selectedEvent.title}-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.2 }}
                />
              ))}
            </div>
            {canVolunteer(selectedEvent.date) && (
              <Link to="/partners">
                <button className="volunteer-btn">Volunteer for This Event</button>
              </Link>
            )}
          </motion.div>
        </div>
      )}

      {/* <div className="events-footer">
        <p>Stay updated on our latest events!</p>
        <Link to="/contact"><button className="cta-btn">Subscribe to Newsletter</button></Link>
      </div> */}
    </section>
  );
};

export default Events;