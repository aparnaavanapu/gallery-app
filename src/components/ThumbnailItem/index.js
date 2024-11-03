import './index.css'
const ThumbnailItem=(props)=>{

    const {activeId,details,getImgId}=props
    const {id,imageUrl,imageAltText,thumbnailUrl,thumbnailAltText}=details
     
    const handleClick=()=>{
        getImgId(id,imageUrl,imageAltText)
    }

  const btnClassName = activeId === id ? 'btn-updated' : ''

    return(
        <li className="list-item">
            <button type="button" className={`btn ${btnClassName}`}> <img src={thumbnailUrl} alt={thumbnailAltText} onClick={handleClick}/></button>
        </li>
    )

}

export default ThumbnailItem