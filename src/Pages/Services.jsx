import Slider from "react-slick";
import { SliderText, Text } from "../Components/ui/Text";
import ServiceApi from "../Json/Services.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Services = () => {
  const settings = {
  dots: true,
  arrows: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  centerMode: true,
  centerPadding: "60px",

  appendDots: (dots) => (
    <div className="custom-dots-container">
      <ul>{dots}</ul>
    </div>
  ),

  customPaging: () => <div className="custom-dot-item" />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false,   // ⭐ IMPORTANT
        centerPadding: "0px",
      },
    },
  ],
};


  return (
    <section className="services">
      <Text variant="title">Services we offer</Text>

      <div className="slider-wrapper">
        <Slider {...settings}>
          {ServiceApi.map((curr, index) => (
            <div className="slide-card" key={index}>
              <div className="slide-inner">
                <div className="slider-img">
                  <div className="img-border">
                    <img src="img/code.png" alt={curr.title} />
                  </div>
                </div>
                <SliderText variant="title">{curr.title}</SliderText>
                <SliderText variant="desc">{curr.description}</SliderText>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
