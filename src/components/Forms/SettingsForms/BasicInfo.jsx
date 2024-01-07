import React from "react";

export const BasicInfoBrand = () => {
	const initialvalues = {
		name: "",
		email: "",
		bio: "",
		phase: "",
		industry: "",
		specialties: "",
	};
	const [brand, setBrand] = React.useState(initialvalues);
	// const [brandDetails, setBrandDetails] = React.useState([]);
	const [error, setError] = React.useState({});
	const [isSubmit, setIsSubmit] = React.useState(false);

	function handleChange(e) {
		const { name, value } = e.target;
		name !== "phase"
			? setBrand({ ...brand, [name]: value })
			: setBrand({ ...brand, phase: value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		setIsSubmit(true);

		// Create validator function
		function validator(formData) {
			const errors = {};

			if (!formData.name) errors.name = "Please enter a name";
			if (!formData.email) errors.email = "Please enter an email";
			if (!formData.bio) errors.bio = "Please enter a bio";
			if (!formData.phase) errors.phase = "Please enter a phase";
			if (!formData.industry) errors.industry = "Please enter an industry";
			if (!formData.specialties)
				errors.specialties = "Please enter an specialties";

			errors ? console.log(errors) : null;
			return errors;
		}

		// Validate the form
		const validationErrors = validator(brand);
		setError(validationErrors);

		// If no errors, proceed with submition
		if (Object.key(validationErrors === 0)) {
			// setBrandDetails([...brandDetails, brand]);
			console.log(brand);

			// Reset values to their initials
			setBrand(initialvalues);
			setIsSubmit(false);

			// console.log(brandDetails);
		}
	}

	return (
		<>
			<form action="" className="m-auto w-5/6 text-white    ">
				<div className="flex flex-row justify-between items-center">
					<label htmlFor="brand" className="mr-2">
						Brand Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={brand.name}
						onChange={handleChange}
						className="border rounded-md p-2 w-5/6 focus:outline-none bg-transparent"
					/>
				</div>

				<div className="flex flex-row justify-between items-center mt-5">
					<label htmlFor="email" className="mr-2">
						Email Address
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={brand.email}
						onChange={handleChange}
						className="border rounded-md p-2 w-5/6 focus:outline-none bg-transparent"
					/>
				</div>

				<div className="flex flex-row justify-between mt-5">
					<label htmlFor="bio" className="mr-2">
						Bio
					</label>
					<textarea
						id="bio"
						name="bio"
						cols="30"
						rows="10"
						value={brand.bio}
						onChange={handleChange}
						className="border rounded-md p-2 w-5/6 focus:outline-none bg-transparent"></textarea>
				</div>

				<div className="flex flex-row justify-between mt-5">
					<label className="mr-2">Phase</label>
					<div className="flex w-5/6">
						<div className="flex items-center">
							<input
								type="radio"
								name="phase"
								id="pre"
								onChange={handleChange}
								className="mr-2"
							/>
							<label htmlFor="pre">Pre Launch</label>
						</div>
						<div className="flex items-center mx-8">
							<input
								type="radio"
								name="phase"
								id="post"
								onChange={handleChange}
								className="mx-2"
							/>
							<label htmlFor="post">Post Launch</label>
						</div>
					</div>
				</div>
				<div className="flex flex-row justify-between mt-5">
					<label htmlFor="industries">Industry</label>
					<select
						id="industries"
						name="industry"
						value={brand.industry}
						onChange={handleChange}
						className="bg-transparent border focus:outline-none text-white text-base rounded-md block w-5/6 p-2">
						<option defaultValue className="bg-[#0F0F0F] text-base">
							Select Industry
						</option>
						<option value="1" className="bg-[#0F0F0F] text-base">
							Tech
						</option>
						<option value="2" className="bg-[#0F0F0F] text-base">
							Entertainment
						</option>
						<option value="3" className="bg-[#0F0F0F] text-base">
							Fashion
						</option>
						<option value="4" className="bg-[#0F0F0F] text-base">
							Finance
						</option>
						<option value="5" className="bg-[#0F0F0F] text-base">
							Others
						</option>
					</select>
				</div>
				<div className="flex flex-row justify-between items-center mt-5">
					<label htmlFor="specialties" className="mr-2">
						Specialties
					</label>
					<input
						type="text"
						id="specialties"
						name="specialties"
						value={brand.specialties}
						onChange={handleChange}
						className="border rounded-md p-2 w-5/6 focus:outline-none bg-transparent"
					/>
				</div>

				<div className="w-full flex justify-end gap-3 py-2 my-2">
					<button className="border-2 border-[#FFD21D] text-[#FFD21D]  bg-transparent px-3 py-2  rounded-md focus:outline-none ">
						cancel
					</button>
					<button
						type="submit"
						onClick={handleSubmit}
						className="button-gradient border-2 border-[#FFD21D] bg-transparent px-3 py-2 text-black rounded-md focus:outline-none">
						Save
					</button>
				</div>
			</form>
		</>
	);
};
