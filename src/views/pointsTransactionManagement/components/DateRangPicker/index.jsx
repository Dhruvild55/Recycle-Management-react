/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { iconCalander } from "../../../../assets/images/icons";

const DatePicker = ({
  dateRange = { startDate: new Date(), endDate: new Date() },
  setDateRange,
}) => {
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowPicker(false);
      }
    };

    if (showPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPicker]);

  return (
    <div className="date-picker" ref={pickerRef}>
      <button
        onClick={() => setShowPicker(!showPicker)}
        className="date-picker-button"
      >
        <img src={iconCalander} alt="Calendar" />
        {dateRange?.startDate && dateRange?.endDate
          ? `${format(
              new Date(dateRange.startDate),
              "MMM dd, yyyy"
            )} - ${format(new Date(dateRange.endDate), "MMM dd, yyyy")}`
          : "Select Date"}
      </button>

      {showPicker && (
        <div className="date-picker-popup">
          <DateRange
            onChange={(item) => {
              setDateRange({
                startDate: item.selection.startDate,
                endDate: item.selection.endDate,
              });
              setShowPicker(false);
            }}
            moveRangeOnFirstSelection={false}
            ranges={[
              {
                startDate: dateRange?.startDate || new Date(),
                endDate: dateRange?.endDate || new Date(),
                key: "selection",
              },
            ]}
            showMonthAndYearPickers={false}
            months={1}
            direction="horizontal"
            preventSnapRefocus={true}
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
