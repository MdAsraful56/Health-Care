import { Hero } from '../../components/modules/Home/Hero';
import Specialities from '../../components/modules/Home/Specialties';
import Steps from '../../components/modules/Home/Steps';
import Testimonials from '../../components/modules/Home/Testimonials';
import TopRatedDoctors from '../../components/modules/Home/TopRatedDoctors';

export default function Home() {
    return (
        <div className=''>
            <Hero />
            <Specialities />
            <TopRatedDoctors />
            <Steps />
            <Testimonials />
        </div>
    );
}
