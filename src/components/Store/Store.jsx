import { useState } from "react";
import { IconSwitch } from "../IconSwitch/IconSwitch"
import { ListView } from "../ListView/ListView";
import { CardsView } from "../CardsView/CardsView";
import './Store.css'

export const Store = ({products})  => {
    const [activeIcon, setActiveIcon] = useState(false)

    const onSwitch = () => {
        setActiveIcon(!activeIcon)
    }

    return(
        <div className="main-content">
            <IconSwitch icon = {!activeIcon ? 'view_module' : 'view_list' } onSwitch = {onSwitch} />
            <div className="container">
                {!activeIcon ? <ListView items = {products}/> :<CardsView cards = {products}/> }
            </div>
        </div>
    )
}
