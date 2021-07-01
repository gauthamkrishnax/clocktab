const Time = () => {
  return (
    <div className="time-module">
      <div className="stack center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="20"
          viewBox="0 0 20 20"
        >
          <g transform="translate(-2 -2)">
            <path
              d="M6.995,12A5.007,5.007,0,1,0,12,6.993,5.013,5.013,0,0,0,6.995,12ZM11,19h2v3H11ZM11,2h2V5H11ZM2,11H5v2H2Zm17,0h3v2H19Z"
              fill="#fff"
            />
            <path
              d="M5.637,19.778,4.223,18.364l2.121-2.121,1.414,1.414Z"
              fill="#fff"
            />
            <path
              d="M16.242,6.344l2.122-2.122,1.414,1.414L17.656,7.758Z"
              fill="#fff"
            />
            <path
              d="M6.344,7.759,4.223,5.637,5.638,4.223l2.12,2.122Z"
              fill="#fff"
            />
            <path
              d="M19.778,18.364l-1.414,1.414-2.122-2.122,1.414-1.414Z"
              fill="#fff"
            />
          </g>
        </svg>
        <p>GOOD MORNING</p>
        <hr />
      </div>
      <div className="heading stack bottom">
        <h1>4:17</h1>
        <p>BST</p>
      </div>
      <div className="stack center">
        <hr />
        <p>LONDON, UK</p>
      </div>
    </div>
  );
};

export default Time;
