// Task 1: Set up folders and move your files
const express = require('express')
const app = express()

const inventory = [
  {
    category: "Men's Clothing",
    items: [
      {
        name: "Classic T-Shirt",
        cost: 19.99,
        imageUrl: "https://m.media-amazon.com/images/I/51Rm1WGh98L._AC_UY1000_.jpg",
        path: "/item/0",
        quantity: 120,
        colors: ["black", "white", "gray"]
      },
      {
        name: "Denim Jacket",
        cost: 49.99,
        imageUrl: "https://thursdayboots.com/cdn/shop/files/1024x1024-Mens-Jackets-SelvedgeDenimTrucker-Vintage-091423-1_1024x1024.jpg?v=1695056578",
        path: "/item/1",
        quantity: 75,
        colors: ["blue", "black"]
      },
      {
        name: "Running Shoes",
        cost: 89.99,
        imageUrl: "https://i.ebayimg.com/images/g/knUAAOSwA-RjyIAG/s-l1200.jpg",
        path: "/item/2",
        quantity: 50,
        colors: ["red", "black", "white"]
      }
    ]
  },
  {
    category: "Women's Clothing",
    items: [
      {
        name: "Summer Dress",
        cost: 29.99,
        imageUrl: "https://ullajohnson.com/cdn/shop/files/ULLA_JOHNSON_BlaireDress__BLANC_01_MAIN.jpg?v=1714067305&width=960",
        path: "/item/3",
        quantity: 100,
        colors: ["pink", "yellow", "white"]
      },
      {
        name: "Leather Handbag",
        cost: 99.99,
        imageUrl: "https://www.letanneur.us/cdn/shop/files/TEMI1014G05-d_c4c045a7-8a31-4b47-943a-85913ad5c3df.jpg?v=1736851853",
        path: "/item/4",
        quantity: 40,
        colors: ["brown", "black"]
      },
      {
        name: "Running Shoes",
        cost: 89.99,
        imageUrl: "https://fullscopesports.com/wp-content/uploads/2022/07/Topo-Athletic-Women-Ultrafly-4-Comfortable-Lightweight-5MM-Drop-Road-Running-Shoes-Profile.jpg",
        path: "/item/5",
        quantity: 60,
        colors: ["blue", "pink", "white"]
      }
    ]
  }
]

// Task 1: Set the view engine to EJS. 
app.set('view engine', 'ejs');


app.use((req, res, next) => {
  console.log(req.method + " " + req.path)
  next()
})

// Task 1: Set up the static middleware

app.use(express.static(__dirname +"/public"))

// Task 2: Set up the route handler for / to send back the index.html file
app.get("/", (req, res)=>{
  res.send("index.html", data);
})


// Task 3: Set up the route handler for /mens which sends back category.ejs with the men's array
app.get("/mens", (req, res)=>{
  res.render("category.ejs", inventory[0]);
})


// Task 4: Plug in the values in category.ejs to get the page working




// Task 5: Set up the route handler for /item/0 which sends back the first item in product.ejs
app.get("/item/0", (req, res)=>{
  res.render("product.ejs", inventory[0].items[0]);

})


// Task 6: Plug in the values in product.ejs to get the page working


app.listen(3000, () => {
  console.log("Server running")
})