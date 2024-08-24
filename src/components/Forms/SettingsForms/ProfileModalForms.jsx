import { useContext } from "react";
import { ProductContext } from "../../../context/ProductsServicesCollabContext";
import NoImage from "../../../assests/Cover.png";

export const CreateNewProduct = () => {
  const { productDetails, setProductDetails, addProduct, allProducts } =
    useContext(ProductContext);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "src") {
      setProductDetails((prevState) => ({
        ...prevState,
        src: files[0], // Handle file input
      }));
    } else if (name === "tags") {
      setProductDetails((prevState) => ({
        ...prevState,
        tags: value.split(",").map((tag) => tag.trim()), // Split tags by commas and trim whitespace
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
    addProduct(); // Add the current product to the list of all products
    console.log(productDetails);
    console.log(allProducts);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-5 text-black">
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
                    src={URL.createObjectURL(productDetails.src)}
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
                    <label htmlFor="src" className="cursor-pointer text-white">
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
                className="peer block w-full appearance-none rounded border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:outline-none"
              />
              <label
                htmlFor=""
                className="absolute top-2 z-10 mx-2 origin-[0] -translate-y-4 scale-75 transform bg-[#242222] text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
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
                className="peer block w-full appearance-none rounded border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:outline-none"
              />
              <label
                htmlFor="about"
                className="absolute top-2 z-10 mx-2 origin-[0] -translate-y-4 scale-75 transform bg-[#242222] text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
              >
                Description
              </label>
            </div>
          </div>
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

        <label>
          Price:
          <input
            type="number"
            name="price"
            value={productDetails.price}
            onChange={handleChange}
          />
        </label>
        <br />

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
