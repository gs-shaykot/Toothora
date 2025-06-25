import emailjs from '@emailjs/browser';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [IsSending, setIsSending] = useState(false);

    const onSubmit = (data) => {
        const serviceId = import.meta.env.VITE_serviceId;
        const templateId = import.meta.env.VITE_templateId;
        const publicKey = import.meta.env.VITE_publicKey;
        setIsSending(true);
        emailjs.send(serviceId, templateId, data, publicKey)
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                setIsSending(false);
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Message sent successfully!", 
                });
            })
            .catch((err) => {
                console.error("FAILED...", err);
                setIsSending(false);
                Swal.fire({
                    icon: "error",
                    title: "oops...",
                    text: "Failed to send message. Please try again later.",
                })
            });
    };



    return (
        <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold text-center mb-2">Get in Touch</h2>
            <p className="text-center text-gray-500 mb-6">
                Fill out the form below, and our team will get back to you shortly.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">Full Name</label>
                        <input
                            {...register("fullName", { required: true })}
                            placeholder="John Doe"
                            className="w-full p-2 border rounded"
                        />
                        {errors.fullName && <span className="text-red-500 text-sm">Full Name is required</span>}
                    </div>

                    <div>
                        <label className="block font-medium">Email Address</label>
                        <input
                            {...register("email", {
                                required: true,
                                pattern: /^\S+@\S+$/i,
                            })}
                            placeholder="john@example.com"
                            className="w-full p-2 border rounded"
                        />
                        {errors.email && <span className="text-red-500 text-sm">Valid Email is required</span>}
                    </div>
                    <div>
                        <label className="block font-medium">Phone Number</label>
                        <input
                            {...register("phone", {
                                required: true,
                                pattern: /^(01)[3-9]\d{8}$/,
                            })}
                            placeholder="01XXXXXXXXX"
                            className="w-full p-2 border rounded"
                        />
                        {errors.phone && (
                            <span className="text-red-500 text-sm">Enter a valid Bangladeshi phone number (e.g., 017xxxxxxxx)</span>
                        )}
                    </div>


                    <div>
                        <label className="block font-medium">Preferred Date</label>
                        <input
                            type="date"
                            {...register("date", { required: true })}
                            className="w-full p-2 border rounded"
                        />
                        {errors.date && <span className="text-red-500 text-sm">Date is required</span>}
                    </div>
                </div>

                <div>
                    <label className="block font-medium">Reason for Visit</label>
                    <select
                        {...register("reason", { required: true })}
                        className="w-full p-2 border rounded"
                    >
                        <option value="">Select a reason</option>
                        <option value="consultation">Consultation</option>
                        <option value="treatment">Treatment</option>
                        <option value="follow-up">Follow-up</option>
                    </select>
                    {errors.reason && <span className="text-red-500 text-sm">Please select a reason</span>}
                </div>

                <div>
                    <label className="block font-medium">Your Message</label>
                    <textarea
                        {...register("message")}
                        placeholder="Please provide any additional information..."
                        className="w-full p-2 border rounded min-h-[100px]"
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                        {IsSending ? "Sending..." : "Send Message"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
