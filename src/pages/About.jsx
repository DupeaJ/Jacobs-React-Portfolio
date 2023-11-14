import Header from '../components/Header';
import aboutImage from "../assets/images/about-me.jpg";

export default function About() {
	return (
		<section className='container-has' >
			<div className="container-about-me">
			<div className="flex">
				<div className="">
					<Header header={'About Me'} />
				</div>
			</div>

            <p className="about-me-card">
				My name is Jacob Dupea, I am a young junior dev just starting out my coding journey. I am based out of Portland Oregon and always enjoying the rain!
				I enjoy watching movies and playing games online durring the raining months, and love squinting at the sun for our 2 months of sun.
				I previously have worked in fast food/ customer service
				,but I have been enjoying my time learning and challenging my brain doing full stack developement.</p>
			<img className="about-me-image" src={aboutImage} alt="Jacob Dupea" />
			</div>
		</section>
	);
}