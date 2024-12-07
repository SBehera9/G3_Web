import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

interface FormData {
  name: string;
  companyname: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/api/contact", data);
      alert("Form submitted successfully!"); // Alert message
      reset(); // Clear form fields
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to submit the form. Please try again."); // Error alert
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-950">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full mt-12">
        <h1 className="text-3xl font-bold text-center text-teal-600 mb-6">Send Us a Message</h1>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required", minLength: { value: 3, message: "Name must be at least 3 characters" } })}
              placeholder="Your Name"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${
                errors.name ? "border-red-500" : "focus:ring-teal-300"
              } mt-2`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Company Name</label>
            <input
              type="text"
              {...register("companyname", { required: "Name is required", minLength: { value: 3, message: "Name must be at least 3 characters" } })}
              placeholder="Company Name"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${
                errors.companyname ? "border-red-500" : "focus:ring-teal-300"
              } mt-2`}
            />
            {errors.companyname && <p className="text-red-500 text-sm mt-1">{errors.companyname.message}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" },
              })}
              placeholder="Your Email"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${
                errors.email ? "border-red-500" : "focus:ring-teal-300"
              } mt-2`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows={4}
              {...register("message", { required: "Message is required" })}
              placeholder="Your Message"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring ${
                errors.message ? "border-red-500" : "focus:ring-teal-300"
              } mt-2`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-center">
          <button
            type="submit"
            className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-300 mt-2"
          >
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
