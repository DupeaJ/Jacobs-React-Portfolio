import { Outlet } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/footer/Footer";
import "./App.css";
import AnimatedCursor from "react-animated-cursor";

function App() {
    return (
        <div id="app-container">
            <AnimatedCursor
                innerSize={8}
                outerSize={8}
                color="255, 0, 0"
                outerAlpha={1.4}
                innerScale={0.9}
                outerScale={5}
                trailingSpeed={15}
                outerStyle={{
                    border: "3px solid #fff",
                }}
                clickables={[
                    "a",
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    "label[for]",
                    "select",
                    "textarea",
                    "button",
                    ".link",
                    "svg",
                    {
                        target: ".custom",
                        options: {
                            outerSize: 12,
                            color: "255,0,0",
                            outerAlpha: 0.4,
                            innerScale: 0.7,
                            outerScale: 5,
                        },
                    },
                ]}
            />
            <Nav />
            <main id="root">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;
