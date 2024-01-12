import picture from "../../assests/images/Brands/Okay Bears.png";
export default function SinglePageNoGree() {
	return (
		<div className="border border-r-4 p-5 border-slate-700 text-white flex flex-col gap-10">
			<div>
				<h2 className="my-2 font-bold">Collab details</h2>
				<div className="grid grid-cols-2">
					<div>
						<div className="flex items-start justify-start gap-4 p-5 border-b">
							<p>Collab title:</p>
							<p className=" font-bold">Web3 product application</p>
						</div>
						<div className="flex items-start justify-start gap-4 p-5 border-b">
							<p>Collab type:</p>
							<p className=" font-bold">Partnership</p>
						</div>
						<div className="flex items-start justify-start gap-4 p-5 border-b">
							<p>Date initiated: </p>
							<p className=" font-bold">29th August,2023</p>
						</div>
						<div className="flex items-start justify-start gap-4 p-5 border-b">
							<p>Collaborators:</p>
							<div>
								<div className=" flex gap-5 justify-start">
									<p>From</p>
									<p className=" font-bold">8bitzguys</p>
								</div>
								<div className=" flex gap-5 justify-start">
									<p>To</p>
									<p className=" font-bold">Okay bears</p>
								</div>
							</div>
						</div>
						<div className="flex items-start justify-start gap-4 p-5 border-b ">
							<p>Collab status: </p>
							<p className=" font-bold">Delivered</p>
						</div>
					</div>

					{/* Image div */}
					<div className="relative flex justify-center flex-wrap">
						<div className="w-[300px] absolute ">
							<img className="rounded-full w-full" src={picture} alt="" />
						</div>
						<div className="w-[300px] absolute right-[-2px]">
							<img className="rounded-full w-full" src={picture} alt="" />
						</div>
					</div>
				</div>
			</div>

			{/* BTNS */}
			<div className="w-full flex justify-evenly my-2 py-2 font-bold">
				<button className="border-[#FFC107] border text-black bg-[#FFC107] p-4 rounded-md">
					Accept Proposal
				</button>
				<button className="border border-[#FFC107] p-4 rounded-md text-[#FFC107]">
					Review Agreement
				</button>
				<button className="border border-[#FFC107] p-4 rounded-md text-[#FFC107]">
					Reject Proposal
				</button>
			</div>

			{/* DESCRIPTION */}
			<div className="">
				<h2 className="my-2 font-bold">Collab Description</h2>
				<p className="p-5 bg-gray-900">
					Lorem ipsum dolor sit amet consectetur. Id ornare gravida elit
					interdum. Id lorem faucibus amet non. Neque amet vitae lorem
					facilisis. At neque vestibulum amet turpis. Viverra netus blandit
					integer tincidunt aliquam quis. Etiam non nunc mattis vitae gravida
					posuere a vivamus semper. Eget viverra venenatis mattis mauris est.
					Tellus cursus faucibus facilisis sit convallis non ut placerat dictum.
					Arcu sapien viverra ultrices vulputate ornare. Adipiscing sed aliquet
					turpis elit. Pulvinar pretium in gravida mi massa. Dui interdum leo
					libero diam libero sed quis leo. Pellentesque vestibulum vitae mi
					faucibus. Convallis porttitor nulla risus mauris enim. Mollis sed
					ultricies ut eget consequat. Et dui sit nisi vestibulum amet. Nunc vel
					ultrices tortor in.
				</p>
			</div>

			{/* AGREEMENT */}
			<div className="">
				<h2 className="my-2 font-bold">Collab Description</h2>
				<div className="p-5 bg-gray-900">
					<span>Terms and conditions of the agreement</span>

					<p className="text-2xl my-4 mx-auto w-fit">No agreement yet</p>
				</div>
			</div>
		</div>
	);
}
