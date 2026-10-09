import React from 'react';

export function About() {
  return (
    <div className="app-main container-fluid py-5">
    <div className="container about-container">



    {/* ABOUT SECTION */}
    <section className="mb-5">
      <h2 className="h4 fw-bold text-primary mb-3">About This Project</h2>

      <p className="mb-3">
        Student Sustenance is a simple campus tool that helps students find free food 
        and other resources in real time. Users can upload events, share locations, 
        and remove posts once the food is gone.
      </p>
    </section>

    {/* API PLACEHOLDER */}
    <section className="text-center">
      <img 
        src="placeholder.png"
        alt="Random food placeholder"
        className="img-fluid rounded shadow mb-3"
      />
      <p className="text-muted">
        Example image that will be replaced by Foodish API results.
      </p>
    </section>

  </div>
</div>

  );
}