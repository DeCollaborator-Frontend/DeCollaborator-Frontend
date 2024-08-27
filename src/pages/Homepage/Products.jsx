import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { ProductContext } from "@/context/ProductsServicesCollabContext";
import Filters from "../Search/Results/Filters";
import { StarRating } from "../../components/Forms/SettingsForms/ProfileSettingsForm";

const Products = () => {
  const { allProducts } = useContext(ProductContext);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    // Load all collaborations without sorting initially
    setSortedProducts(allProducts);
  }, [allProducts]);

  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);

    // Apply sorting only when a sort option is selected
    let sortedArray = [...allProducts];
    if (selectedOption === "date-asc") {
      sortedArray.sort((a, b) => new Date(a.posted_on) - new Date(b.posted_on));
    } else if (selectedOption === "date-desc") {
      sortedArray.sort((a, b) => new Date(b.posted_on) - new Date(a.posted_on));
    } else if (selectedOption === "provider-asc") {
      sortedArray.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedOption === "provider-desc") {
      sortedArray.sort((a, b) => b.name.localeCompare(a.name));
    }

    setSortedProducts(sortedArray);
  };

  return (
    <>
      <div className="px-8 py-32 text-white md:px-10">
        <div className="mb-8 text-right">
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="rounded border border-white bg-transparent p-2 text-white"
          >
            <option value="" className="bg-black">
              Sort By
            </option>
            <option value="date-asc" className="bg-black">
              Date: Old to New
            </option>
            <option value="date-desc" className="bg-black">
              Date: New to Old
            </option>
            <option value="provider-asc" className="bg-black">
              Provider: A-Z
            </option>
            <option value="provider-desc" className="bg-black">
              Provider: Z-A
            </option>
          </select>
        </div>
        <div>
          <div className="mx-auto grid max-w-5xl gap-8 text-white">
            {sortedProducts.length == 0 ? (
              <img
                src="/assests/images/no-results.png"
                alt="empty"
                className="mx-auto"
              />
            ) : (
              sortedProducts.map((el) => (
                <div
                  key={el.id}
                  className="grid gap-6 overflow-hidden rounded-xl bg-[#242222] p-4 sm:grid-cols-3 md:gap-12 md:p-7"
                >
                  <img
                    src={el.src}
                    alt="product image"
                    className="h-full w-full rounded-xl object-cover md:h-64"
                  />
                  <div className="col-span-2 grid w-full gap-y-4">
                    <h3 className="text-lg font-semibold md:text-xl md:font-bold">
                      {el.name}
                    </h3>
                    <p className="text-md text-sm font-light">{el.about}</p>
                    <>
                      <div className="flex gap-4">
                        <span>Demitchy</span>
                      </div>
                      <p>$ {el.price}</p>
                    </>

                    <p>
                      Rating: <StarRating rating={el.rating} />
                    </p>
                    <Filters filterList={el.tags} />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
