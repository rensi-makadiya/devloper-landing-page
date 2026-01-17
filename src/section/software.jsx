import { Card } from "../Components/ui/Card";
import { Line } from "../Components/ui/Line"
import { CustomerText } from "../Components/ui/Text"
import software from "../Json/Software.json";
export const Software = () => {
  return (
    <div className="software">

      {/* ---------- HEADING ---------- */}
      <div className="customer-area">
        <Line varient="center" />
        <div>
          <CustomerText variant="subtitle">
            Way of building
          </CustomerText>
          <CustomerText variant="title">
            Great Software
          </CustomerText>
        </div>
      </div>

      {/* ---------- CARDS ---------- */}
      <div className="software-list">
        {software.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>

    </div>
  );
};
