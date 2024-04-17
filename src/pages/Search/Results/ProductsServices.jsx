import Filters from "./Filters";

let els = [
  {
    title: "Python Programming",
    description: "Learn Python programming language",
    filters: ["Programming", "Python"],
    username: "user1",
    id: 1,
  },
  {
    title: "Machine Learning",
    description: "Introduction to machine learning concepts",
    filters: ["Machine Learning", "AI"],
    username: "user2",
    id: 2,
  },
  {
    title: "Web Development",
    description: "Build dynamic websites with Django",
    filters: ["Web Development", "Python"],
    username: "user3",
    id: 3,
  },
];

function ProductsServices({ searchResult }) {
  return (
    <div className="mx-auto grid max-w-5xl gap-8 text-white">
      {searchResult.map((el) => (
        <div
          key={el.id}
          className="grid grid-cols-2 gap-7 rounded-xl bg-[#242222] p-7"
        >
          <img
            src="/assests/images/dashboard.png"
            alt="product image"
            className="max-h-72 rounded-xl"
          />
          <div className="w-full">
            <h3 className="mb-1 text-xl font-bold">{el.name}</h3>
            <p className="text-md mb-4 font-light">{el.about}</p>
            <p className="mb-4">{el.name}</p>
            <p className="mb-4">$ {el.price}</p>
            <p className="mb-4">
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
