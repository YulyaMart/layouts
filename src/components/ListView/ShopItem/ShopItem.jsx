import './ShopItem.css';

export const ShopItem = ({item}) => {
    return(
        <div className='list-container'>
            <img className='item-img' src={item.img} alt = 'sneakers'></img>
            <div className='list-content'>
                <div className='card-name'>
                    {item.name}
                </div>
                <div className='card-color'>{item.color}</div>
                <div className='price'>${item.price}</div>
                <button className='button-add'>add to cart</button>
            </div>
            
        </div>
    )
}
