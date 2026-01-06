const Shimmer = () => {
  return (
    <div className="Restaurent-List">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div className="Shimmer-Card" key={index}></div>
        ))}
    </div>
  );
};

export default Shimmer;
