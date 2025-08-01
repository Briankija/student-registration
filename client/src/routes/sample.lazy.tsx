// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React, { useState, useEffect } from "react";
import { createLazyFileRoute } from '@tanstack/react-router';
import "../index.css";
import student from "../assets/graduates-2.jpg";

export const Route = createLazyFileRoute('/sample')({
  component: Sample,
})

function Sample() {
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
        console.log("respnose data", data)
  
        if (!res.ok) {
          const fieldErrors: { [key: string]: string } = {};
          data.errors.forEach((err) => {
            if(err.field){
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
			<div
				className="font-poppins min-h-screen bg-cover bg-center flex items-center justify-center"
				style={{
					backgroundImage: `url(${student})`,
				}}
			>
	
     <form
  id="form"
  className="w-[500px] bg-white p-6 rounded-md shadow-md text-sm border border-gray-300"
  onSubmit={handleSubmit}
>
  <h1 className="text-center text-red-600 text-xl font-bold mb-6">
    Student Details Form
  </h1>

  {/* Row 1: Username and Registration No */}
  <div className="flex gap-4 mb-4">
    <div className="w-1/2 input-control">
      <label htmlFor="username" className="block mb-1 text-gray-700">
        Name
      </label>
      <input
        id="username"
        name="username"
        type="text"
        className="w-full px-3 py-2 border border-green-600 rounded focus:outline-none"
        value={formData.username}
        onChange={handleChange}
      />
      {error.username && (
        <p className="text-red-500 text-xs mt-1">{error.username}</p>
      )}
    </div>

    <div className="w-1/2 input-control">
      <label htmlFor="registrationNo" className="block mb-1 text-gray-700">
        Registration No
      </label>
      <input
        id="registrationNo"
        name="registrationNo"
        type="text"
        className="w-full px-3 py-2 border border-green-600 rounded focus:outline-none"
        value={formData.registrationNo}
        onChange={handleChange}
      />
      {error.registrationNo && (
        <p className="text-red-500 text-xs mt-1">
          {error.registrationNo}
        </p>
      )}
    </div>
  </div>

  {/* Row 2: Email and Password */}
  <div className="flex gap-4 mb-4">
    <div className="w-1/2 input-control">
      <label htmlFor="email" className="block mb-1 text-gray-700">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        className={`w-full px-3 py-2 border rounded focus:outline-none ${
          error.email ? "border-red-500" : "border-green-600"
        }`}
        value={formData.email}
        onChange={handleChange}
      />
      {error.email && (
        <p className="text-red-500 text-xs mt-1">{error.email}</p>
      )}
    </div>

    <div className="w-1/2 input-control">
      <label htmlFor="password" className="block mb-1 text-gray-700">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        className="w-full px-3 py-2 border border-green-600 rounded focus:outline-none"
        value={formData.password}
        onChange={handleChange}
      />
      {error.password && (
        <p className="text-red-500 text-xs mt-1">{error.password}</p>
      )}
    </div>
  </div>

  {/* Row 3: Confirm Password */}
  <div className="mb-4 input-control">
    <label htmlFor="confirmPassword" className="block mb-1 text-gray-700">
      Confirm Password
    </label>
    <input
      id="confirmPassword"
      name="confirmPassword"
      type="password"
      className="w-[220px] px-3 py-2 border border-green-600 rounded focus:outline-none"
      value={formData.confirmPassword}
      onChange={handleChange}
    />
    {error.confirmPassword && (
      <p className="text-red-500 text-xs mt-1">{error.confirmPassword}</p>
    )}
  </div>

  {/* Submit Button (blue and centered) */}
  <div className="flex justify-center">
    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded mt-2"
    >
      Submit
    </button>
  </div>

  {/* Messages */}
  {error.param && <p className="text-red-500 mt-2 text-center">{error.param}</p>}
  {success && <p className="text-green-500 mt-2 text-center">{success}</p>}
</form>

    </div>
		</>
  )
}

export default Sample;