/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
const PointsIcon = ({ color }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0006 6C9.43776 6.00027 8.1887 7.05016 8.18809 8.34375L8.1875 8.35C8.18689 9.75625 9.43687 10.3749 11 10.6875C12.5955 11.0065 13.8125 11.9375 13.8125 13.3438C13.8125 14.8125 12.5637 16 11.0006 16M11.0006 6C12.5637 6 13.5 6.9375 13.8125 7.875M11.0006 6L11 5M11.0006 16C9.43784 15.9998 8.49994 15.0624 8.18809 14.125M11.0006 16L11 17M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PointsIcon;
