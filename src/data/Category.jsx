import FoodCategories from "../components/FoodCategories"

function Category() {
    const foodCategories = [{img: "https://food-cms.grab.com/compressed_webp/cuisine/69/icons/FriedChicken_4251b520449049528751b74b4d05ffa1_1547819155005255038.webp",
                                name: "Gà rán"},
                            {img: "https://food-cms.grab.com/compressed_webp/collections/68/icons/upload-photo-icon_3d16a293ac324b7e9aed94d783a57864_1548575050539497623.webp",
                                name: "Weekend Treats"},
                            {img: "https://food-cms.grab.com/compressed_webp/cuisine/135/icons/Pizza_32aed38d4c1d4dbcb2fe711f0aeb6e15_1547819221409327403.webp",
                                name: "Pizza"},
                            {img: "https://food-cms.grab.com/compressed_webp/cuisine/50/icons/fcaf978fac204ecaab2c5fa0f7e6e4ce_1562559545238776223.webp",
                                name: "Cơm tấm"},
                            {img: "https://food-cms.grab.com/compressed_webp/cuisine/83/icons/cedda467431a49bd88fb1fdf40a4c4a0_1562559607379193479.webp",
                                name: "Hủ tiếu"},
                            {img: "https://food-cms.grab.com/compressed_webp/cuisine/130/icons/upload-photo-icon_5175b157c8114e51898b264e1173fafb_1548303610212783174.webp",
                                name: "Mì Ý"},
                            {img: "https://food-cms.grab.com/compressed_webp/cuisine/43/icons/Chicken_d4725da9243a46e79740d2e70fd28314_1547819095170793371.webp",
                                name: "Gà"},
                            {img: "https://food-cms.grab.com/compressed_webp/cuisine/40/icons/upload-photo-icon_f71f7805786348b694d2a9a886b85cee_1549034196325788582.webp",
                                name: "Cháo"},
                            {img: "https://food-cms.grab.com/compressed_webp/cuisine/147/icons/Salad_1641af887e2b4092a81f8e27ccdac0dc_1547819244890107512.webp",
                                name: "Rau trộn"},
                            {img: "https://food-cms.grab.com/compressed_webp/collections/36/icons/upload-photo-icon_e816de4ec50a4e7a95fc6cc52e3072cd_1548575711684762474.webp",
                                name: "Hiso Party"},
                            {img: "https://food-cms.grab.com/compressed_webp/cuisine/209/icons/upload-photo-icon_65f41b40038b4b3ea672402e609d0e96_1548908793958778523.webp",
                                name: "Thịt"},
                            {img: "https://food-cms.grab.com/compressed_webp/cuisine/144/icons/Rice_e191965ccd6848a3862e6a695d05983f_1547819238893335910.webp",
                                name: "Cơm"},
                            {img: "https://food-cms.grab.com/compressed_webp/cuisine/62/icons/FastFood_4710e425c3d24db2aa4280aa207a22d3_1547819143037208832.webp",
                                name: "Gà rán - Burger"},
                            {img: "https://food-cms.grab.com/compressed_webp/cuisine/29/icons/a928e8df0b8b4dfc856ac176c2cf6ecb_1662695866769706068.webp",
                                name: "Trà sữa"},
                            {img: "https://food-cms.grab.com/compressed_webp/cuisine/16/icons/upload-photo-icon_3408dc71ae96497c82a6f5fb35763840_1549033935837593141.webp",
                                name: "Bánh mì"},
                            {img: "https://food-cms.grab.com/compressed_webp/collections/38/icons/upload-photo-icon_11130fe9f9154c09b507516072864902_1548777275151458249.webp",
                                name: "Đồ uống lạnh"},
                            {img: "https://food-cms.grab.com/compressed_webp/cuisine/157/icons/eb8ea703d1f84b218b79b0f860e99425_1562559054203677203.webp",
                                name: "Ăn vặt"}]
                            
    return(
        foodCategories.map(category => <FoodCategories cateImg={category.img} cateName={category.name} />)
    )
}

export default Category