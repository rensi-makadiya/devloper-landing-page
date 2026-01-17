

export const FloatingCircles = ({ circles = [] }) => {
  return (
    <>
      {circles.map((circle, index) => (
        <span
          key={index}
          className="floating-circle"
          style={{
            width: circle.size,
            height: circle.size,
            background: circle.color,
            top: circle.top,
            bottom: circle.bottom,
            left: circle.left,
            right: circle.right,
            
          }}
        ></span>
      ))}
    </>
  );
};


