import React, { useState } from "react";
import { Heart, ShoppingCart, Copy } from "lucide-react";
import ProductTabs from "../producttab";

function Daintynailbrush() {
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedMaterial, setSelectedMaterial] = useState("Plastic");
    const [selectedpack, setSelectedpack] = useState("1");
    const [selectedColor, setSelectedColor] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [backgroundPosition, setBackgroundPosition] = useState("center");

    const images = [
        "https://nellie-theme.myshopify.com/cdn/shop/products/Product14_2000x.jpg?v=1600248487",
    ];
    const nails = [
        {
            id: "dime",
            name: "Dime",
            about: "Kerum tempus turpls...",
            price: "24,177.26",
            oldprice: "34,662.74",
            image: "https://nellie-theme.myshopify.com/cdn/shop/products/Product3_f4a0fa87-ab4a-4350-8011-cdf7a18cb5a2_600x.jpg?v=1600246226",
            hoverImage: "https://nellie-theme.myshopify.com/cdn/shop/products/Product5_600x.jpg?v=1600246227",
        },
        {
            id: "curated",
            name: "Curated",
            about: "Rures tempus turpls...",
            price: "23,310.69",
            oldprice: "34,662.74",
            image: "https://nellie-theme.myshopify.com/cdn/shop/products/Product2_534f80b2-3de0-412f-8098-469b2257a316_600x.jpg?v=1600242077",
            hoverImage: "https://nellie-theme.myshopify.com/cdn/shop/files/Product4_7f5e0f05-b45d-478c-9478-633bd9151956.jpg?v=1632138633",
        },
        {
            id: "aliyanailfile",
            name: "Aliya Nail File",
            about: "Nam tempus turpls...",
            price: "32,842.94",
            oldprice: "34,662.74",
            image: "https://nellie-theme.myshopify.com/cdn/shop/files/Product15.jpg?v=1632138642",
            hoverImage: "https://nellie-theme.myshopify.com/cdn/shop/files/Product15.jpg?v=1632138642",
        },
    ];

    const [quantity, setQuantity] = useState(1);

    const colors = images.map((img) => ({ image: img }));
    const material = ["Plastic"];
    const pack = ["1"];

    const handleColorClick = (index) => {
        setSelectedColor(index);
        setSelectedImage(index);
    };

    return (
        <div>
            <div className="bg-red-50 py-20">
                <h1 className="text-4xl text-center tracking-wider font-serif">PRODUCT</h1>
                <h1 className="text-md tracking-widest text-center py-5"><a href="#">All </a> /  <a href="#"> Dainty Nail Brush</a></h1>
            </div>
            <div className="max-w-7xl mx-auto pt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <div className="w-full h-3/4 overflow-hidden" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => { setIsHovered(false); setBackgroundPosition("center"); }}
                        onMouseMove={(e) => { const { left, top, width, height } = e.currentTarget.getBoundingClientRect(); const x = ((e.clientX - left) / width) * 100; const y = ((e.clientY - top) / height) * 100; setBackgroundPosition(`${x}% ${y}%`); }}
                        style={{ backgroundImage: `url(${colors[selectedColor].image})`, backgroundSize: isHovered ? "150%" : "100%", backgroundPosition: backgroundPosition, backgroundRepeat: "no-repeat", transition: "background-size 0.3s ease, background-position 0.1s ease", }}>
                        <img src={colors[selectedColor].image} className="opacity-0" />
                    </div>
                    <div className="flex gap-4 pt-5">
                        {colors.map((item, index) => (
                            <img key={index} src={item.image} onClick={() => handleColorClick(index)} className={`w-28 h-28 object-cover cursor-pointer border-2 ${selectedColor === index ? "border-red-500" : "border-gray-200"} hover:border-red-300 transition duration-200`} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-6 py-20">
                    <div>
                        <h1 className="text-3xl font-semibold font-serif">Dainty Nail Brush</h1>
                        <p className="text-gray-500 pt-4">Eurem tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Lorem ipsum dolor sit amet Sonsectetur adipis...</p>
                    </div>
                    <div className="space-y-3">
                        <p className="text-lg font-medium">Price :{"  "}
                            <span>Rs. 33,709.51</span>
                            <span className="line-through text-gray-400 ml-3">Rs. 34,662.74</span>
                        </p>
                        <div className="flex items-center gap-4">
                            <span className="font-medium">Color :</span>
                            <div className="flex gap-2">
                                {colors.map((item, index) => (
                                    <div key={index} className={`w-6 h-6 rounded-full cursor-pointer border-2 ${selectedColor === index ? "border-red-500" : "border-gray-200"}`} onClick={() => handleColorClick(index)} style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center", }}></div>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="font-medium">Material Type :</span>
                            <div className="flex gap-2">
                                {material.map((Material) => (
                                    <button key={Material} onClick={() => setSelectedMaterial(Material)} className={`px-3 py-1 border rounded-md ${selectedMaterial === Material ? "border-red-400 text-red-500" : "border-gray-300"}`}>{Material}</button>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="font-medium">pack :</span>
                            <div className="flex gap-2">
                                {pack.map((pack) => (
                                    <button key={pack} onClick={() => setSelectedpack(pack)} className={`px-3 py-1 border rounded-md ${selectedpack === pack ? "border-red-400 text-red-500" : "border-gray-300"}`}>{pack}</button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="py-3"><span className="font-medium">Vendor :</span> Dazzle Nails</p>
                            <p className="py-3"><span className="font-medium">Type :</span> Nail Brush</p>
                            <p className="py-3">
                                <span className="font-medium">Availability :</span>{" "}
                                <span className="text-red-700">Sorry! This product is currently out of stock.</span>
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="font-medium">Quantity :</span>
                            <div className="flex items-center border rounded">
                                <button className="px-3 py-1" onClick={() => setQuantity((prev) => Math.max(prev - 1, 0))}>-</button>
                                <span className="px-4">{quantity}</span>
                                <button className="px-3 py-1" onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <button className="bg-red-400 text-white px-3 text-sm py-2 duration-500 rounded-full hover:bg-black">Add to Cart</button>
                        <button className="bg-red-300 text-white px-3 text-sm py-2 duration-500 rounded-full hover:bg-black">Buy it now</button>
                        <button className="border border-red-400 text-red-400 px-3 text-sm py-2 duration-500 rounded-full hover:bg-black">Add to Wishlist</button>
                    </div>
                    <div className="flex gap-4 text-gray-600">Share with us :
                        <i className="fab pt-2 duration-500 fa-facebook-f cursor-pointer hover:text-red-400"></i>
                        <i className="fab pt-2 duration-500 fa-twitter cursor-pointer hover:text-red-400"></i>
                        <i className="fab pt-2 duration-500 fa-pinterest cursor-pointer hover:text-red-400"></i>
                        <i className="fas pt-2 duration-500 fa-share-alt cursor-pointer hover:text-red-400"></i>
                    </div>
                </div>
            </div>
            <ProductTabs />
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 py-5">
                    {nails.map((item, index) => (
                        <div key={index}  >
                            <a href={item.id}>
                                <div className="group relative p-4 text-center hover:shadow transition group">
                                    <div className="absolute top-2 p-3 right-2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 z-10">
                                        <button className="bg-white p-3 rounded-full shadow hover:bg-red-400 hover:text-white duration-500">
                                            <Heart size={18} />
                                        </button>
                                        <button className="bg-white p-3 rounded-full shadow hover:bg-red-400 hover:text-white duration-500">
                                            <ShoppingCart size={18} />
                                        </button>
                                        <button className="bg-white p-3 rounded-full shadow hover:bg-red-400 hover:text-white duration-500">
                                            <Copy size={18} />
                                        </button>
                                    </div>
                                    <div className="relative w-56 h-96 mx-auto">
                                        <img src={item.image} className="absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-opacity duration-300 opacity-100 group-hover:opacity-0" />
                                        <img src={item.hoverImage} className="absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                                    </div>
                                    <h2 className="pt-4 font-serif tracking-wider group-hover:text-red-400">{item.name}</h2>
                                    <div className="flex justify-center py-2">
                                        <p className="text-xl font-semibold text-black">Rs. {item.price}</p>
                                        <p className="line-through pt-1 px-2 text-gray-400">Rs. {item.oldprice}</p>
                                    </div>
                                    <p className="text-sm text-gray-400">{item.about}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Daintynailbrush;
