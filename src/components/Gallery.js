import React from 'react';

function Gallery() {
  // Prevent right-click to avoid downloading
  const preventRightClick = (e) => e.preventDefault();

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'Dancing Script, cursive', color: '#e63946' }}>
        Our Memories
      </h1>
      <p>A collection of some of the most beautiful moments we've shared together.</p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
        }}
      >
        {/* Image Section */}
        <div className="portrait">
          <img
            src="/images/memory1.jpg"
            alt="Memory 1"
            onContextMenu={preventRightClick}
          />
        </div>
        <div className="portrait">
          <img
            src="/images/memory2.jpg"
            alt="Memory 2"
            onContextMenu={preventRightClick}
          />
        </div>
        <div className="portrait">
          <img
            src="/images/memory3.jpg"
            alt="Memory 3"
            onContextMenu={preventRightClick}
          />
        </div>
        <div className="portrait">
          <img
            src="/images/memory4.jpg"
            alt="Memory 4"
            onContextMenu={preventRightClick}
          />
        </div>
        <div className="portrait">
          <img
            src="/images/memory5.jpg"
            alt="Memory 5"
            onContextMenu={preventRightClick}
          />
        </div>

        {/* Video Section */}
        <div className="portrait">
          <video
            controls
            onContextMenu={preventRightClick}
          >
            <source src="/videos/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="portrait">
          <video
            controls
            onContextMenu={preventRightClick}
          >
            <source src="/videos/video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Image Section */}
        <div className="portrait">
          <img
            src="/images/memory6.jpg"
            alt="Memory 6"
            onContextMenu={preventRightClick}
          />
        </div>
        <div className="portrait">
          <img
            src="/images/memory7.jpg"
            alt="Memory 7"
            onContextMenu={preventRightClick}
          />
        </div>
        <div className="portrait">
          <img
            src="/images/memory8.jpg"
            alt="Memory 8"
            onContextMenu={preventRightClick}
          />
        </div>
        <div className="portrait">
          <img
            src="/images/memory9.jpg"
            alt="Memory 9"
            onContextMenu={preventRightClick}
          />
        </div>
      </div>
      <footer>Memories to aur boht hai, lkin filhal yehi daal rha!!!💖</footer>
    </div>
  );
}

export default Gallery;
