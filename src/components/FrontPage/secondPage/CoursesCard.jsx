import './CoursesCard.css';
import Img1 from './learn.jpg';
export default function CoursesCard() {
    return (
        <>
            <section className="CoursesCard">
                <div className="CardSec">
                    <div className="Card-image">
                        <img src={Img1} />
                    </div>
                    <div className="Card-content">
                        <h2>Tuition World</h2>
                        <h3>A Smart Way Of Learning</h3>
                        <p>
                            We are committed to taking education to every single door, making it a superb blend of knowledge and
                            job-specific. Our mission is to create ethical and intellectual personnel through qualitative education.
                        </p>
                        <button>Join your hand today with us</button>
                    </div>
                </div>
            </section>
        </>
    )
}