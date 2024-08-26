import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../../context/ProductsServicesCollabContext";
import NoImage from "../../../assests/Cover.png";

export const CreateNewProduct = ({ closeModal }) => {
  const { productDetails, setProductDetails, addProduct, updateProduct } =
    useContext(ProductContext);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "src") {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setProductDetails((prevState) => ({
          ...prevState,
          src: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    } else if (name === "tags") {
      setProductDetails((prevState) => ({
        ...prevState,
        tags: value.split(",").map((tag) => tag.trim()),
      }));
    } else {
      setProductDetails((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleClearImage = () => {
    setProductDetails((prevState) => ({
      ...prevState,
      src: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productDetails.id) {
      updateProduct();
    } else {
      addProduct();
    }
    closeModal();
  };

  return (
    <div>
      <div className="border-b-2 border-[#7F7F7F] p-5">
        <h1 className="text-2xl font-bold text-[#A9A9A9]">Add Product</h1>
      </div>
      <form onSubmit={handleSubmit} className="p-8 text-black">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <div className="relative rounded-xl border border-2 border-[#bb9a01]">
              <input
                type="file"
                name="src"
                id="src"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
              {productDetails.src ? (
                <div className="relative h-[300px] w-[300px] overflow-hidden p-5">
                  <img
                    src={imagePreview || productDetails.src}
                    alt="Product Image"
                    className="h-full w-full rounded-lg object-contain"
                  />
                  <button
                    type="button"
                    onClick={handleClearImage}
                    className="absolute right-2 top-2 text-2xl text-[red]"
                  >
                    &times;
                  </button>
                </div>
              ) : (
                <div className="relative">
                  <img
                    src={NoImage}
                    alt="Product Image"
                    className="rounded-lg object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg">
                    <label
                      htmlFor="src"
                      className="cursor-pointer rounded bg-[gold] p-1 text-black"
                    >
                      <span>Add Product Cover</span>
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="relative mb-5">
              <input
                type="text"
                id="name"
                name="name"
                value={productDetails.name}
                onChange={handleChange}
                placeholder=" "
                className="peer block w-full appearance-none rounded border border-2 border-[#7F7F7F] bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-white focus:outline-none"
              />
              <label
                htmlFor="name"
                className="absolute top-2 z-10 mx-2 origin-[0] -translate-y-4 scale-75 transform bg-[#242222] text-sm text-[#7F7F7F] duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
              >
                Product Name
              </label>
            </div>
            <div className="relative mb-5">
              <textarea
                type="text"
                id="about"
                name="about"
                value={productDetails.about}
                rows={10}
                cols={30}
                onChange={handleChange}
                placeholder=" "
                className="peer block w-full appearance-none rounded border border-2 border-[#7F7F7F] bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 text-white focus:outline-none"
              />
              <label
                htmlFor="about"
                className="absolute top-2 z-10 mx-2 origin-[0] -translate-y-4 scale-75 transform bg-[#242222] text-sm text-[#7F7F7F] duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
              >
                Description
              </label>
            </div>
          </div>
        </div>
        <div className="relative mb-5">
          <input
            type="text"
            id="manufacturer"
            name="manufacturer"
            value={productDetails.manufacturer}
            onChange={handleChange}
            placeholder=" "
            className="peer block w-full appearance-none rounded border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:outline-none"
          />
          <label
            htmlFor="manufacturer"
            className="absolute top-2 z-10 mx-2 origin-[0] -translate-y-4 scale-75 transform bg-[#242222] text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
          >
            Manufacturer
          </label>
        </div>
        <div className="relative mb-5">
          <input
            type="text"
            id="tags"
            name="tags"
            value={productDetails.tags.join(", ")}
            onChange={handleChange}
            placeholder=" "
            className="peer block w-full appearance-none rounded border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:outline-none"
          />
          <label
            htmlFor="tags"
            className="absolute top-2 z-10 mx-2 origin-[0] -translate-y-4 scale-75 transform bg-[#242222] text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
          >
            Tags (separated by commas)
          </label>
        </div>
        <div className="relative mb-5">
          <input
            type="text"
            id="link"
            name="link"
            value={productDetails.link}
            onChange={handleChange}
            placeholder=" "
            className="peer block w-full appearance-none rounded border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:outline-none"
          />
          <label
            htmlFor="link"
            className="absolute top-2 z-10 mx-2 origin-[0] -translate-y-4 scale-75 transform bg-[#242222] text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
          >
            Product Link
          </label>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">Pricing</h2>
          <p className="mb-3 mt-1 text-sm text-[white]">
            Please enter the standard fee you charge for this service
          </p>
          <div className="relative mb-5">
            <input
              type="text"
              id="price"
              name="price"
              value={productDetails.price}
              onChange={handleChange}
              placeholder=" "
              className="peer block w-full appearance-none rounded border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:outline-none"
            />
            <label
              htmlFor="price"
              className="absolute top-2 z-10 mx-2 origin-[0] -translate-y-4 scale-75 transform bg-[#242222] text-lg text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-100 peer-focus:px-2"
            >
              $
            </label>
          </div>
        </div>

        <div className="flex flex-wrap justify-end pb-3 font-bold">
          <button
            className="mt-4 w-[150px] rounded border-2 border-[#FFDF00] bg-none p-2.5 text-[#FFDF00]"
            onClick={closeModal}
          >
            CANCEL
          </button>
          <button
            type="submit"
            className="ml-5 mt-4 w-[150px]  rounded border-2 border-[#FFDF00] bg-[#FFDF00] p-2.5 text-[#0f0f0f]"
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};
