import React from 'react';
import { FaStar } from 'react-icons/fa';

import axios from 'axios';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const Hero = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('https://toothora-server.onrender.com/api/bookingAppoinments', data);

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

            Swal.fire({
                icon: 'success',
                title: 'Booking Successful',
                text: `Your appointment has been booked successfully! Serial Number: ${serial}`,
                confirmButtonText: 'OK'
            })
            reset();
            document.getElementById("my_modal_3").close();

        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                alert(err.response.data.message); // Server error (e.g., 20 serial full)
            } else {
                console.error("Booking failed", err);
                Swal.fire({
                    icon: 'error',
                    title: 'Booking Failed',
                    text: 'Something went wrong. Please try again later.',
                    confirmButtonText: 'OK'
                })
            }
        }
    };


    return (
        <div>
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://i.ibb.co/VWG6wwG7/e4e42014b3a47c4a89f9614fd64dda71.jpg"
                        alt="Dental hero"
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 h-screen bg-gradient-to-r from-white via-white/90 to-transparent"></div>
                </div>
                <div className="container mx-auto px-6 py-20 relative z-10">
                    <div className="max-w-xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Creating Beautiful Smiles With Expert Care</h1>
                        <p className="text-lg text-gray-700 mb-8">At Flossy, we believe in combining comfort, confidence, and care with expert service and advanced technology.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => document.getElementById('my_modal_3').showModal()}
                                className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
                                Book an Appointment
                            </button>
                            <a href='#services' className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all !rounded-button whitespace-nowrap cursor-pointer">
                                Our Services
                            </a>
                        </div>
                        <div className="mt-8 flex items-center">
                            <div className="bg-blue-50 px-3 py-1 rounded-full flex items-center">
                                <FaStar className="text-yellow-500 mr-1" />
                                <span className="font-semibold">4.9/5</span>
                            </div>
                            <span className="ml-2 text-gray-600">based on 200+ reviews</span>
                        </div>
                    </div>
                </div>
            </section>


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
        </div>
    );
};

export default Hero;