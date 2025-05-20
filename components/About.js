// components/About.js
import React from "react";
import Image from 'next/image';
export default function About({ about }) {
  if (!about) return <div>Loading about...</div>;

  const { title, content, image } = about;

  return (
    <section
      className="container my-5 py-5"
      id="about"
      style={{
        background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      }}
    >
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <Image
            src={image}
            alt="About us"
            className="img-fluid rounded shadow-lg"
        width={400} height={400}
            style={{
              borderRadius: "20px",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
        <div className="col-md-6">
          <h2
            className="display-4 mb-4 section-title"
            style={{
              fontWeight: 700,
              letterSpacing: "2px",
              color: "#2b65ec",
              textShadow: "1px 1px 4px rgba(43, 101, 236, 0.4)",
            }}
          >
            {title}
          </h2>
          <p
            className="lead text-muted"
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.8,
              color: "#495057",
              fontWeight: 500,
            }}
          >
            {content}
          </p>
        </div>
      </div>
    </section>
  );
}
