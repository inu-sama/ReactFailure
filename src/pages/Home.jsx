// import ListStore from "../data/ListStore"
import storesInfo from "../data/ListStore"
import Category from "../data/Category"
import Store from "../components/Store"

function Home() {
    return(
        <div className="relative mb-36">
            <img src="https://food.grab.com/static/page-home/VN-new-2.jpg" alt="" className=""
                style={{ height: "18rem", width: "100%", objectFit: "none" }} />
            <div className="absolute bg-white top-5 left-36 rounded px-10 py-14 w-1/4 shadow-lg">
                <p className="text-xl font-bold">GoodMorning</p>
                <p className="text-4xl font-bold">Where should we deliver your food today?</p>
                <p className="border-2 border-[#E0E0E0] rounded mt-5 mb-3 py-2 px-5">
                    <i className="fa-solid fa-location-pin bg-[#EE6352] text-white text-xs rounded-full py-1 px-2"></i>
                    <span className="mx-11">828 Sư Vạn Hạnh</span>
                    <i className="fa-solid fa-location-crosshairs text-lg text-[#00B14F]"></i>
                </p>
                <p className="text-white font-bold bg-[#00B14F] py-3 px-5 rounded text-center">Tìm kiếm</p>
            </div>
            <div className="container px-36">
                <hr className="my-16" />
                <p className="text-4xl font-bold mb-6">Ưu đãi GrabFood tại <span className="text-[#00B14F]">Hà nội</span></p>
                <div className="grid grid-cols-4 gap-6">
                    {
                        storesInfo.slice(0, 4).map(store => <Store storeImg={store.img} storeName={store.name} storeFood={store.food}
                            storeRate={store.rate} storeTravelTime={store.travelTime}
                            storeDistance={store.distance} storeDiscount={store.discount} />)
                    }
                </div>
                <a href="/StoresPage">
                    <p className="text-[#808080] text-sm border-2 border-[#C0C0C0] text-center rounded-lg py-3 font-bold
                        hover:border-[#00B14F] hover:text-[#00B14F] my-8 w-auto">
                        See all promotions
                    </p>
                </a>
                <p className="text-4xl font-bold mb-16">There's something for everyone!</p>
                <div className="grid grid-cols-4 gap-6">
                    <Category />
                </div>
                <p className="text-4xl font-bold mb-12 mt-24">Vì sao bạn nên Order trên GrabFood?</p>
                <ul>
                    <li className="list-inside list-none text-sm my-3">
                        <i className="fa-solid fa-check text-xs text-[#00B14F]"></i>&nbsp;&nbsp;
                        <span className="font-bold">Nhanh nhất</span> - GrabFood cung cấp dịch vụ giao đồ ăn nhanh nhất thị trường.
                    </li>
                    <li className="list-inside list-none text-sm my-3">
                        <i className="fa-solid fa-check text-xs text-[#00B14F]"></i>&nbsp;&nbsp;
                        <span className="font-bold">Dễ dàng nhất</span> - Giờ đây, bạn chỉ cần thực hiện vài cú nhấp chuột hoặc chạm nhẹ là đã có thể đặt đồ ăn. Hãy đặt đồ ăn trực tuyến hoặc tải xuống siêu ứng dụng Grab của chúng tôi để có trải nghiệm nhanh hơn và thú vị hơn.
                    </li>
                    <li className="list-inside list-none text-sm my-3">
                        <i className="fa-solid fa-check text-xs text-[#00B14F]"></i>&nbsp;&nbsp;
                        <span className="font-bold">Đáp ứng mọi nhu cầu</span> - Từ món ăn đặc sản địa phương đến các nhà hàng được ưa thích, nhiều lựa chọn đa dạng chắc chắn sẽ luôn làm hài lòng khẩu vị của bạn.
                    </li>
                    <li className="list-inside list-none text-sm my-3">
                        <i className="fa-solid fa-check text-xs text-[#00B14F]"></i>&nbsp;&nbsp;
                        <span className="font-bold">Thanh toán dễ dàng</span> - Giao và nhận đồ ăn thật dễ dàng. Thanh toán bằng GrabPay thậm chí còn dễ dàng hơn nữa.
                    </li>
                    <li className="list-inside list-none text-sm my-3">
                        <i className="fa-solid fa-check text-xs text-[#00B14F]"></i>&nbsp;&nbsp;
                        <span className="font-bold">Nhiều quà tặng hơn</span> - Tích điểm GrabRewards cho mỗi đơn hàng của bạn và sử dụng điểm thưởng để đổi lấy nhiều ưu đãi hơn.
                    </li>
                </ul>
                <p className="text-4xl font-bold mb-12 mt-24">Những câu hỏi thường gặp</p>
            </div>
        </div>
    )
}

export default Home