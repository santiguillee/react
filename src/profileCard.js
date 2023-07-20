

function ProfileCard(props){
     const {titulo, handle} = props;

    return (
        <div> 
        <img/>

        <h2>{titulo}</h2>
        <p>{handle}</p>
     </div>
    )
}

export default ProfileCard;