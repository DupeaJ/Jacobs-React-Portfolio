import Header from '../components/Header';

export default function About() {
	return (
		<section className="container-about-me">
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
			
		</section>
	);
}