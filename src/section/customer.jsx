import { Line } from "../Components/ui/Line";
import { CustomerText, DevlopText } from "../Components/ui/Text";
import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import customerData from "../Json/Customer.json"; // Variable name change for clarity

export const Customer = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}><FaArrowRight /></div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}><FaArrowLeft /></div>
  );

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: nav2,
  };

  const settingsNav = {
    slidesToShow: 5, // 5 રાખવાથી સેન્ટર પ્રોપર દેખાશે
    slidesToScroll: 1,
    asNavFor: nav1,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="customer">
      <div className="customer-area">
        <Line varient="center" />
        <CustomerText variant="subtitle">Why customers love</CustomerText>
        <CustomerText variant="title">working with us</CustomerText>
      </div>

      <Slider {...settingsFor} ref={slider => (sliderRef1 = slider)}>
        {customerData.map((item, index) => (
          <div className="review-box" key={index}>
            <div className="review">
              <DevlopText variant="desc">{item.review}</DevlopText>
            </div>
          </div>
        ))}
      </Slider>

      <Slider {...settingsNav} ref={slider => (sliderRef2 = slider)} className="customer-nav">
        {customerData.map((item, index) => (
          <div className="nav-item" key={index}>
            <img src={item.img} alt={item.name} />
            
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <img key={i} src="img/star.png" alt="star" />
              ))}
            </div>
            <div className="customer-name">
                <CustomerText variant="name">{item.name}</CustomerText>
            </div>
            <div className="customer-job">
                <CustomerText variant="job">{item.job}</CustomerText>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};