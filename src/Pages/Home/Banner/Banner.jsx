import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
// import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[550px]">
  <div id="slide1" className="carousel-item justify-center relative w-full">
    <img src={img1} className="w-full rounded-xl" />
    <div className="absolute flex items-center h-full left-0  top-0">
     <div className='space-y-7 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-1/2 pl-12 pt-14 h-full '>
     <h2 className='text-5xl font-bold text-white'>Affordable price for car servicing </h2>
      <p className='text-white'>There are many price options , Which kind og do you want?</p>
     <div className='flex gap-2'>
      <button className='btn btn-primary'> Discover more</button>
      <button className='btn btn-outline text-orange-600'> Latest project</button>
     </div>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide5" className="btn btn-circle mr-3">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src={img2} className="w-full rounded-xl" />
    <div className="absolute flex items-center h-full left-0  top-0">
     <div className='space-y-7 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-1/2 pl-12 pt-14 h-full '>
     <h2 className='text-5xl font-bold text-white'>Affordable price for car servicing </h2>
      <p className='text-white'>There are many price options , Which kind og do you want?</p>
     <div className='flex gap-2'>
      <button className='btn btn-primary'> Discover more</button>
      <button className='btn btn-outline text-orange-600'> Latest project</button>
     </div>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-3">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src={img3} className="w-full rounded-xl" />
    <div className="absolute flex items-center h-full left-0  top-0">
     <div className='space-y-7 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-1/2 pl-12 pt-14 h-full '>
     <h2 className='text-5xl font-bold text-white'>Affordable price for car servicing </h2>
      <p className='text-white'>There are many price options , Which kind og do you want?</p>
     <div className='flex gap-2'>
      <button className='btn btn-primary'> Discover more</button>
      <button className='btn btn-outline text-orange-600'> Latest project</button>
     </div>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-3">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <img src={img4} className="w-full rounded-xl" />
    <div className="absolute flex items-center h-full left-0  top-0">
     <div className='space-y-7 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-1/2 pl-12 pt-14 h-full '>
     <h2 className='text-5xl font-bold text-white'>Affordable price for car servicing </h2>
      <p className='text-white'>There are many price options , Which kind og do you want?</p>
     <div className='flex gap-2'>
      <button className='btn btn-primary'> Discover more</button>
      <button className='btn btn-outline text-orange-600'> Latest project</button>
     </div>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-3">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
  <img src={img5} className="w-full rounded-xl" />
    <div className="absolute flex items-center h-full left-0  top-0">
     <div className='space-y-7 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-1/2 pl-12 pt-14 h-full '>
     <h2 className='text-5xl font-bold text-white'>Affordable price for car servicing </h2>
      <p className='text-white'>There are many price options , Which kind og do you want?</p>
     <div className='flex gap-2'>
      <button className='btn btn-primary'> Discover more</button>
      <button className='btn btn-outline text-orange-600'> Latest project</button>
     </div>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-3">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;