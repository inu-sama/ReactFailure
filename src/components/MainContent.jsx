import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Order from "../pages/Order"
import StoreDetail from "../pages/StoreDetail"
import StoresPage from "../pages/StoresPage"

function MainContent() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Order" element={<Order />} />
            <Route path="/StoreDetail" element={<StoreDetail />} />
            <Route path="/StoresPage" element={<StoresPage />} />
        </Routes>
    )
}

export default MainContent