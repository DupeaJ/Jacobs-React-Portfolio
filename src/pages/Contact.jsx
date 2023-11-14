import Header from '../components/Header';

export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
    };

    return (
        <section className="container contact-form">
            <div className="container">
                <Header header={'Contact Me'} />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">name:</label>
                        <input type="name" id="name" name="name" required placeholder="Enter your Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Comment:</label>
                        <textarea id="comment" name="comment" required placeholder="Write your comment"></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}
