import { FloatingCircles } from "./DecorativeShape"
import { GradientText, SoftwareText } from "./Text"

export const Card = ({ data }) => {
    return (
        <div className={`software-card ${data.layout === "right" ? "reverse" : ""}`}>

            {/* TEXT */}
            <div className="left">
                <SoftwareText variant="title">{data.title}</SoftwareText>

                <SoftwareText variant="desc">{data.desc1}</SoftwareText>
                <SoftwareText variant="desc">{data.desc2}</SoftwareText>

                <SoftwareText variant="gredient" className="border">
                    <GradientText variant="pink">{data.desc3}</GradientText>
                </SoftwareText>

                <div className="ceo">
                    <img src={data.image_ceo} alt="CEO" />

                    <div className="ceo-text">
                        <SoftwareText variant="CEO-name">{data.ceoname}</SoftwareText>
                        <SoftwareText variant="CEO">{data.ceo}</SoftwareText>
                    </div>
                </div>
            </div>

            {/* IMAGE */}
            <div className="right">
                <div className="image-box">
                    
                    {/* ✅ FLOATING DOTS — IMAGE RELATED ONLY */}
                    <FloatingCircles circles={data.circles} />

                    <img src={data.image} alt="Team" />
                </div>
            </div>

        </div>
    )
}
