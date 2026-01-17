import Slider from "react-slick";
import { FloatingCircles } from "../Components/ui/DecorativeShape"
import { Line } from "../Components/ui/Line"
import { DevlopText } from "../Components/ui/Text"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Works = () => {

    const image = ["img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/7.png", "img/8.png"]

    const settings = {
  centerMode: true,
  centerPadding: "0px",
  slidesToShow: 6,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  speed: 500,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};


    return (
        <>
            <div className="work-Warpper">
                <div className="slider-wrapper">
                <div className="works">
                    <Line varient="left"/>
                    <div>
                        <DevlopText variant="subtitle">Meet the People</DevlopText>
                        <DevlopText variant="title">We are Working With</DevlopText>
                    </div>
                </div>
                </div>
            </div>

            <div className="Work-slider">

                <FloatingCircles circles={[
                    {
                        size: "72px",
                        color: "linear-gradient(-130deg, #F76680, #57007B)",
                        top: "-30px",
                        right: "30%",
                    },
                ]} />

                <div className="slider-wrapper">
                    <Slider {...settings}>
                        {
                            image.map((curr, index) => (
                                <div key={index} className="slide">
                                    <img src={curr} />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}