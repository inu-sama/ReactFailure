function Store(props) {
    return(
        <a href="/StoreDetail" className="relative cursor-pointer mt-10">
            <img src={props.storeImg} alt="" className="rounded-lg" id="store_img" />
            <p className="absolute top-3 py-0.5 px-2 bg-[#00B14F] text-white text-xs font-semibold rounded">Promo</p>
            <p className="font-bold text-xl my-3 line-clamp-2">{props.storeName}</p>
            <p className="text-sm my2 text-[#808080]">{props.storeFood}</p>
            <p className="text-[#808080] my-2">
                <i className="fa-solid fa-star" style={{color: "#F7C942"}}></i>&nbsp;{props.storeRate}&nbsp;&nbsp;
                &nbsp;<i className="fa-regular fa-clock"></i> {props.storeTravelTime} phút • {props.storeDistance} km
            </p>
            <p>
                <i className="fa-solid fa-tags" style={{color: "#00B14F"}}></i> {props.storeDiscount}
            </p>
        </a>
    )
}

export default Store