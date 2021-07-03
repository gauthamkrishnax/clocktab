const Pair = ({ heading, value }) => {
  return (
    <div className="verticalCenter">
      <h5>{heading} </h5>
      <h3>{value}</h3>
    </div>
  );
};

export default Pair;
