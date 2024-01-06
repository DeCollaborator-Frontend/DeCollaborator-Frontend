//Same card design but 2 different grid systems
// 4 card grid system
// 6 card grid system
import DashBoardImg from "../../assests/images/dashboard.png";
import dummyData from "../../data/dummyData/homepageCardsData.json";
import { useEffect, useState } from "react";
import { PaginationBar } from "../Pagination";

export const HomepageCards = (props) => {
	const { username, about, collabs, avatar, available, category } = props;
	return (
		<>
			<div className="rounded-lg border border-[#FFD21D] lg:w-full md:w-[320px] max-[768px]:w-1/2 m-auto">
				<img
					src={avatar}
					alt={username}
					className="w-full h-[200px] rounded-t-lg"
				/>
				<div className="bg-[#242222] text-white font-poppins rounded-b-lg pb-3">
					<div className="py-3 m-auto">
						<h3 className="text-xl font-bold text-center">{username}</h3>
					</div>
					<div className="border-t border-b border-[#E8E1DC4D] py-1 p-2">
						<p className="text-center text-sm">{about}</p>
						<div className="flex justify-between rounded p-2 text-xs">
							<span>Open to collabs</span>
							<span>{collabs}</span>
						</div>
						<div className="flex justify-between rounded p-2 text-xs">
							<span>Available</span>
							<span>{available}</span>
						</div>
						<div className="flex justify-between rounded p-2 text-xs">
							<span>Category</span>
							<span>{category}</span>
						</div>
					</div>
					<div className="flex justify-center">
						<button className="bg-[#FFDF00] border border-[#FFDF00] text-[#FFDF00] rounded-lg py-2 px-3 cursor-pointer w-9/12 mt-5">
							<p className="text-[20px] font-poppins text-black font-bold flex items-center justify-center">
								<span>Open</span>
								<svg
									width="18"
									height="12"
									viewBox="0 0 18 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="ml-2">
									<path
										d="M2.33333 2.5L9 9.16667L15.6667 2.5"
										stroke="#000"
										stroke-width="3.75"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</p>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

const HomepageCardsGrid = () => {
	const itemsPerPage = 4;

	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);

	const handlePageChange = (page) => {
		if (page > 0 && page <= totalPages) {
			setCurrentPage(page);
		}
	};

	const getSlicedData = () => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;

		return dummyData.user.slice(startIndex, endIndex);
	};
	return (
		<>
			<div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 lg:p-10 sm:p-5">
				{getSlicedData().map((data, id) => {
					return <HomepageCards key={id} {...data} />;
				})}
			</div>
			<PaginationBar
				data={dummyData.user}
				currentPage={currentPage}
				handlePageChange={handlePageChange}
				itemsPerPage={itemsPerPage}
				totalPages={totalPages}
				setTotalPages={setTotalPages}
				className={`m-4`}
			/>
		</>
	);
};

export default HomepageCardsGrid;
