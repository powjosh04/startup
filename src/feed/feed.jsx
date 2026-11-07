import React from 'react';

export function Feed() {

  // Simulated notifications for WebSocket placeholder
  const [notifications, setNotifications] = React.useState([
  'Welcome to Student Sustenance!'
]);

React.useEffect(() => {
  const messages = [
    'User123 just posted pizza in the Engineering Building!',
    'CampusBot found bagels in the Library!',
    'Student Government posted donuts in the Student Center!',
    'Wellness Club posted fruit cups near the library!',
  ];

  const interval = setInterval(() => {
    const randomMessage =
      messages[Math.floor(Math.random() * messages.length)];

    setNotifications((current) =>
      [randomMessage, ...current].slice(0, 10)
    );
  }, 10000);

  return () => clearInterval(interval);
}, []);

//Set posts
const [posts, setPosts] = React.useState([]);

//Load posts from backend
async function loadEvents() {
  try {
    const response = await fetch( '/api/events', {
      credentials: 'include',
    });


    console.log(response.status);
    const events = await response.json();

    setPosts(events);
  } catch (error) {
    console.error('Failed to load events', error);
  }
}

//Load events on component start
React.useEffect(() => {
  loadEvents();
}, []);

//Remove post
async function removePost(id) {
  try {
    await fetch(`/api/events/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    });

    setPosts((currentPosts) =>
      currentPosts.filter(
        (post) => post.id !== id
      )
    );
  } catch (error) {
    console.error('Failed to delete event', error);
  }
}

//Form functionality
const [location, setLocation] = React.useState('');
const [description, setDescription] = React.useState('');
const [image, setImage] = React.useState('placeholder.png');


//Handle form submission
async function handleAddEvent(e) {
  e.preventDefault();

  try {
    const response = await fetch( '/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        title: `Food Event at ${location}`,
        description,
        location,
        imageUrl: image,
      }),
    });

    const newEvent = await response.json();

    setPosts((currentPosts) => [
      ...currentPosts,
      newEvent,
    ]);

    setLocation('');
    setDescription('');
    setImage('placeholder.png');
  } catch (error) {
    console.error('Failed to create event', error);
  }
}

  return (
    <div className="app-main container-fluid py-5">
  <div className="container">

        {/* WEBSOCKET PLACEHOLDER */}
  <section className="mb-5 bg-white p-4 rounded shadow border-start border-4 border-primary">
    <h2 className="h5 fw-semibold text-primary mb-2">
      Live Updates
    </h2>

    <p className="text-muted">
      Simulated real-time notifications. This will later be replaced with
      actual WebSocket messages from the server.
    </p>

    <ul className="list-group mt-3">
      {notifications.map((message, index) => (
        <li
          key={index}
          className="list-group-item"
        >
          {message}
        </li>
      ))}
    </ul>
  </section>

    {/* DATABASE PLACEHOLDER */}
    <section className="mb-5">
      <h2 className="h4 fw-bold text-primary mb-2">Current Food Events</h2>
      <p className="text-muted">
        These posts represent items stored in the database.
        Users will be able to remove events once the food is gone.
      </p>
    </section>

{/* POSTS GRID */}
<section className="row g-4 mb-5">

  {posts.map((post) => (
    <article
      key={post.id}
      className="col-12 col-sm-6 col-lg-4"
    >
      <div className="card shadow-sm border-start border-4 border-primary h-100">
        <div className="card-body">

          <h3 className="h5 fw-semibold mb-3">
            {post.title}
          </h3>

          <img
            src={post.imageUrl}
            alt={post.title}
            className="img-fluid rounded mb-3"
          />

          <p>
            {post.description}
          </p>

          <p className="fw-medium mt-2">
            <strong>Location:</strong> {post.location}
          </p>

          <button
            className="btn btn-primary mt-3 w-100"
            onClick={() => removePost(post.id)}
          >
            Remove Event
          </button>

        </div>
      </div>
    </article>
  ))}

</section>

    {/* ADD EVENT FORM */}
        <section className="bg-white p-4 p-md-5 rounded shadow border-start border-4 border-primary">
          <h2 className="h4 fw-bold text-primary mb-4">Add New Food Event</h2>

          <form onSubmit={handleAddEvent}>
          
          {/* Will be replaced with actual image upload functionality later */}
            <div className="mb-3">
              <label htmlFor="event-image" className="form-label fw-medium">Upload Image:</label>
             <input
                type="file"
                id="event-image"
                name="event-image"
                accept="image/*"
                required
                className="form-control"
                onChange={(e) => {
                const file = e.target.files[0];

                if (file) {
                  setImage(URL.createObjectURL(file));
                }
              }}
            />
            </div>

            <div className="mb-3">
              <label htmlFor="event-location" className="form-label fw-medium">Location:</label>
              <input
              type="text"
              id="event-location"
              name="event-location"
              required
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
/>
            </div>

            <div className="mb-3">
              <label htmlFor="event-description" className="form-label fw-medium">Description:</label>
              <textarea
                id="event-description"
                name="event-description"
                required
                className="form-control"
                rows="4"
                placeholder="Describe the food, quantity left, and any time-sensitive details..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2">
              Add Event
            </button>

          </form>
        </section>

  </div>
</div>

  );
}