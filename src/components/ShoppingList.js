import { plantList } from '../datas/PlantList';
import '../styles/ShoppingList.css';

function ShoppingList() {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )
    console.log(categories);
    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='jh-plant-list'>
                {plantList.map((plant) => (
                    <li key={plant.id} className='jh-plant-item'>
                        {plant.name} {plant.isBestSale ? <span>🔥</span> : null}
                        {plant.isSpecialOffer && <div className='jh-sales'>Soldes</div>}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList