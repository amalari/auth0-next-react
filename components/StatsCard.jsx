import PropTypes from "prop-types";

const StatsCard = ({ icon, stat, label, color }) => {
  let borderColor;
  let bgIconColor;
  switch (color) {
    case "purple":
      borderColor = "border-purple-400";
      bgIconColor = "bg-purple-400";
      break;

    case "blue":
      borderColor = "border-blue-400";
      bgIconColor = "bg-blue-400";
      break;

    default:
      borderColor = "border-green-400";
      bgIconColor = "bg-green-400";
      break;
  }
  return (
    <div
      className={`widget w-full p-4 rounded-lg bg-white border-l-4 ${borderColor}`}
    >
      <div className="flex items-center">
        <div
          className={`icon w-14 p-3.5 text-white rounded-full mr-3 ${bgIconColor}`}
        >
          {icon}
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-lg">{stat}</div>
          <div className="text-sm text-gray-400">{label}</div>
        </div>
      </div>
    </div>
  );
};

StatsCard.propTypes = {
  icon: PropTypes.string.isRequired,
  stat: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export { StatsCard };
