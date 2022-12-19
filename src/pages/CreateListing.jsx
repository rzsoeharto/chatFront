import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function CreateListing({ xcsrf }) {
  const navigate = useNavigate();
  const { userEmail, userID, authToken } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    productName: "",
    clotheType: "",
    price: "",
    size: "",
    condition: "",
    style: "",
    colour: "",
  });
  const { productName, clotheType, price, size, condition, style, colour } =
    formData;

  async function testRequest(method) {
    const response = await fetch(`http://localhost:8000/api/create-listing/`, {
      method: method,
      headers:
        method === "POST"
          ? {
              "Content-Type": "application/json",
              "X-CSRFToken": xcsrf,
              Authorization: `Bearer ${authToken}`,
            }
          : {},
      //   credentials: "include",
      body: JSON.stringify({
        // userID: "John",
        productName: productName,
        clotheType: clotheType,
        price: price,
        size: size,
        condition: condition,
        style: style,
        colour: colour,
      }),
    });
    const data = await response.json();
    console.log(response.body);
    return data.result;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    testRequest("POST");
  };

  const onMutate = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <div className="flex w-full h-full place-content-center">
        <div className="bg-white w-full p-6 w-[450px] h-full">
          <form
            className="flex flex-col sm:place-content-center"
            onSubmit={onSubmit}
          >
            <label htmlFor="productName" className="text-black">
              Product Name
            </label>
            <input
              onChange={onMutate}
              type="text"
              id="productName"
              placeholder="Nike Jumper"
              className="bg-white p-3 border-2 text-black"
            />

            <label htmlFor="clotheType" className="text-black mt-3">
              Type of Clothing
            </label>
            <input
              onChange={onMutate}
              type="text"
              id="clotheType"
              placeholder="Pants"
              className="bg-white p-3 border-2 text-black"
            />

            <label htmlFor="price" className="text-black mt-3">
              <p>Price in Rp</p>
            </label>
            <input
              onChange={onMutate}
              type="text"
              id="price"
              placeholder="200,000"
              className="bg-white p-3 border-2 text-black"
            />

            <label htmlFor="size" className="text-black mt-3">
              Size
            </label>
            <select
              id="size"
              className="bg-white p-3 border-2 text-black"
              value={size}
              onChange={onMutate}
            >
              <option value="">Choose Size</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>

            <label htmlFor="condition" className="text-black mt-3">
              Condition
            </label>
            <select
              id="condition"
              className="bg-white p-3 border-2 text-black"
              value={condition}
              onChange={onMutate}
            >
              <option value="" disabled>
                Choose Condition
              </option>
              <option value="Used">Used</option>
              <option value="Used - Moderate">Used - Moderate</option>
              <option value="Used - Excellent">Used - Excellent</option>
            </select>
            <label htmlFor="style" className="text-black mt-3">
              Style
            </label>
            <input
              onChange={onMutate}
              type="text"
              id="style"
              placeholder="Korean"
              className="bg-white p-3 border-2 text-black"
            />
            <label htmlFor="colour" className="text-black mt-3">
              Colour
            </label>
            <input
              onChange={onMutate}
              type="text"
              id="colour"
              placeholder="Red"
              className="bg-white p-3 border-2 text-black"
            />
            <button
              id="submit"
              className="bg-white py-3 mt-5 border-2 hover:bg-black hover:text-white"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateListing;
