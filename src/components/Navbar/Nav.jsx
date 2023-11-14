import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

export default function Nav() {
	const links = [
		{ name: 'Portfolio', route: '/portfolio' },
		{ name: 'About', route: '/' },
		{ name: 'Contact', route: '/contact' },
		{ name: 'Resume', route: '/resume' },
	];

    const renderLink = (content) => {
        return (
            <NavLink
                className={({ isActive }) => 
                    isActive ? "nav-link active" : "nav-link"}
                key={content.name}
                to={content.route}
                end // use 'end' prop for matching the exact route (especially for the home route '/')
            >
                {content.name}
            </NavLink>
        );
    };

    return (
        <header className="">
            <Navbar links={links.map((nav) => renderLink(nav))} />
        </header>
    );
}