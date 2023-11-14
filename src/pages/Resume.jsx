import Header from '../components/Header';

export default function Resume() {
	return (
		<section className="container resume-section" >
			<div className="container">
				<Header header={'Resume'} />
				<a href="https://docs.google.com/document/d/19LccNFUAVtFbuGwa93WXRE-RdG2PMhsEDjlRWAJtkXY/edit?usp=sharing"
					target="_blank"
					rel="noreferrer"
				>Click here to view resume</a>
			</div>
		</section>
	);
}