import BrandProfileImg from "./BrandProfileImg";

function BrandProfileImgGroup({ brandNamesArr = [1, 2, 3] }) {
  return (
    <div className="flex">
      {brandNamesArr.map((brandName, index) => (
        <BrandProfileImg key={brandName} index={index} brandNamesArr={brandNamesArr} />
      ))}
    </div>
  );
}

export default BrandProfileImgGroup;
