function Header() {
    return(
        <div className="flex flex-row container items-center py-5 px-36 sticky top-0 bg-white shadow-lg" style={{zIndex: "99"}}>
            <a href="/" className="w-1/5">
                <img src="https://vectorseek.com/wp-content/uploads/2021/02/GrabFood-Logo-Vector.png"
                    alt="" style={{ width: "auto", height: "1.5rem" }} />
            </a>
            <div className="basis-full"></div>
            <nav className="flex flex-row-reverse basis-2/4">
                <a href="" className="text-xs border-2 border-[#E0E0E0] p-3 rounded">
                    VI&nbsp;
                    <i class="fa-solid fa-angle-down"></i>
                </a>
                <a href="" className="text-xs border-2 border-[#E0E0E0] mx-3 p-3 rounded">Đăng ký/Đăng nhập</a>
                <a href="" className="text-xs border-2 border-[#E0E0E0] p-3 rounded">
                    <i class="fa-solid fa-bag-shopping"></i>
                </a>
            </nav>
        </div>
    )
}

export default Header