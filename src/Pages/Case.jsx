import { Line } from "../Components/ui/Line"
import { CaseText, CustomerText, GradientText } from "../Components/ui/Text"
import { FloatingCircles } from "../Components/ui/DecorativeShape"
import Cases from "../Json/Case.json";
import { FaChevronRight } from "react-icons/fa6";
export const Case = () => {
    return (
        <>

            <div className="case">

                <div className="arrow">
                    <div className="arrow1">
                        <img src="img/arrow1.png" />
                    </div>
                    <div className="arrow2">
                        <img src="img/arrow2.png" />
                    </div>
                </div>
                <FloatingCircles
                    circles={[
                        {
                            size: "18px",
                            color: "linear-gradient(-130deg, #F76680, #57007B)",
                            
                            left: "25%",
                        },
                    ]}
                />
                <div className="customer-area">
                    <Line varient="center" />
                    <div>
                        <CustomerText variant="subtitle">
                            Our recent
                        </CustomerText>
                        <CustomerText variant="title">
                            Case studies
                        </CustomerText>
                    </div>
                </div>
                {
                    Cases.map((curr,index) => (
                        <div className="case-main" key={index}>
                            <div className="left">
                                
                                    <img src={curr.image} />
                                
                            </div>
                            <div className="right">
                                <CaseText variant="title">
                                    {curr.title}
                                </CaseText>
                                <CaseText variant="desc">
                                    {curr.desc}
                                </CaseText>
                                <GradientText variant="end">Read more<FaChevronRight className="read-arrow"/></GradientText>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}