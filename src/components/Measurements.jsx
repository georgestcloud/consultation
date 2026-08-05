import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Measurements() {
    const navigate = useNavigate();

    const saveData = () => {
        const fields = document.querySelectorAll("input, select, textarea");
        const data = JSON.parse(sessionStorage.getItem("atafoOrder")) || {};

        fields.forEach((field) => {
            if (field.id) {
                data[field.id] = field.value;
            }
        });

        sessionStorage.setItem("atafoOrder", JSON.stringify(data));
    };

    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem("atafoOrder")) || {};

        document.querySelectorAll("input, select, textarea").forEach((field) => {
            if (field.id && data[field.id] !== undefined) {
                field.value = data[field.id];
            }
            field.addEventListener("input", saveData);
            field.addEventListener("change", saveData);
        });

        return () => {
            document.querySelectorAll("input, select, textarea").forEach((field) => {
                field.removeEventListener("input", saveData);
                field.removeEventListener("change", saveData);
            });
        };
    }, []);

    const handleNext = () => {
        saveData();
        navigate("/forms");
    };

    return (
        <div className="container my-5">
            <div className="card shadow border-0 rounded-4 p-4 mt-4">
                <h3><i className="bi bi-rulers"></i> Measurements</h3>

                <div className="row g-3">
                    <div className="col-md-4"><label className="form-label">Front Length</label><input id="frontLength" className="form-control" /></div>
                    <div className="col-md-4"><label className="form-label">Back Length</label><input id="backLength" className="form-control" /></div>
                    <div className="col-md-4"><label className="form-label">Button Point</label><input id="buttonPoint" className="form-control" /></div>
                    <div className="col-md-4"><label className="form-label">Shoulder</label><input id="shoulder" className="form-control" /></div>
                    <div className="col-md-4"><label className="form-label">Neck</label><input id="neck" className="form-control" /></div>
                    <div className="col-md-4"><label className="form-label">Chest</label><input id="chest" className="form-control" /></div>
                    <div className="col-md-4"><label className="form-label">Upper Tummy</label><input id="upperTummy" className="form-control" /></div>
                    <div className="col-md-4"><label className="form-label">Tummy</label><input id="tummy" className="form-control" /></div>
                    <div className="col-md-4"><label className="form-label">Waist</label><input id="waist" className="form-control" /></div>
                    <div className="col-md-4"><label className="form-label">Seat</label><input id="seat" className="form-control" /></div>
                    <div className="col-md-4"><label className="form-label">Left Sleeve</label><input id="leftSleeve" className="form-control" /></div>
                    <div className="col-md-4"><label className="form-label">Right Sleeve</label><input id="rightSleeve" className="form-control" /></div>
                    <div className="col-md-4"><label className="form-label">Biceps</label><input id="biceps" className="form-control" /></div>
                    <div className="col-md-4"><label className="form-label">Forearm</label><input id="forearm" className="form-control" /></div>
                    <div className="col-md-4"><label className="form-label">Cuff</label><input id="cuff" className="form-control" /></div>
                </div>

                <div className="d-flex justify-content-end mt-5">
                    <button type="button" className="next-btn" onClick={handleNext}>
                        Next <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Measurements;
