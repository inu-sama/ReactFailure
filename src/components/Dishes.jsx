

function Dishes(props) {
    return(
        <a href="/Order" className="relative cursor-pointer mt-10 rounded flex flex-row border-[#00B14F] hover:border bg-[#F7F7F7] p-4 space-x-3">
            <img src={props.dishImg}
                alt="" className="rounded-lg size-28" id="store_img" />
            <div>
                <p className="text-lg line-clamp-2">{props.dishName}</p>
                <p className="font-bold mt-12">{props.dishPrice}</p>
            </div>
        </a>
    )
}

export default Dishes