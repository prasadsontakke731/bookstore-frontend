/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

function Payment() {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        address: "",

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const shipping_address = {
            first_name: formData.fname,
            last_name: formData.lname,
            address: formData.address,
            email: formData.email,

        };
        var options = {
            key: "rzp_test_vv1FCZvuDRF6lQ",
            key_secret: "P4JAUwn4VdE6xDLJ6p2Zy8RQ",
            amount: parseInt(formData.totalAmount) * 100,
            currency: "INR",
            name: "Book Store",
            description: "for testing purpose",
            handler: function (response) {
                const paymentId = response.razorpay_payment_id;
                console.log("paymant id", paymentId, shipping_address);
                setFormData({
                    fname: "",
                    lname: "",
                    email: "",
                    mobile: "",
                    address: "",

                });
            },
            theme: {
                color: "#07a291db",
            },
        };
        var pay = new window.Razorpay(options);
        pay.open();
    };
    return (
        <div className="container  pt-20">
            <div className="card p-4 shadow-lg" style={{ width: "60%" }}>
                <h2 className="mb-4 text-center" style={{ color: "#07a291db" }}>
                    Checkout Form
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className=""
                    style={{ flexDirection: "column" }}
                >
                    <div className="text-center bg-slate-100 ">
                        <div className="">
                            <div className="">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="First Name"
                                    name="fname"
                                    value={formData.fname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="">
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Last Name"
                                    name="lname"
                                    value={formData.lname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="">
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Mobile"
                                    name="mobile"
                                    minLength={10}
                                    maxLength={10}
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>





                    </div>
                    <button
                        type="submit"
                        style={{
                            background: "#07a291db",
                            borderColor: "#07a291db",
                            fontSize: "19px",
                        }}
                        className="btn btn-primary"
                    >
                        Checkout
                    </button>
                </form>
            </div>
        </div>


    )
}

export default Payment