import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
         <div className='lg:w-1/2 relative'>
         <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
         <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
         </div>
          <div className='lg:w-1/2 space-y-4 p-3'>
            <h3 className='text-3xl text-orange-500 font-semibold'>About us</h3>
            <h1 className="text-5xl font-bold">We are qualified and experienced in this field</h1>
            <p className="py-6">AutoFixPro offers a wide range of repair and maintenance services to ensure your vehicle is in optimal condition. Our experienced technicians can handle everything from minor tune-ups to major engine overhauls.</p>
            <p className="py-6"> you will never encounter hidden fees or unexpected costs. We provide transparent pricing and upfront estimates for all services, ensuring you know what to expect.</p>
            <button className="btn btn-primary">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;