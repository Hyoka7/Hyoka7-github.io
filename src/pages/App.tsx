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
export default function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen relative">
      <Navigation />
      <ShootingStars />
      <Outlet />
    </div>
  );
}
