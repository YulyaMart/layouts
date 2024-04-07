import './ShopCard.css'

export const ShopCard = ({card}) => {
    return(
        <div className='card-content' style={{
            backgroundImage: `url(${card.img})`
        }}>
            <div className='card-header'>
                <h1 className='card-name'>{card.name}</h1>
                <h3 className='card-color'>{card.color}</h3>
            </div>
                     
            <div className='card-footer'>
                <div className='price'>${card.price}</div>
                <button className='button-add'>add to cart</button>
            </div>

        </div>
    )
}
