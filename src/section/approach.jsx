import { Line } from "../Components/ui/Line";
import { ApproachText, CustomerText } from "../Components/ui/Text";
import approach from "../Json/Approach.json";

export const Approach = () => {
  return (
    <div className="approach">
      <div className="customer-area">
        <Line varient="center" />
        <div>
          <CustomerText variant="subtitle">Our design and</CustomerText>
          <CustomerText variant="title">development approach</CustomerText>
        </div>
      </div>

      <div className="approach-grid">
        <div className="grid">
          {approach.map((curr, index) => (
            <div key={index} className={`grid-con animate-item pos-${index}`}>
              <div className="left" style={{ background: curr.color }}>
                <img src={curr.img} alt={curr.title} />
              </div>
              <div className="right">
                <ApproachText variant="title">{curr.title}</ApproachText>
                <ApproachText variant="desc">{curr.desc}</ApproachText>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
