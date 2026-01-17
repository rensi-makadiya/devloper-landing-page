
import { Line } from "../Components/ui/Line";
import { AlcalineText, CustomerText, GradientText } from "../Components/ui/Text"
import steps from "../Json/Alcaline.json"
export const Alcaline = () => {
    return (
        <>
            <div className="Alcaline">
                <div className="customer-area">
                    <Line varient="center" />
                    <div>
                        <CustomerText variant="subtitle">
                            How development
                        </CustomerText>
                        <CustomerText variant="title">
                            through Alcaline works
                        </CustomerText>
                    </div>
                </div>

                <div className="timeline-wrapper">
                    <div className="timeline-line" />

                    {steps.map((step, i) => (
                        <div
                            key={step.id}
                            className={`step ${step.position}`}
                            style={{ left: `${i * 15}%` }}
                        >
                            
                            <div className="card">
                                <div className="title">
                                <GradientText variant="pink">#{step.id}</GradientText>
                                <AlcalineText variant="title">{step.title}</AlcalineText>
                                </div>
                                <AlcalineText variant="desc">{step.desc}</AlcalineText>
                            </div>

                            <span className="line" />
                        </div>
                    ))}

                    <div className="trophy">🏆</div>
                </div>

            </div>

        </>
    )
} 