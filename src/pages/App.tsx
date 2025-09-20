import { Link, Outlet } from "react-router-dom";
import ShootingStars from "./components/ShootingStar";

function Navigation() {
  return (
    <nav className="sticky top-0 z-20 border-b bg-slate-700 backdrop-blur-lg">
      <div className="flex items-center justify-between p-4">
        <Link to="/" className="font-bold text-white">
          Hyoka7's Homepage
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link
            to="/"
            className="transition-colors text-white hover:text-slate-300"
          >
            Home
          </Link>
          <Link
            to="/aboutme"
            className="transition-colors text-white hover:text-slate-300"
          >
            About Me
          </Link>
          <Link
            to="/frontend"
            className="transition-colors text-white hover:text-slate-300"
          >
            Works
          </Link>
          <Link
            to="/certification"
            className="transition-colors text-white hover:text-slate-300"
          >
            Certifications
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer(){
  return (
    <footer className="border-t border-slate-800 bg-slate-700/50 p-4 text-center text-sm text-slate-300">
      &copy; {new Date().getFullYear()} Hyoka7 All Rights Reserved.
    </footer>
  );
}

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-900 text-white">
      <Navigation />
      <ShootingStars />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
