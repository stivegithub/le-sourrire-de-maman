import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import t1 from '../../src/images/t1.png'
import t2 from '../../src/images/t2.png'



const Temoignage = () => {
  const testimonials = [
    { id: 1, name: 'Johnathan Mbopda', message: 'Super expérience avec ces services!', avatar: t1 },
    { id: 2, name: 'stive Fossi', message: 'Les résultats sont incroyables!', avatar: t2 },
    // Ajoutez plus de témoignages au besoin
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Nos Témoignages</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src={testimonial.avatar}
                  alt={`Avatar de ${testimonial.name}`}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-600 text-base text-center mb-4">{testimonial.message}</p>
                <p className="text-gray-800 font-semibold text-center">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Temoignage;
