const Pair = ({ heading, value }) => {
  return (
    <div className="verticalCenter">
      <p className="pairHeading">{heading} </p>
      <h3>{value}</h3>
    </div>
  );
};

export default Pair;
