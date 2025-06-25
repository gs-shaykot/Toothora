import Navbar from '../component/Navbar'
import Hero from '../pages/Home/Hero';
import Services from '../pages/Home/Services';
import About from '../pages/Home/About';
import Review from '../pages/Home/Review';
import Team from '../pages/Home/Team';
import WhyToChoose from '../pages/Home/WhyToChoose';
import Blogs from '../pages/Home/Blogs';
import Footer from '../component/Footer';

const HomeLayout = () => {
    return (
        <div className='font-roboto'>
            <Navbar />
            <Hero />
            <Services />
            <About />
            <Review />
            <Team />
            <WhyToChoose />
            <Blogs />
            <Footer />
        </div>
    );
};

export default HomeLayout;