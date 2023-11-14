import { Outlet } from 'react-router-dom';
import Nav from './components/Navbar/Nav';
import Footer from './components/footer/Footer';
import './app.css';

function App() {
    return (
        <div id="app-container">
            <Nav />
            <main id="root">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;
