

const Companies = ({invmtDetails}) => {
    const {OrganisationName , Requirement } = invmtDetails
  return (
    <div className="lp-container" >
        <div className="name">
        Name:<h2> {OrganisationName}</h2>
      </div>
      <p>Requirement: {Requirement} </p>
      
    </div>
  )
}

export default Companies
