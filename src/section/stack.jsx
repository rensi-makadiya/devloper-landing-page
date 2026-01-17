import { Line } from "../Components/ui/Line";
import { CustomerText, GradientText } from "../Components/ui/Text"
import stack from "../Json/Stack.json";
import { useState } from "react";
export const Stack = () => {

    const [activeTab, setActiveTab] = useState("Backend");

    return (
        <>

            <div className="stack">
                <div className="customer-area">
                    <Line varient="center" />
                    <div>
                        <CustomerText variant="subtitle">
                            Our
                        </CustomerText>
                        <CustomerText variant="title">
                            Tech Stack
                        </CustomerText>
                    </div>
                </div>
                <div className="tabs">
                    {Object.keys(stack).map((curr, index) => (
                        <button
                            key={index}
                            className={activeTab === curr ? "active" : ""}
                            onClick={() => setActiveTab(curr)}
                        >
                           <GradientText variant="pink"> {curr}</GradientText> 
                        </button>
                    ))}
                </div>

              <div key={activeTab} className="tech-grid">
                    {stack[activeTab].map((curr, index) => (
                        <div className="tech-item" key={index}>
                            <img src={curr.icon} alt={curr.name} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}