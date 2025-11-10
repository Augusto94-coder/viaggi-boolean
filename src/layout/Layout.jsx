import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="container py-4 flex-grow-1">
        <Outlet />
      </main>
      </div>
    );
}