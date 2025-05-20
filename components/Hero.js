// components/Hero.js
import React from 'react';
import Image from 'next/image';

export default function Hero({ data }) {
  if (!data || !data.homepage) {
    return <div>Loading hero section...</div>;
  }

  const { title, subtitle, ctaText, carouselImages } = data.homepage;

  return (
    <section id="home" className="hero-section py-5 bg-light">
      <div className="container text-center">
        <h1 className="display-4">{title}</h1>
        <p className="lead">{subtitle}</p>
        <a href="#" className="btn btn-primary btn-lg">{ctaText}</a>

        {carouselImages?.length > 0 && (
          <div
            id="heroCarousel"
            className="carousel slide mt-5"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {carouselImages.map((img, index) => (
                <div
                  key={index}
                  className={carousel-item${index === 0 ? ' active' : ''}}
                >
                  <Image
                    src={img}
                    alt={Slide ${index + 1}}
                    width={800}
                    height={400}
                    className="d-block rounded shadow"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>

            <div className="carousel-indicators mt-3">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide-to={idx}
                  className={idx === 0 ? 'active' : ''}
                  aria-current={idx === 0 ? 'true' : 'false'}
                  aria-label={Slide ${idx + 1}}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
  
  
