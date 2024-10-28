function BrandProfileImg({
  brandName = "Okay Bear.png",
  brandNamesArr,
  index,
  className,
}) {
  const arrLength = brandNamesArr.length;

  return (
    <img
      src={`/assests/images/Brands/${brandName}`}
      className={`${index !== 0 ? `${arrLength < 3 ? "-ml-8" : arrLength < 5 ? "-ml-14" : arrLength < 7 ? "-ml-22" : arrLength < 10 ? "-ml-32" : "-ml-44"}` : ""} aspect-square h-28 lg:h-36 rounded-full border-2 border-yellow-400 object-cover ${className}`}
    />
  );
}

export default BrandProfileImg;
