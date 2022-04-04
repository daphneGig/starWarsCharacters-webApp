import StarWarsLogo from "../assets/images/starWarsLogo.png";

/* When the image of the characters is missing, the application logo is shown in its place */
const starWarsDefaultImg = (onErrorEvent) => onErrorEvent.target.src = StarWarsLogo;

export default starWarsDefaultImg;