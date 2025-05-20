import Link from "next/link";
import Image from "next/image";
// Navbar simplified

export default function Navbar({ nav }) {
  if (!nav || !nav.logo || !nav["nav-list"]) {
    return <div>Loading navbar...</div>;
  }

  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container-fluid">
        <Link href="#home" scroll={false} className="navbar-brand">
          <Image src={nav.logo} alt="Logo" width="40" height="40" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            {nav["nav-list"].map((item, index) => {
              const sectionId = item.toLowerCase();
              return (
                <Link
                  key={index}
                  href={`#${sectionId}`}
                  scroll={false}
                  className="nav-link"
                  
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
