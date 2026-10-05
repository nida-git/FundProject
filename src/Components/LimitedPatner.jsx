const LimitedPatner = ({ lpDetails }) => {
  let { name, commitment, invidualPercentage, capitalCall, commitmentLeft } =
    lpDetails;

  return (
    <div className="lp-card-container ">
    
      <div className="name">
        Name: <h2> {" " + name}</h2>
      </div>

      <p>Commitment: {commitment} </p>
      <p>OwnerShip: {invidualPercentage} </p>
      <p>CapitalCall: {capitalCall} </p>
    </div>
  );
};

export default LimitedPatner;
