import { Button } from "../Components/ui/Button"
import { GradientText, Heading, Text } from "../Components/ui/Text";
import { FloatingCircles } from "../Components/ui/DecorativeShape";
import "../Css/Hero.css"

export const Hero = () => {
    return (
        <div className="hero">

            <div className="content">
                <div className="con">
                    <div className="hero-heading">

                        <Heading size="small">
                            Great <GradientText variant="blue">Product</GradientText> is
                        </Heading>

                        <Heading size="large">
                            built by great <GradientText variant="blue">teams</GradientText>
                        </Heading>
                    </div>
                    <Text variant="desc">
                        We help build and manage a team of world-class developers to bring your vision to life
                    </Text>
                    <Button variant="primary">Let's get started!</Button>
                </div>
            </div>
            <div className="hero-img">
                <img src="img/hero.png" alt="Hero" />
            </div>
            <FloatingCircles
                circles={[
                    {
                        size: "72px",
                        color: "linear-gradient(-130deg, #F76680, #57007B)",
                        bottom: "-30px",
                        left: "40%",
                    },
                ]}
            />



        </div>
    )
}