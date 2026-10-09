import React from 'react';

export function Feed() {

    function handleAddEvent(e) {
    e.preventDefault();
    // Later you can process form data here
    // For now, just prevent reload
  }
  return (
    <div className="app-main container-fluid py-5">
  <div className="container">

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

      {/* Post 1 */}
      <article className="col-12 col-sm-6 col-lg-4">
        <div className="card shadow-sm border-start border-4 border-primary h-100">
          <div className="card-body">
            <h3 className="h5 fw-semibold mb-3">Pizza in Engineering Building</h3>
            <img 
              src="placeholder.png" 
              alt="Free Leftover Pizza in box"
              className="img-fluid rounded mb-3"
              />
            <p>Leftover slices from the robotics club meeting.</p>
            <p className="fw-medium mt-2">
              <strong>Location:</strong> Engineering Building, Room 210
            </p>
            <button className="btn btn-primary mt-3 w-100">
              Remove Event
            </button>
          </div>
        </div>
      </article>

      {/* Post 2 */}
      <article className="col-12 col-sm-6 col-lg-4">
        <div className="card shadow-sm border-start border-4 border-primary h-100">
          <div className="card-body">
            <h3 className="h5 fw-semibold mb-3">Bagels in Library</h3>
            <img 
              src="placeholder.png" 
              alt="Free Bagels on table"
              className="img-fluid rounded mb-3"
              />
            <p>Free bagels from a study group.</p>
            <p className="fw-medium mt-2">
              <strong>Location:</strong> Library, 2nd Floor
            </p>
            <button className="btn btn-primary mt-3 w-100">
              Remove Event
            </button>
          </div>
        </div>
      </article>

      {/* Post 3 */}
      <article className="col-12 col-sm-6 col-lg-4">
        <div className="card shadow-sm border-start border-4 border-primary h-100">
          <div className="card-body">
            <h3 className="h5 fw-semibold mb-3">Fruit Cups in Student Center</h3>
            <img 
              src="placeholder.png" 
              alt="Free Fruit Cups on table"
              className="img-fluid rounded mb-3"
              />
            <p>Healthy snacks left after a wellness workshop.</p>
            <p className="fw-medium mt-2">
              <strong>Location:</strong> Student Center Lobby
            </p>
            <button className="btn btn-primary mt-3 w-100">
              Remove Event
            </button>
          </div>
        </div>
      </article>

    </section>

    {/* WEBSOCKET PLACEHOLDER */}
    <section className="mb-5 bg-white p-4 rounded shadow border-start border-4 border-primary">
      <h2 className="h5 fw-semibold text-primary mb-2">Live Updates (WebSocket Placeholder)</h2>
      <p className="text-muted">
        This section will display real-time notifications using WebSockets.
        For example: “User123 just posted a bagel in the Library!”
      </p>
      <ul className="mt-3 text-muted">
        <li>[Live update messages will appear here]</li>
      </ul>
    </section>

    {/* ADD EVENT FORM */}
        <section className="bg-white p-4 p-md-5 rounded shadow border-start border-4 border-primary">
          <h2 className="h4 fw-bold text-primary mb-4">Add New Food Event</h2>

          <form onSubmit={handleAddEvent}>
            
            <div className="mb-3">
              <label htmlFor="event-image" className="form-label fw-medium">Upload Image:</label>
              <input 
                type="file" 
                id="event-image" 
                name="event-image" 
                accept="image/*" 
                required
                className="form-control"
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