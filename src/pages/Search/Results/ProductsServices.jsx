import Filters from "./Filters";

// let els = [
//   {
//     title: "Python Programming",
//     description: "Learn Python programming language",
//     filters: ["Programming", "Python"],
//     username: "user1",
//     id: 1,
//   },
//   {
//     title: "Machine Learning",
//     description: "Introduction to machine learning concepts",
//     filters: ["Machine Learning", "AI"],
//     username: "user2",
//     id: 2,
//   },
//   {
//     title: "Web Development",
//     description: "Build dynamic websites with Django",
//     filters: ["Web Development", "Python"],
//     username: "user3",
//     id: 3,
//   },
// ];

function ProductsServices({ currentItems, selectedTab }) {
  console.log(currentItems);
  return (
    <div className="mx-auto grid max-w-5xl gap-8 text-white">
      {currentItems.map((el) => (
        <div
          key={el.id}
          className="grid gap-6 overflow-hidden rounded-xl bg-[#242222] p-4 sm:grid-cols-2 md:gap-12 md:p-7"
        >
          <img
            src="/assests/images/dashboard.png"
            alt="product image"
            className="h-60 w-full rounded-xl object-cover md:h-64"
          />
          <div className="grid w-full gap-y-4">
            <h3 className="text-lg font-semibold md:text-xl md:font-bold">
              {el.name}
            </h3>
            <p className="text-md text-sm font-light">{el.about}</p>
            {selectedTab === "products" ? (
              <>
                <div className="flex gap-4 ">
                  <span>Demitchy</span>
                  <span>Okay Bears</span>
                </div>
                <p>$ {el.price}</p>
              </>
            ) : (
              <>
                <p>Paid Service</p>
                <p>Demitchy</p>
                <p>Lagos, Nigeria</p>
              </>
            )}
            <p>
              Rating: <span>{el.rating}</span>
            </p>
            <Filters filterList={el.tags} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsServices;
