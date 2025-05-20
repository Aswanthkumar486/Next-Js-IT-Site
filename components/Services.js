// components/Services.js
import React from 'react';
import Image from 'next/image';

export default function Services({ services }) {
  if (!services) return <div>Loading services...</div>;

  const { title, items } = services;

  return (
    <section className="container py-5" id="services">
      <h2 className="text-center mb-4">{title}</h2>
      <div className="row justify-content-center">
        {items.map(({ id, title, description, icon }) => (
          <div key={id} className="col-md-5 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <Image
                src={icon}
                alt={`${title} icon`}
                className="card-img-top p-3"
                width={400}
                height={400}
                style={{ height: 120, objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
