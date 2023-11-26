const LikeIcon: React.FC<{ active?: boolean }> = ({ active = false }) => {
  if (!active) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          d="M16.6111 3C20.1333 3 22.5 6.3525 22.5 9.48C22.5 15.8138 12.6778 21 12.5 21C12.3222 21 2.5 15.8138 2.5 9.48C2.5 6.3525 4.86667 3 8.38889 3C10.4111 3 11.7333 4.02375 12.5 4.92375C13.2667 4.02375 14.5889 3 16.6111 3Z"
          stroke="#9CA3AF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M16.6111 3C20.1333 3 22.5 6.3525 22.5 9.48C22.5 15.8138 12.6778 21 12.5 21C12.3222 21 2.5 15.8138 2.5 9.48C2.5 6.3525 4.86667 3 8.38889 3C10.4111 3 11.7333 4.02375 12.5 4.92375C13.2667 4.02375 14.5889 3 16.6111 3Z"
        fill="#60A5FA"
        stroke="#60A5FA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LikeIcon;
