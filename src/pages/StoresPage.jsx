import storesInfo from "../data/ListStore"
import Store from "../components/Store"

function StoresPage() {
    return(
        <div className="container px-36 mb-36">
            <div className="relative flex content-center">
                <input className="bg-[#F5F5F5] mt-5 py-2 px-16 rounded-full w-full" placeholder="Tìm món hoặc quán ăn" />
                <i className="fa-solid fa-magnifying-glass absolute text-[#808080] top-8 left-6"></i>
            </div>
            <p className="mt-7">
                <a href="/" className="text-[#00A5CF]">Trang chủ</a>
                <i className="fa-solid fa-chevron-right text-[#808080] mx-2"></i>
                <a>Nhà hàng</a>
            </p>
            <p className="text-4xl font-bold mb-5 mt-2">Ưu đãi GrabFood tại <span className="text-[#00B14F]">Hà nội</span></p>
            <div className="grid grid-cols-4 gap-6">
                {
                    storesInfo.map(store => <Store storeImg={store.img} storeName={store.name} storeFood={store.food}
                        storeRate={store.rate} storeTravelTime={store.travelTime}
                        storeDistance={store.distance} storeDiscount={store.discount} />)
                }
            </div>
        </div>
    )
}

export default StoresPage