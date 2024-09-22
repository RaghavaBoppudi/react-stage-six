// You can return an image using jsx

function ProfilePicture(){
  const imageUrl = 'https://placehold.jp/15x15.png';

  // using the handleclick function with e.target.style.visibility = "hidden" to toggle the visibility of the image to hidden while still preserving the space so that the remainder of the elements stay in their places. Using e.target.style.display = "none" would mean the entire remainder of the body would shift upwards.
  const handleClick = (e) => e.target.style.visibility = "hidden"
  

  return (<img onClick={(e) => handleClick(e)} src={imageUrl}/>)
}

export default ProfilePicture