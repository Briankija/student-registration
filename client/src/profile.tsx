function Profile() {
	return (
		<>
			<div className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] font-[Poppins]">
                <title>Profile</title>
				<div className="flex justify-center items-center min-h-screen">
					<form
						id="form"
						action="/"
						className="w-[370px] bg-white p-6 rounded shadow-md text-sm"
					>
						<h1 className="text-[#0f2027] text-2xl font-semibold text-center mb-4">
							Profile Info
						</h1>

						<div className="mb-4 input-control">
							<h1 className="text-[#0f2027] text-2xl font-semibold  mb-4">
							Username: <span className="text-gray-500 text-[22px] font-normal">Brian kija</span>
						</h1>
						</div>
                        <div className="mb-4 input-control">
							<h1 className="text-[#0f2027] text-2xl font-semibold  mb-4">
							Registration No: <span className="text-gray-500 text-[22px] font-normal">2024-01-00023</span>
						</h1>
						</div>
                        <div className="mb-4 input-control">
							<h1 className="text-[#0f2027] text-2xl font-semibold  mb-4">
							Email: <span className="text-gray-500 text-[22px] font-normal">kijabryan@gmai.com</span>
						</h1>
						</div>
					

						<button
							type="submit"
							className="w-[150px] ml-20 bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded "
						>
							Update Info
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default Profile;
