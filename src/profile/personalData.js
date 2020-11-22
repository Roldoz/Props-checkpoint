import react from "react"
import propTypes from "prop-types"

const PersonalData = (props) => {
    const {
        name,
        bio,
        profession,
        children,
        handleName
    } = props
    return ( 
<div>
<h1 style={{color:"grey"}}>{name}</h1>
<h4 style={{color:"blueviolet"}}>{bio}</h4>
<h2>{profession}</h2>
<div>{children}</div>
<button onClick={() => handleName(name)} >Alert My Name</button>
</div>
     );
}
 
PersonalData.defaultProps={
    name:"Hat Ham",
    bio:"Simple man",
    profession:"designer"
}

PersonalData.propTypes = {
    name: propTypes.string,
    bio: propTypes.string,
    profession: propTypes.string,
    handleName: propTypes.func
}
export default PersonalData ;
