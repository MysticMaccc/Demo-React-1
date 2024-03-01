import './CoreConcept.css';

function CoreConcept(
    // props - instead of "props", we can destructure
    { image, title, description } /* destructuring props */
) {
    return (
        <li>
            {/* {props.image} */}
            <img src={image} alt={image} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}

export default CoreConcept;