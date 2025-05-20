import Link from 'next/link';
import Image from 'next/image';

export default function Works({ data }) {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 mb-3">{data.title}</h2>
          <p className="lead">{data.subtitle}</p>
        </div>

        <div className="row g-4">
          {data.projects.map((project) => (
            <div key={project.id} className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-img-top overflow-hidden" style={{ height: '250px' }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="object-fit-cover"
                  />
                </div>
                <div className="card-body">
                  <h3 className="h5">{project.title}</h3>
                  <p className="text-muted">{project.description}</p>
                  <div className="mb-3">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="badge me-2 mb-2"
                        style={{ backgroundColor: '#0d6efd20', color: '#0d6efd' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link href={project.link} passHref legacyBehavior>
                    <a className="btn btn-outline-primary">Case Study →</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
