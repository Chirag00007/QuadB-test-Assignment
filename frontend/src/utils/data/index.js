import sofaImg from "../../assets/images/sofa.png"
import stoolImg from "../../assets/images/stool.png"
import johnImg from "../../assets/images/john.png"
import treeImg from "../../assets/images/tree.png"
import teaImg from "../../assets/images/tea.png"
import waterImg from "../../assets/images/water.png"
import gamlaImg from "../../assets/images/gamla.png"

export const banner = [
    {
        id: 1,
        img: sofaImg,
        title: "SOFA"
    },
    {
        id: 2,
        img: sofaImg,
        title: "SOFA 2"
    },
    {
        id: 3,
        img: sofaImg,
        title: "SOFA 3"
    },
]

export const productsData = [
    {
        name: "Product 1",
        price: 782.34,
        discountPercentage: 25.00,
        discountedPrice: 586.76,
        ratings: 4,
       
    },
    {
        name: "Product 2",
        price: 456.99,
        discountPercentage: 15.00,
        discountedPrice: 388.44,
        ratings: 3,
        image: "productImg2.jpg"
    },
    {
        name: "Product 3",
        price: 300.75,
        discountPercentage: 20.00,
        discountedPrice: 240.60,
        ratings: 5,
        image: "productImg3.jpg"
    },
    {
        name: "Product 4",
        price: 658.20,
        discountPercentage: 10.00,
        discountedPrice: 592.38,
        ratings: 4,
        image: "productImg4.jpg"
    },
    {
        name: "Product 5",
        price: 234.56,
        discountPercentage: 30.00,
        discountedPrice: 164.19,
        ratings: 2,
        image: "productImg5.jpg"
    },
    {
        name: "Product 6",
        price: 512.89,
        discountPercentage: 18.00,
        discountedPrice: 420.57,
        ratings: 1,
        image: "productImg6.jpg"
    },
    {
        name: "Product 7",
        price: 679.45,
        discountPercentage: 12.00,
        discountedPrice: 598.92,
        ratings: 5,
        image: "productImg7.jpg"
    },
    {
        name: "Product 8",
        price: 829.34,
        discountPercentage: 25.00,
        discountedPrice: 622.00,
        ratings: 4,
        image: "productImg8.jpg"
    },
    {
        name: "Product 9",
        price: 391.23,
        discountPercentage: 20.00,
        discountedPrice: 313.18,
        ratings: 3,
        image: "productImg9.jpg"
    },
    {
        name: "Product 10",
        price: 467.80,
        discountPercentage: 15.00,
        discountedPrice: 397.63,
        ratings: 2,
        image: "productImg10.jpg"
    },
    {
        name: "Product 11",
        price: 256.67,
        discountPercentage: 30.00,
        discountedPrice: 179.67,
        ratings: 5,
        image: "productImg11.jpg"
    },
    {
        name: "Product 12",
        price: 723.50,
        discountPercentage: 22.00,
        discountedPrice: 564.33,
        ratings: 4,
        image: "productImg12.jpg"
    },
    {
        name: "Product 13",
        price: 499.99,
        discountPercentage: 10.00,
        discountedPrice: 449.99,
        ratings: 3,
        image: "productImg13.jpg"
    },
    {
        name: "Product 14",
        price: 620.49,
        discountPercentage: 18.00,
        discountedPrice: 508.00,
        ratings: 1,
        image: "productImg14.jpg"
    },
    {
        name: "Product 15",
        price: 378.88,
        discountPercentage: 25.00,
        discountedPrice: 284.16,
        ratings: 4,
        image: "productImg15.jpg"
    },
    {
        name: "Product 16",
        price: 288.95,
        discountPercentage: 20.00,
        discountedPrice: 231.16,
        ratings: 5,
        image: "productImg16.jpg"
    },
    {
        name: "Product 17",
        price: 454.23,
        discountPercentage: 12.00,
        discountedPrice: 399.72,
        ratings: 3,
        image: "productImg17.jpg"
    },
    {
        name: "Product 18",
        price: 620.88,
        discountPercentage: 30.00,
        discountedPrice: 434.62,
        ratings: 2,
        image: "productImg18.jpg"
    },
    {
        name: "Product 19",
        price: 799.45,
        discountPercentage: 25.00,
        discountedPrice: 599.59,
        ratings: 4,
        image: "productImg19.jpg"
    },
    {
        name: "Product 20",
        price: 346.78,
        discountPercentage: 20.00,
        discountedPrice: 277.42,
        ratings: 5,
        image: "productImg20.jpg"
    }
];

export const infoGraphics = [
    {
        id: 1,
        name: 'Free Shipping',
        desc: "Order Aboce $100",
        icon: "gift-outline"
    },
    {
        id: 2,
        name: 'Money Back',
        desc: "30 days guarantee",
        icon: "wallet-outline"
    },
    {
        id: 3,
        name: 'Secured Payement',
        desc: "Secured by stripe",
        icon: "lock-closed-outline"
    },
    {
        id: 4,
        name: '24/7 Support',
        desc: "Phone and Email Support",
        icon: "call-outline"
    },
]

export const singleProduct = {
    img: [
        stoolImg,
        johnImg,
        treeImg,
        teaImg,
        waterImg,
        gamlaImg
    ],
    name: "Tray Table",
    desc: "Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.",
    price: 200.00,
    mrp: 400.00,
    measurement: `17 1/2x20 5/8 "`,
    color: "Black",
    category: "Living Room, Bedroom",
    sku: 117,
    details: "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    width: `20 " Height: 1 ½ " Length: 21 ½ "`,
    weight: `7 lb 8 oz`,
    package: 1,
    disPercentage: 50,
}