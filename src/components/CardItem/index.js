// Write your code here.

import './index.css'

const Card = props => {
  const {cardDetails} = props
  const {id, title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} cardItem`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="imageContainer">
        <img src={imgUrl} className="image" alt={title} />
      </div>
    </li>
  )
}

export default Card
