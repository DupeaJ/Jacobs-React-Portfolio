import { Link } from 'react-router-dom';

export default function Nav({ links }) {
    return (
        <nav className="nav-container">
            <div className="flex-container">
                <Link className="home-link" to="/">
                    <h1 className="nav-title">
                        Jacob Dupea
                    </h1>
                </Link>
                <div className="nav-links">
                    {links.map((link) => link)}
                </div>
            </div>
        </nav>
    );
}
