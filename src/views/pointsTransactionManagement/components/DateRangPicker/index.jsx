import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { iconCalander } from "../../../../assets/images/icons";

const DatePicker = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="date-picker">
      <button
        onClick={() => setShowPicker(!showPicker)}
        className="date-picker-button"
      >
        <img src={iconCalander} />{" "}
        {format(dateRange[0].startDate, "MMM dd, yyyy")} -{" "}
        {format(dateRange[0].endDate, "MMM dd, yyyy")}
      </button>

      {showPicker && (
        <div className="date-picker-popup">
          <DateRange
            onChange={(item) => setDateRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
            showMonthAndYearPickers={false} // Only show one month
            months={1} // One-month view
            direction="horizontal"
            preventSnapRefocus={true}
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
