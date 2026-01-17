import { Line } from "../Components/ui/Line";
import { CustomerText, FeatureText, GradientText } from "../Components/ui/Text"
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Features from "../Json/Feature.json";
export const Feature = () => {

    const settings = {
       slidesToShow: 4,
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    centerMode: false,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "40px",
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20px",
                },
            },
        ],
    };
    return (
        <>
            <div className="feature">
                <div className="customer-area">
                    <Line varient="center" />
                    <div>
                        <CustomerText variant="subtitle">
                            Featured
                        </CustomerText>
                        <CustomerText variant="title">
                            Resources
                        </CustomerText>
                    </div>
                </div>


                <div className="slider-wrapper">
                    <Slider {...settings}>
                        {
                            Features.map((curr, index) => (
                                <div key={index} className="box">
                                    <div className="image">
                                        <img src={curr.img}></img>
                                    </div>
                                    <div className="text">
                                        <FeatureText variant="title">{curr.title}</FeatureText>
                                    </div>
                                    <GradientText variant="purple-end">Read More <FaArrowRight /></GradientText>
                                </div>
                            ))
                        }
                    </Slider>
                </div>

            </div>

        </>
    )
} 