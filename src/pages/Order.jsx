

function Order() {
    var amount = 1
    return(
        <div>
            <div className="container px-16 md:px-96">
                <p className="font-bold text-2xl md:text-4xl mt-7">Bước cuối cùng - Thanh toán</p>
                <p className="font-bold text-md md:text-xl my-5">Quán Cơm Rang 1989 - Cơm Rang Văn Phòng</p>
            </div>
            <div className="container bg-[#F7F7F7] px-16 md:px-96 py-5 space-y-5">
                <div className="bg-white rounded px-7 py-3 divide-y space-y-3">
                    <p className="font-bold text-xl">Giao đến</p>
                    <div className="py-5">
                        <p className="text-sm text-[#808080]">Delivery arrival time</p>
                        <p>35 min (2.1 km away)</p>
                    </div>
                    <div className="flex flex-row">
                        <div className="md:basis-2/5">

                        </div>
                        <div className="basis-full md:basis-3/5 space-y-5 py-5">
                            <div>
                                <p className="text-sm text-[#808080] mb-2">Địa chỉ</p>
                                <input className="border border-[#C0C0C0] rounded w-full px-5 py-2" type="text" disabled placeholder="Hà Nội" />
                            </div>
                            <div>
                                <p className="text-sm text-[#808080] mb-2">Chi tiết địa chỉ</p>
                                <input className="border border-[#C0C0C0] rounded w-full px-5 py-2" type="text" placeholder="Vd: tầng / tên tòa nhà" />
                            </div>
                            <div>
                                <p className="text-sm text-[#808080] mb-2">Ghi chú cho tài xế</p>
                                <input className="border border-[#C0C0C0] rounded w-full px-5 py-2" type="text" placeholder="Hãy gặp tôi tại sảnh" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded px-7 py-3 divide-y space-y-3">
                    <p className="font-bold text-xl">Tóm tắt đơn hàng</p>
                    <div className="flex flex-row py-5">
                        <div className="basis-2/6 md:basis-1/6 content-center text-xs md:text-lg">
                            <i className="fa-solid fa-minus text-[#00A5CF] cursor-pointer" onClick={() => {if (amount > 1) {amount--}}}></i>
                            <span id="amount" className="mx-3">{amount}</span>
                            <i className="fa-solid fa-plus text-[#00A5CF] cursor-pointer" onClick={() => {amount++}}></i>
                        </div>
                        <div className="basis-2/6 md:basis-1/6 content-center">
                            <img src="https://food-cms.grab.com/compressed_webp/items/VNITE2022121508003350584/photo/menueditor_item_193a7f5a2ef64314ae6c04b8009a9382_1671091204310774447.webp"
                                alt="" className="size-12 rounded" />
                        </div>
                        <div className="basis-2/6 md:basis-3/6 text-xs md:text-lg content-center">
                            <p>Cơm rang hải sản + Coca</p>
                        </div>
                        <div className="collapse basis-0 md:basis-1/6 md:visible content-center text-right">
                            <p>62.000</p>
                        </div>
                    </div>
                    <div className="flex flex-row py-5 text-xs md:text-lg">
                        <div className="basis-5/6">
                            <p>Tổng tạm tính</p>
                            <p>
                                Phí áp dụng
                                <i className="fa-solid fa-circle-info text-[#808080] ml-2 text-sm"></i>
                            </p>
                            <p className="text-[#00B14F]">Giảm 3.000₫ phí giao hàng khi đặt đơn tối thiểu 60.000₫</p>
                        </div>
                        <div className="basis-1/6 text-right">
                            <p>62.000₫</p>
                            <p>19.000₫</p>
                            <p className="text-[#00B14F]">-3.000₫</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded px-7 py-3 divide-y space-y-3">
                    <p className="font-bold text-xl">Chi tiết thanh toán</p>
                    <div className="py-5">
                        <p className="text-sm text-[#808080] mb-2">Phương thức thanh toán</p>
                        <select name="" id="" className="border border-[#C0C0C0] rounded w-full px-5 py-2 text-[#808080]">
                            <option value="">
                                💵
                                Tiền mặt
                            </option>
                            <option value="">
                                Phương thức chưa hỗ trợ
                            </option>
                        </select>
                        <p className="text-sm text-[#808080] mb-2 mt-5">Phương thức thanh toán</p>
                        <select name="" id="" className="border border-[#C0C0C0] rounded w-full px-5 py-2 text-[#808080]">
                            <option value="">Personal</option>
                        </select>
                    </div>
                </div>
                <div className="bg-white rounded px-3 md:px-7 py-3 divide-y space-y-3">
                    <p className="font-bold text-xl">Khuyến mãi</p>
                    <div className="flex flex-row py-5">
                        <div className="basis-4/6 pr-1 md:pr-10 space-y-3">
                            <input className="border border-[#C0C0C0] text-xs md:text-lg hover:border-[#00B14F] rounded-lg w-full px-5 py-3" type="text" placeholder="Nhập mã khuyến mãi" />
                            <div className="border border-[#C0C0C0] hover:border-[#00B14F] rounded-lg px-5 py-3">
                                <p className="text-lg font-bold">ZaloPay - Giảm 20%</p>
                                <p className="text-md mt-2">Promo Code: <span className="text-[#00B14F] font-bold">ZALOPAYGF1</span></p>
                                <div className="flex flex-row">
                                    <div className="basis-4/6 content-center">
                                        <p className="text-sm text-[#808080]">Valid 2024-04-05 to 2024-04-30</p>
                                    </div>
                                    <div className="basis-2/6 gird content-center">
                                        <p className="border border-[#00B14F] hover:bg-[#00B14F] hover:text-white text-[#00B14F] cursor-pointer text-center font-bold rounded-lg py-3">APPLY</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="basis-2/6 px-5 text-xs md:text-lg">
                            <p className="bg-[#00B14F] hover:bg-[#F7F7F7] text-white hover:text-[#00B14F] cursor-pointer text-center font-bold rounded-lg py-3">Áp dụng</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-16 md:px-96 py-5 sticky bottom-0 bg-white">
                <div className="flex flex-row">
                    <div className="basis-3/5">
                        <p className="text-xl">Tổng cộng</p>
                        <p className="text-xl font-bold">78.000₫</p>
                    </div>
                    <div className="basis-2/5">
                        <p className="font-bold text-white bg-[#00B14F] p-3 text-center rounded-md cursor-pointer">Đặt đơn</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order