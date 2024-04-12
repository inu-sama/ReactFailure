function FoodCategories(props) {
    return(
        <div>
            <img src={props.cateImg}
                alt="" className="rounded-md" />
            <p className="font-bold my-4">{props.cateName}</p>
        </div>
    )
}

export default FoodCategories