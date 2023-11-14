import React from "react";
import Header from "../components/Header";
import AutoHubImage from "../assets/images/AutoHub.png";
import CodingQuizImage from "../assets/images/Coding-Quiz.png";
import RareImage from "../assets/images/Rare.png";
import TheeBibleImage from "../assets/images/TheeBible.png";
import WeatherImage from "../assets/images/Weather.png";
import ZenVestImage from "../assets/images/ZenVest.png";

const portfolioSections = [
    {
        backgroundImg: AutoHubImage,
        githubLink: "https://github.com/DupeaJ/AutoHubWhenever",
    },
    {
        backgroundImg: CodingQuizImage,
        githubLink: "https://github.com/DupeaJ/jacob.dupea-coding-quiz",
    },
    {
        backgroundImg: RareImage,
        githubLink: "https://github.com/DupeaJ/Amazing-Weather-Data",
    },
    {
        backgroundImg: TheeBibleImage,
        githubLink: "https://github.com/DupeaJ/TheeBibleWriter",
    },
    {
        backgroundImg: WeatherImage,
        githubLink: "https://github.com/DupeaJ/RandomRecipe",
    },
    {
        backgroundImg: ZenVestImage,
        githubLink: "https://github.com/manc1n1/zenvest",
    },
];

export default function Portfolio() {
    return (
        <section className="portfolio-container">
            <h1>Portfolio</h1>
            <p>Here are some examples of my work. Images are links to the github Repo for that project</p>
            <div className="portfolio-grid">
                {portfolioSections.map((section, index) => (
                    <div key={index} className="portfolio-item">
                        <Header header={`Project Example ${index + 1}`} />
                        <a
                            href={section.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ backgroundImage: `url(${section.backgroundImg})` }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

