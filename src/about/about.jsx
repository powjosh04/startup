import React from 'react';

export function About() {
  const [imageUrl, setImageUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');

React.useEffect(() => {
  async function loadFoodImage() {
    try {
      const response = await fetch(
        'https://foodish-api.com/api/images/:food'
      );

      const data = await response.json();

      setImageUrl(data.image);
    } catch (error) {
      console.error('Failed to load image', error);
    }
  }

  loadFoodImage();
}, []);

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
        src={imageUrl}
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