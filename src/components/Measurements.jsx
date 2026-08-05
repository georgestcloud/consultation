import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Measurements() {

    const navigate = useNavigate();

    useEffect(() => {

        const savedData = JSON.parse(
            sessionStorage.getItem("atafoOrder")
        ) || {};

        Object.keys(savedData).forEach((key) => {

            const field = document.getElementById(key);

            if (field) {
                field.value = savedData[key];
            }

        });

    }, []);


    const handleNext = () => {

        const fields = document.querySelectorAll(
            "input, select, textarea"
        );

        const measurementData = {};

        fields.forEach((field) => {

            if (field.id) {
                measurementData[field.id] = field.value;
            }

        });

        const existingData = JSON.parse(
            sessionStorage.getItem("atafoOrder")
        ) || {};

        sessionStorage.setItem(
            "atafoOrder",
            JSON.stringify({
                ...existingData,
                ...measurementData
            })
        );

        navigate("/forms");

    };


    return (

        <div className="container my-5">

            <div className="card shadow border-0 rounded-4 p-4 mt-4">

                <h3>
                    <i className="bi bi-rulers"></i> Measurements
                </h3>

                <div className="row g-3">

                    <div className="col-md-4">
                        <label className="form-label">Front Length</label>
                        <input id="frontLength" name="frontLength" className="form-control" />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Back Length</label>
                        <input id="backLength" name="backLength" className="form-control" />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Button Point</label>
                        <input id="buttonPoint" name="buttonPoint" className="form-control" />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Shoulder</label>
                        <input id="shoulder" name="shoulder" className="form-control" />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Neck</label>
                        <input id="neck" name="neck" className="form-control" />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Chest</label>
                        <input id="chest" name="chest" className="form-control" />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Upper Tummy</label>
                        <input id="upperTummy" name="upperTummy" className="form-control" />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Tummy</label>
                        <input id="tummy" name="tummy" className="form-control" />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Waist</label>
                        <input id="waist" name="waist" className="form-control" />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Seat</label>
                        <input id="seat" name="seat" className="form-control" />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Left Sleeve</label>
                        <input id="leftSleeve" name="leftSleeve" className="form-control" />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Right Sleeve</label>
                        <input id="rightSleeve" name="rightSleeve" className="form-control" />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Biceps</label>
                        <input id="biceps" name="biceps" className="form-control" />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Forearm</label>
                        <input id="forearm" name="forearm" className="form-control" />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Cuff</label>
                        <input id="cuff" name="cuff" className="form-control" />
                    </div>

                </div>

                <div className="d-flex justify-content-end mt-5">

                    <button
                        type="button"
                        className="next-btn"
                        onClick={handleNext}
                    >
                        Next
                        <i className="bi bi-arrow-right ms-2"></i>
                    </button>

                </div>

            </div>

        </div>

    );

}

export default Measurements;
