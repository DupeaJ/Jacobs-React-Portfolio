
import { DiGithubBadge } from "react-icons/di";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
	return (
		<footer className="flex-container">
			<div className="foo-container">
				<a className="react-icons"
					href="https://github.com/DupeaJ"
					target='_blank'
					rel='noreferrer'>
					<DiGithubBadge />
				</a>
				<a className="react-icons"
					href="https://linkedin.com/in/jacob-dupea"
					target='_blank'
					rel='noreferrer'>
					
						<CiLinkedin />
					
				</a>
				<a className="x-image"
					href="https://twitter.com/JacobDupea"
					target='_blank'
					rel='noreferrer'>
					
					<FaXTwitter />
					
				</a>
				
                    
                
			</div>
		</footer>
	);
}