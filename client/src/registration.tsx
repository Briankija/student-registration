function Registration() {
	return (
		<>
			<div className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] font-[Poppins]">
				<div className="flex justify-center items-center min-h-screen">
					<form
						id="form"
						action="/"
						className="w-[350px] bg-white p-6 rounded shadow-md text-sm"
					>
						<h1 className="text-[#0f2027] text-2xl font-semibold text-center mb-4">
							Register
						</h1>

						<div className="mb-4 input-control">
							<label htmlFor="username" className="block mb-1 text-gray-700">
								Username:
							</label>
							<input
								id="username"
								name="username"
								type="text"
								className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-400"
							/>
							<div className="error text-red-500 text-xs h-4 mt-1"></div>
						</div>

						<div className="mb-4 input-control">
							<label htmlFor="registration_no" className="block mb-1 text-gray-700">
								Registration No:
							</label>
							<input
								id="registration_no"
								name="registration_no"
								type="text"
								className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-400"
							/>
							<div className="error text-red-500 text-xs h-4 mt-1"></div>
						</div>

						<div className="mb-4 input-control">
							<label htmlFor="email" className="block mb-1 text-gray-700">
								Email:
							</label>
							<input
								id="email"
								name="email"
								type="email"
								className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-400"
							/>
							<div className="error text-red-500 text-xs h-4 mt-1"></div>
						</div>

						<div className="mb-4 input-control">
							<label htmlFor="password" className="block mb-1 text-gray-700">
								Password:
							</label>
							<input
								id="password"
								name="password"
								type="password"
								className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-400"
							/>
							<div className="error text-red-500 text-xs h-4 mt-1"></div>
						</div>

						<div className="mb-4 input-control">
							<label htmlFor="confirm_password" className="block mb-1 text-gray-700">
								Confirm Password:
							</label>
							<input
								id="confirm_password"
								name="confirm_password"
								type="password"
								className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-400"
							/>
							<div className="error text-red-500 text-xs h-4 mt-1"></div>
						</div>

						<button
							type="submit"
							className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded mt-4"
						>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default Registration;
