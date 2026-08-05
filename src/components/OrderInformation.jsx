import { useEffect } from "react";
import useFormStorage from "../hooks/useFormStorage";

function OrderInformation() {

    const [orderNumber, setOrderNumber] = useFormStorage("orderNumber");

    // Load saved data when page opens
    useEffect(() => {

        const savedData = JSON.parse(
            sessionStorage.getItem("atafoOrder")
        ) || {};

        Object.keys(savedData).forEach((key) => {

            const field = document.getElementById(key);

            if (field && key !== "orderNumber") {
                field.value = savedData[key];
            }

        });

    }, []);

    // Automatically save whenever the user types
    useEffect(() => {

        const saveData = () => {

            const fields = document.querySelectorAll(
                "input, select, textarea"
            );

            const orderData = {};

            fields.forEach((field) => {

                if (field.id) {
                    orderData[field.id] = field.value;
                }

            });

            const existingData = JSON.parse(
                sessionStorage.getItem("atafoOrder")
            ) || {};

            sessionStorage.setItem(
                "atafoOrder",
                JSON.stringify({
                    ...existingData,
                    ...orderData
                })
            );

        };

        const fields = document.querySelectorAll(
            "input, select, textarea"
        );

        fields.forEach((field) => {
            field.addEventListener("input", saveData);
        });

        return () => {

            fields.forEach((field) => {
                field.removeEventListener("input", saveData);
            });

        };

    }, []);

    return (

        <div className="container my-5">

            <div className="card shadow border-0 rounded-4 p-4">

                <h3 className="mb-4">
                    Order Information
                </h3>

                <div className="row g-3">

                    <div className="col-md-6">

                        <label className="form-label">
                            ORDER NUMBER
                        </label>

                        <input
                            id="orderNumber"
                            className="form-control"
                            value={orderNumber}
                            onChange={(e) => setOrderNumber(e.target.value)}
                        />

                    </div>

                    <div className="col-md-6">

                        <label className="form-label">
                            DATE
                        </label>

                        <input
                            id="date"
                            type="date"
                            className="form-control"
                        />

                    </div>

                    <div className="col-md-6">

                        <label className="form-label">
                            NAME
                        </label>

                        <input
                            id="customerName"
                            className="form-control"
                        />

                    </div>

                    <div className="col-md-6">

                        <label className="form-label">
                            EMAIL
                        </label>

                        <input
                            id="email"
                            type="email"
                            className="form-control"
                        />

                    </div>

                    <div className="col-md-6">

                        <label className="form-label">
                            TELEPHONE
                        </label>

                        <input
                            id="telephone"
                            className="form-control"
                        />

                    </div>

                    <div className="col-md-3">

                        <label className="form-label">
                            HEIGHT
                        </label>

                        <input
                            id="height"
                            className="form-control"
                        />

                    </div>

                    <div className="col-md-3">

                        <label className="form-label">
                            DUE DATE
                        </label>

                        <input
                            id="dueDate"
                            type="date"
                            className="form-control"
                        />

                    </div>

                    <div className="col-md-4">

                        <label className="form-label">
                            CONSULTANT
                        </label>

                        <input
                            id="consultant"
                            className="form-control"
                        />

                    </div>

                    <div className="col-md-4">

                        <label className="form-label">
                            SHOE SIZE
                        </label>

                        <input
                            id="shoeSize"
                            className="form-control"
                        />

                    </div>

                    <div className="col-md-4">

                        <label className="form-label">
                            MEASURED BY
                        </label>

                        <input
                            id="measuredBy"
                            className="form-control"
                        />

                    </div>

                </div>

            </div>

        </div>

    );

}

export default OrderInformation;
