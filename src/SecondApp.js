// import ControlledCarousel from './components/CarouselCode/CarouselSection';
// import { HoverNavbarDemo } from './components/HoverNavbarComponentFile/HoverNavbar';
import NavbarSection from './components/FrontPage/NavbarAshmithaCode/NavbarTuition.jsx';
import ContentPage from './components/FrontPage/ContentPage/ContentPage.jsx';
import CoursesCard from './components/FrontPage/secondPage/CoursesCard';
import Card from './components/FrontPage/ThirdPage/MainContent';
import SignupCard from './components/FrontPage/SignupCard/SignupCard.jsx'
// import Login from './components/FrontPage/secondPage/Demo';
// import Footer from './components/Footer/Footer';
import './SecondApp.css';
// import Testimonialss from './components/FrontPage/Testimonials/Testimonials.jsx';
import TestimonialSlider from './components/FrontPage/Testimonials/Test.jsx;'

// import OwlCarouselTestimonial from './components/DemoTest/DemoTest.jsx';

function SecondApp() {
    return (
        <>
            <div className='frontPageSec'>
                <NavbarSection/>
                <ContentPage />
                <SignupCard/>
                {/* <CoursesCard/>
                <Card/> */}
                {/* <Login/> */}
                {/* <Footer/> */}
                {/* <Testimonialss/> */}
                <TestimonialSlider/>
            </div>
            {/* <div className='Demo'>
                <ControlledCarousel />
                <div className='MovingCode'>
                    <HoverNavbarDemo />
                </div>
            </div> */}

            {/* <OwlCarouselTestimonial/> */}


        </>
    );
}

export default SecondApp;