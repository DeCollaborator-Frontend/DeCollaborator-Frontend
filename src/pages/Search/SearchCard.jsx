function SearchCard({
  username,
  about,
  active,
  blockchain = "Sol",
  category = "",
  imgSrc = "/assests/images/dashboard.png",
}) {
  return (
    <li className="overflow-hidden rounded-md border-[1px] border-yellow-500">
      <img
        src={imgSrc}
        alt="search result image"
        className="h-64 w-full object-cover lg:h-48"
      />
      <div className="bg-[#242222]">
        <h3 className="py-2 text-center text-2xl font-bold">{username}</h3>
        <div className="border-y-[1px] border-[#555] p-3">
          <p className="mb-4 text-center text-sm leading-4 text-[#ccc]">
            {about}
          </p>
          <div className="text-sm">
            <div className="mb-4 flex items-start justify-between">
              <span>Open to Collabs:</span>
              <div className="flex items-center gap-2">
                <span className="inline-block aspect-square h-3 rounded-full bg-[#008000]"></span>
                <span>Active</span>
              </div>
            </div>
            <div className="mb-4 flex items-start justify-between">
              <span>Open to Collabs:</span>
              <span>Sol</span>
            </div>
            <div className="mb-2 flex items-start justify-between">
              <span>Category:</span>
              <span>{category.split(" , ").join(", ")}</span>
            </div>
          </div>
        </div>
        <div className="p-5 text-center">
          <button className="w-full rounded-md bg-gradient-to-r from-[#daa521] to-[#fede01] p-3 text-xl font-bold text-black hover:from-[#a67e19] hover:to-[#cbb100] sm:w-[60%]">
            Collab
          </button>
        </div>
      </div>
    </li>
  );
}

export default SearchCard;
