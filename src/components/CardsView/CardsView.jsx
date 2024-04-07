import {ShopCard} from "./ShopCard/ShopCard"
import "./CardsView.css"

export const CardsView = ({cards}) => {
    console.log(cards)
    return(
        <div className="cards-block">
            {cards.map(item => {
                console.log(item)
                return(
                    <ShopCard card = {item}/>
                )
                
            })}
        </div>
    )
}
