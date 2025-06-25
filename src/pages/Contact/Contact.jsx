import React from 'react';
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Iframe from 'react-iframe';
import ContactForm from './ContactForm';
import Additional from './Additional';
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from 'axios';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:5000/api/bookingAppoinments', data);

            const { serial } = response.data;

            const emailParams = {
                to_email: data.email,
                to_name: data.fullName,
                user_phone: data.phone,
                selected_doctor: data.doctor,
                booking_date: data.date,
                booking_time: data.time,
                serial_no: serial,
            };

            await emailjs.send(
                import.meta.env.VITE_serviceId2,
                import.meta.env.VITE_templateId2,
                emailParams,
                import.meta.env.VITE_publicKey2,
            );


            alert(`Booking successful! Your serial number is ${serial}`);
            reset();
            document.getElementById("my_modal_3").close();

        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                alert(err.response.data.message); // Server error (e.g., 20 serial full)
            } else {
                console.error("Booking failed", err);
                alert("Something went wrong. Try again.");
            }
        }
    };


    return (
        <section className="contact">
            <div
                className="relative bg-cover bg-center bg-no-repeat text-white"
                style={{ backgroundImage: "url('https://i.ibb.co/XZ62NFpt/con.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16 py-20 text-center">
                    <h1 className="font-ubuntu font-extrabold text-4xl mb-4">Contact Us</h1>
                    <p className="text-lg sm:text-xl text-gray-200 mb-6">
                        We're here to answer your questions and provide the dental care you deserve.
                        <br className="hidden md:block" />
                        Reach out to our friendly team today.
                    </p>

                    {/* Contact Info */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-lg mb-8">
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt className="text-blue-300" />
                            <p>+8801515267655</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdEmail className="text-blue-300" />
                            <p>shaykotkhan1916@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaClock className="text-blue-300" />
                            <p>Mon–Fri: 8AM–6PM</p>
                        </div>
                    </div>

                    <button
                        onClick={() => document.getElementById('my_modal_3').showModal()}
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
                        Book an Appointment
                    </button>
                </div>
            </div>

            {/* Info Cards */}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 py-14 px-4 sm:px-6 lg:px-16">
                {/* Card 1 */}
                <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-100 text-blue-600 w-10 h-10 flex items-center justify-center rounded-full text-lg">
                            <FaMapMarkerAlt />
                        </div>
                        <h2 className="text-lg font-semibold">Address & Directions</h2>
                    </div>
                    <p>123 Smile Avenue</p>
                    <p>Dental District, NY 10001</p>
                    <p>United States</p>
                    <a href="#" className="text-blue-600 mt-3 inline-block hover:underline">Get Directions →</a>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-100 text-blue-600 w-10 h-10 flex items-center justify-center rounded-full text-lg">
                            <FaPhoneAlt />
                        </div>
                        <h2 className="text-lg font-semibold">Phone & Emergency</h2>
                    </div>
                    <p>Main: (555) 123-4567</p>
                    <p>Emergency: (555) 987-6543</p>
                    <p>Fax: (555) 123-4568</p>
                    <a href="#" className="text-blue-600 mt-3 inline-block hover:underline">
                        Call Now <FaPhoneAlt className="inline ml-1" />
                    </a>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-100 text-blue-600 w-10 h-10 flex items-center justify-center rounded-full text-lg">
                            <FaClock />
                        </div>
                        <h2 className="text-lg font-semibold">Working Hours</h2>
                    </div>
                    <p>Monday - Friday: 8AM - 6PM</p>
                    <p>Saturday: 9AM - 2PM</p>
                    <p>Sunday: Closed</p>
                    <a href="#" className="text-blue-600 mt-3 inline-block hover:underline">
                        Book Appointment 📅
                    </a>
                </div>
            </div>

            {/* Map Section */}
            <div className="bg-[#f9fafb] py-10 px-4 sm:px-6 lg:px-16">
                <div className="mx-auto flex flex-col items-center">
                    <h1 className="font-ubuntu font-extrabold text-3xl sm:text-4xl mb-10 text-center">Find Our Location</h1>
                    <Iframe
                        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24790.226868118523!2d91.1573824918271!3d23.46707634673446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547f26759e8171%3A0x66e643556d5d8d8c!2sCumilla%20Trauma%20Centre!5e1!3m2!1sen!2sbd!4v1750860560277!5m2!1sen!2sbd"
                        width="100%"
                        height="420px"
                        className="rounded-lg shadow-md"
                        display="block"
                        position="relative"
                    />
                </div>
            </div>

            <ContactForm />
            <Additional />

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-full max-w-md">
                    <form method="dialog" className="absolute right-2 top-2">
                        <button className="btn btn-sm btn-circle btn-ghost">✕</button>
                    </form>

                    <h2 className="text-xl font-bold mb-4">Book an Appointment</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-800">Full Name:</span>
                            </label>
                            <input
                                {...register("fullName", { required: true })}
                                type="text"
                                placeholder="Full Name"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-800">Email:</span>
                            </label>
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                placeholder="Email Address"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-800">Phone:</span>
                            </label>
                            <input
                                {...register("phone", { required: true })}
                                type="tel"
                                placeholder="Phone Number"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-800">Select Doctor:</span>
                            </label>
                            <select {...register("doctor", { required: true })} className="select select-bordered w-full">
                                <option disabled selected value="">Select Doctor</option>
                                <option>Dr. John Smith</option>
                                <option>Dr. Sarah Lee</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-800">Preferred Date:</span>
                            </label>
                            <input
                                {...register("date", { required: true })}
                                type="date"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-800">Preferred Time:</span>
                            </label>
                            <select {...register("time", { required: true })} className="select select-bordered w-full">
                                <option disabled selected value="">Preferred Time</option>
                                <option>9:00 AM</option>
                                <option>11:00 AM</option>
                                <option>2:00 PM</option>
                            </select>
                        </div>

                        <textarea
                            {...register("reason", { required: true })}
                            placeholder="Please briefly describe your dental concern…"
                            className="textarea textarea-bordered w-full"
                        />
                        <div className="flex justify-end gap-3 pt-2">
                            <form method="dialog">
                                <button className="btn btn-ghost">Cancel</button>
                            </form>
                            <button type="submit" className="btn btn-primary">Book Appointment</button>
                        </div>
                    </form>

                </div>
            </dialog>
        </section>
    );
};

export default Contact;