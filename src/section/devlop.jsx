import { FloatingCircles } from "../Components/ui/DecorativeShape"
import { Line } from "../Components/ui/Line";
import { DevlopText, GradientText } from "../Components/ui/Text"
import { FaArrowRight } from "react-icons/fa";
import { IoPlay } from "react-icons/io5";
export const Devlop = () => {
    return (
        <>
            <div className="devlop">
                <FloatingCircles
                    circles={[
                        {
                            size: "72px",
                            color: "linear-gradient(-130deg, #F76680, #57007B)",
                            top: "-30px",
                            left: "10%",
                        },
                    ]}
                />
                <div className="main">
                    <div className="left">
                        <Line varient="left" />
                        <div>
                            <DevlopText variant="subtitle">Leading companies trust us </DevlopText>
                            <DevlopText variant="title"> to develop software</DevlopText>
                        </div>
                        <DevlopText variant="desc">We <GradientText variant="pink">add development capacity</GradientText> to tech teams. Our value isn’t limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.</DevlopText>
                        <GradientText variant="purple">See more Informations <FaArrowRight /></GradientText>
                    </div>
                    <div className="video-card">
                        <img src="img/service.jpg"></img>
                        <div className="play-btn">
                            <IoPlay />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}