const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.set("views", "./views")

app.use(express.static('./public'))

const foods = [
    {
        name: "Phở gà",
        img: "https://cdn.tgdd.vn/2021/09/CookProduct/1200(3)-1200x676-2.jpg",
        price: "50.000 VNĐ",
        sale: "sale 10%"
    },
    {
        name: "Phở bò",
        img: "https://cdn.tgdd.vn/Files/2018/12/07/1136284/cach-nau-pho-bo-tai-nha-bang-xuong-heo-cho-nguoi-ban-ron-202201200943274821.jpg",
        price: "60.000 VNĐ",
        sale: "sale 10%"
    },
    {
        name: "Phở bò Huế",
        img: "https://i.ytimg.com/vi/ga0am9KmMZI/sddefault.jpg",
        price: "50.000 VNĐ",
        sale: "sale 10%"
    },
    
]

app.get("/home", (req, res, next)=>{
    return res.render("home/index.ejs", {
        foods: foods
    })
})

app.listen(5000, ()=>{
    console.log('Server run at port 5000');
})
//MVC: Model - View - Controller