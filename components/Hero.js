import React from 'react';
import Image from 'next/image';

const repoBasePath = '/Next-Js-IT-Site'; // your GitHub repo name as base path

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
                  className={`carousel-item${index === 0 ? ' active' : ''}`}
                >
                  <Image
                    src={`${repoBasePath}${img}`}   // prepend repoBasePath here
                    alt={`Slide ${index + 1}`}
                    width={800}
                    height={400}
                    className="d-block rounded shadow"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              ))}
            </div>

            {/* carousel controls and indicators remain unchanged */}
            {/* ... */}
          </div>
        )}
      </div>
    </section>
  );
}
