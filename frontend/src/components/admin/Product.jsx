import React, { useState, useEffect } from "react";
import axios from "axios";
import  { toast } from "react-toastify";


const CreateProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [sku, setSku] = useState("");
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [images, setImages] = useState([]);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [packaging, setPackaging] = useState("");
  const [weight, setWeight] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await axios.get("/api/getCategories");
        const colorResponse = await axios.get("/api/getColors");
        setCategories(categoryResponse?.data);
        setColors(colorResponse?.data);
      } catch (error) {
        console.error("Error fetching categories or colors", error);
      }
    };
    fetchData();
  }, []);

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("discountPercentage", discountPercentage);
    formData.append("discountPrice", discountPrice);
    formData.append("dimensions", dimensions);
    formData.append("sku", sku);
    formData.append("categoryIds", JSON.stringify(selectedCategories));
    formData.append("colorIds", JSON.stringify(selectedColors));
    formData.append("additionalInfo", additionalInfo);
    formData.append("packaging", packaging);
    formData.append("weight", weight);
    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      const response = await axios.post(
        "/api/products/create",
        formData,
        config
      ); // Note the relative URL

      toast.success("Product created successfully");
      
    } catch (error) {
      console.error("There was an error creating the product!", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Create Product</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Product Description"
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Product Price"
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
        required
      />
      <input
        type="number"
        value={discountPercentage}
        onChange={(e) => setDiscountPercentage(e.target.value)}
        placeholder="Discount Percentage"
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
        required
      />
      <input
        type="number"
        value={discountPrice}
        onChange={(e) => setDiscountPrice(e.target.value)}
        placeholder="Discount Price"
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />
      <input
        type="text"
        value={dimensions}
        onChange={(e) => setDimensions(e.target.value)}
        placeholder="Product Dimensions"
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
        required
      />
      <input
        type="text"
        value={sku}
        onChange={(e) => setSku(e.target.value)}
        placeholder="Product SKU"
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
        required
      />
      <label className="block mb-2 font-semibold">
        Choose Categories (Press Ctrl to select multiple)
      </label>
      <select
        multiple
        value={selectedCategories}
        onChange={(e) =>
          setSelectedCategories(
            [...e.target.selectedOptions].map((option) => option.value)
          )
        }
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      >
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
      <label className="block mb-2 font-semibold">
        Choose Colors (Press Ctrl to select multiple)
      </label>
      <select
        multiple
        value={selectedColors}
        onChange={(e) =>
          setSelectedColors(
            [...e.target.selectedOptions].map((option) => option.value)
          )
        }
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      >
        {colors.map((color) => (
          <option key={color._id} value={color._id}>
            {color.name}
          </option>
        ))}
      </select>

      <input
        type="file"
        onChange={handleImageChange}
        multiple
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />
      <textarea
        value={additionalInfo}
        onChange={(e) => setAdditionalInfo(e.target.value)}
        placeholder="Additional Info"
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />
      <input
        type="text"
        value={packaging}
        onChange={(e) => setPackaging(e.target.value)}
        placeholder="Packaging Details"
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />
      <input
        type="text"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Product Weight"
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md"
      >
        Create Product
      </button>
    </form>
  );
};

export default CreateProduct;
