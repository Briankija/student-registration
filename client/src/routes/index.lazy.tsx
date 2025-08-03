// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createLazyFileRoute } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	const [formData, setFormData] = useState({
		username: "",
		registrationNo: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [error, setError] = useState<{ [key: string]: string }>({});
	const [success, setSuccess] = useState("");

	useEffect(() => {
		document.title = "Registration";
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError({});
		setSuccess("");

		try {
			const res = await fetch("/api/user/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			console.log("respnose data", data);

			if (!res.ok) {
				const fieldErrors: { [key: string]: string } = {};
				data.errors.forEach((err) => {
					if (err.field) {
						fieldErrors[err.field] = err.message;
					}
				});
				setError(fieldErrors);
			} else {
				setSuccess(data.message);
				setFormData({
					username: "",
					registrationNo: "",
					email: "",
					password: "",
					confirmPassword: "",
				});
			}
		} catch {
			setError({ general: "Something went wrong!" });
		}
	};

	return (
		<>
			<div className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] font-[Poppins]">
				<div className="flex justify-center items-center min-h-screen">
					<form
						id="form"
						className="w-[350px] bg-white p-6 rounded shadow-md text-sm"
						onSubmit={handleSubmit}
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
								value={formData.username}
								onChange={handleChange}
							/>
							{error.username && (
								<p className="error text-red-500 text-xs h-4 mt-1">{error.username}</p>
							)}
						</div>

						<div className="mb-4 input-control">
							<label htmlFor="registrationNo" className="block mb-1 text-gray-700">
								Registration No:
							</label>
							<input
								id="registrationNo"
								name="registrationNo"
								type="text"
								className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-400"
								value={formData.registrationNo}
								onChange={handleChange}
							/>
							{error.registrationNo && (
								<p className="error text-red-500 text-xs h-4 mt-1">
									{error.registrationNo}
								</p>
							)}
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
								value={formData.email}
								onChange={handleChange}
							/>
							{error.email && (
								<p className="error text-red-500 text-xs h-4 mt-1">{error.email}</p>
							)}
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
								value={formData.password}
								onChange={handleChange}
							/>
							{error.password && (
								<p className="error text-red-500 text-xs h-4 mt-1">{error.password}</p>
							)}
						</div>

						<div className="mb-4 input-control">
							<label htmlFor="confirmPassword" className="block mb-1 text-gray-700">
								Confirm Password:
							</label>
							<input
								id="confirmPassword"
								name="confirmPassword"
								type="password"
								className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-blue-400"
								value={formData.confirmPassword}
								onChange={handleChange}
							/>
							{error.confirmPassword && (
								<p className="error text-red-500 text-xs h-4 mt-1">
									{error.confirmPassword}
								</p>
							)}
						</div>

						<button
							type="submit"
							className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded mt-4"
						>
							Sign Up
						</button>

						{error.param && <p className="text-red-500 mt-2">{error.param}</p>}
						{success && <p className="text-green-500 mt-2">{success}</p>}
					</form>
				</div>
			</div>
		</>
	);
}

export default Index;
