import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
    // console.log(props);
    const { data, showItems, setShowIndex } = props

    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div>
            <div className="w-1/2 mx-auto my-4 bg-gray-100 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    );
}

export default RestaurantCategory;