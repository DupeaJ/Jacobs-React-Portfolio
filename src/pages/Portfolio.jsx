import React from "react";
import Header from "../components/Header";
import AutoHubImage from "../assets/images/AutoHub.PNG";
import CodingQuizImage from "../assets/images/Coding-Quiz.PNG";
import RareImage from "../assets/images/Rare.PNG";
import TheeBibleImage from "../assets/images/TheeBible.PNG";
import WeatherImage from "../assets/images/Weather.PNG";
import ZenVestImage from "../assets/images/ZenVest.PNG";

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

