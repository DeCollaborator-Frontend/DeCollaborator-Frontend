import Filters from "./Filters";

let courses = [
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

function ProductsServices() {
  return (
    <div className="mx-auto grid max-w-5xl gap-8 text-white">
      {courses.map((course) => (
        <div key={course.id} className="flex gap-7 rounded-xl bg-[#242222] p-7">
          <img
            src="/assests/images/dashboard.png"
            alt="product image"
            className="max-h-72 rounded-xl"
          />
          <div className="w-full">
            <h3 className="mb-1 text-xl font-bold">{course.title}</h3>
            <p className="text-md mb-4 font-light">
              Ipsum sint quis est fugiat ad adipisicing officia eiusmod nostrud
              mollit magna. Pariatur sit laborum ut laboris quis sint nulla.
              Dolore dolore adipisicing incididunt id voluptate sint dolore.
            </p>
            <p className="mb-4">{course.username}</p>
            <p className="mb-4">$$$$</p>
            <p className="mb-4">Rating</p>
            <Filters filterList={course.filters} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsServices;
