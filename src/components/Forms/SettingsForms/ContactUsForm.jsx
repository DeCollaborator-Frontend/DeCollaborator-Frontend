import { useState } from "react";

export const ContactUsForm = ({ closeModal }) => {
	const initialvalues = {
		name: "",
		email: "",
		subject: "",
		description: "",
	};
	const [message, setMessage] = useState(initialvalues);
	const [isSubmit, setIsSubmit] = useState(false);
	const [error, setError] = useState({});

	function handleChange(e) {
		const { name, value } = e.target;
		setMessage({ ...message, [name]: value });
	}

	// Create validator function
	function validator(formData) {
		const errors = {};

		if (!formData.name) errors.name = "Please enter a name";
		if (!formData.email) errors.email = "Please enter an email";
		if (!formData.subject) errors.subject = "Please enter a subject";
		if (!formData.description)
			errors.description = "Please enter a description";

		errors ? console.log(errors) : null;
		return errors;
	}

	function handleSubmit(e) {
		e.preventDefault();
		setIsSubmit(true);

		// Validate the form
		const validationErrors = validator(message);
		setError(validationErrors);

		// If no errors, proceed with submition
		if (Object.key(validationErrors === 0)) {
			console.log(message, { success: true });

			// Reset values to their initials
			setMessage(initialvalues);
			setIsSubmit(false);
		}
	}

	return (
		<>
			<div className="rounded-lg p-5 bg-[#262626] m-5 max-w-[480px] relative">
				<button onClick={closeModal}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						className="w-6 h-6 absolute top-2 right-2">
						<path
							fill="white"
							d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
						/>
					</svg>
				</button>
				<h2 className="text-white text-[28px] font-bold">Reach out to us</h2>
				<p className="text-[#D4D4D4] mb-5 pb-2 border-[#A9A9A9] border-b">
					Send us a message on whatever question you have
				</p>
				<form action="" className="flex flex-col">
					<input
						type="text"
						name="name"
						onChange={handleChange}
						id="name"
						placeholder="Name"
						className="p-2 w-full bg-transparent border border-[#D4D4D4] rounded-md focus:outline-none placeholder:text-base placeholder:text-[#FEFEFE] text-[#FEFEFE] autofill:bg-transparent mb-5"
					/>
					<input
						type="email"
						name="email"
						onChange={handleChange}
						id=""
						placeholder="Email address"
						className="p-2 w-full bg-transparent border border-[#D4D4D4] rounded-md focus:outline-none placeholder:text-base placeholder:text-[#FEFEFE] text-[#FEFEFE] autofill:bg-transparent mb-5"
					/>
					<input
						type="text"
						name="subject"
						onChange={handleChange}
						id=""
						placeholder="Subject"
						className="p-2 w-full bg-transparent border border-[#D4D4D4] rounded-md focus:outline-none placeholder:text-base placeholder:text-[#FEFEFE] text-[#FEFEFE] autofill:bg-transparent mb-5"
					/>
					<textarea
						name="description"
						onChange={handleChange}
						id="description"
						cols="30"
						rows="5"
						placeholder="Enter message here"
						className="bg-transparent border border-[#D4D4D4] placeholder:text-base placeholder:text-[#FEFEFE] rounded-md focus:outline-none text-white p-2"></textarea>
					<button
						className="button-gradient border-2 border-[#FFD21D] rounded-md p-2 w-full focus:outline-none font-bold mt-6"
						type="submit"
						onClick={handleSubmit}>
						Send Message
					</button>
				</form>
			</div>
		</>
	);
};

export const ChatWithUs = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const openModal = () => {
		setModalOpen(true);
	};
	const closeModal = () => {
		setModalOpen(false);
	};
	return (
		<>
			<div className="rounded-lg p-9 bg-[#262626] flex items-center justify-between">
				<div>
					<h2 className="text-white text-[28px] font-bold">
						Still have questions?
					</h2>
					<p className="text-[#D4D4D4]">
						Can’t find the answer you’re looking for? Please send a message to
						our friendly team.
					</p>
				</div>
				<button
					className="button-gradient border-2 border-[#FFD21D] rounded-md p-2 w-[150px] focus:outline-none font-bold mt-6"
					onClick={openModal}>
					Chat With Us!
				</button>
				{modalOpen && (
					<div className="w-full h-full modal">
						<div className="modal-content flex items-center justify-center">
							<ContactUsForm closeModal={closeModal} />
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default ChatWithUs;
