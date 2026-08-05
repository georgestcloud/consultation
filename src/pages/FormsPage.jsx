import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function FormsPage() {
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
        useEffect(() => {

        const saveData = () => {

            const fields = document.querySelectorAll(
                "input, select, textarea"
            );

            const formData = {};

            fields.forEach((field) => {

                if (field.id) {
                    formData[field.id] = field.value;
                }

            });

            const existingData = JSON.parse(
                sessionStorage.getItem("atafoOrder")
            ) || {};

            sessionStorage.setItem(
                "atafoOrder",
                JSON.stringify({
                    ...existingData,
                    ...formData
                })
            );

        };

        const fields = document.querySelectorAll(
            "input, select, textarea"
        );

        fields.forEach((field) => {
            field.addEventListener("input", saveData);
            field.addEventListener("change", saveData);
        });

        return () => {

            fields.forEach((field) => {
                field.removeEventListener("input", saveData);
                field.removeEventListener("change", saveData);
            });

        };

    }, []);

    const handleSubmit = (e) => {

        e.preventDefault();

        const fields = document.querySelectorAll(
            "input, select, textarea"
        );

        const formData = {};

        fields.forEach((field) => {
            if (!field.id) return;

            if (field.value !== "") {
                formData[field.id] = field.value;
            }
        });

        const existingData = JSON.parse(
            sessionStorage.getItem("atafoOrder")
        ) || {};

        const finalData = {
            ...existingData,
            ...formData
        };

        sessionStorage.setItem(
            "atafoOrder",
            JSON.stringify(finalData)
        );

        console.log(finalData);

        alert("Order details saved successfully");

    };

    




    return (
        <>
            <Navbar />

            <form onSubmit={handleSubmit}>

            <div className="container my-5">


                {/* Jacket Details */}

                <div className="card p-4 mb-4">

                    <h3>
                        <i className="bi bi-scissors"></i> Jacket Details
                    </h3>

                    <div className="row g-3">

                        <div className="col-md-4">
                            <label>Jacket Fabric</label>
                            <input
                                id="jacketFabric"
                                className="form-control"
                            />
                        </div>


                        <div className="col-md-4">
                            <label>Colour</label>
                            <input
                                id="jacketColour"
                                className="form-control"
                            />
                        </div>


                        <div className="col-md-4">
                            <label>Pattern</label>
                            <input
                                id="jacketPattern"
                                className="form-control"
                            />
                        </div>

                    </div>

                </div>



                {/* Jacket Style */}

                <div className="card p-4 mb-4">

                    <h3>
                        <i className="bi bi-person-badge"></i> Jacket Style
                    </h3>


                    <div className="row g-3">


                        <div className="col-md-4">

                            <label>Single Breasted</label>

                            <select
                                id="singleBreasted"
                                className="form-select"
                            >

                                <option value="">Select</option>
                                <option>1 Button</option>
                                <option>2 Button</option>
                                <option>3R2 Button</option>

                            </select>

                        </div>



                        <div className="col-md-4">

                            <label>Double Breasted</label>

                            <select
                                id="doubleBreasted"
                                className="form-select"
                            >

                                <option value="">Select</option>
                                <option>2 Button</option>
                                <option>4 Button</option>
                                <option>6 Button</option>

                            </select>

                        </div>



                        <div className="col-md-4">

                            <label>Lapel Style</label>

                            <select
                                id="lapelStyle"
                                className="form-select"
                            >

                                <option value="">Select</option>
                                <option>Notch</option>
                                <option>Peak</option>
                                <option>Shawl</option>

                            </select>

                        </div>


                    </div>

                </div>




                {/* Tuxedo Options */}

                <div className="card p-4 mb-4">

                    <h3>
                        <i className="bi bi-stars"></i> Tuxedo Options
                    </h3>


                    <div className="row g-3">


                        <div className="col-md-4">

                            <label>Tuxedo</label>

                            <select
                                id="tuxedo"
                                className="form-select"
                            >

                                <option value="">Select</option>
                                <option>Yes</option>
                                <option>No</option>

                            </select>

                        </div>



                        <div className="col-md-4">

                            <label>Tuxedo Fabric</label>

                            <select
                                id="tuxedoFabric"
                                className="form-select"
                            >

                                <option value="">Select</option>
                                <option>Satin</option>
                                <option>Velvet</option>

                            </select>

                        </div>



                        <div className="col-md-4">

                            <label>Lapel Buttonhole</label>

                            <select
                                id="lapelButtonhole"
                                className="form-select"
                            >

                                <option value="">Select</option>
                                <option>Straight</option>
                                <option>Key Hole</option>

                            </select>

                        </div>


                    </div>

                </div>
                                {/* Pockets & Finishing */}

                <div className="card p-4 mb-4">

                    <h3>
                        <i className="bi bi-briefcase"></i> Pockets &amp; Finishing
                    </h3>

                    <div className="row g-3">

                        <div className="col-md-4">
                            <label>Lapel Trimming</label>
                            <select id="lapelTrimming" className="form-select">
                                <option value="">Select</option>
                                <option>Piping</option>
                                <option>Taping</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Chest Pocket</label>
                            <select id="chestPocket" className="form-select">
                                <option value="">Select</option>
                                <option>Normal</option>
                                <option>Patch</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Lower Pocket</label>
                            <select id="lowerPocket" className="form-select">
                                <option value="">Select</option>
                                <option>Tuxedo</option>
                                <option>Straight</option>
                                <option>Slanted</option>
                                <option>Patch</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Ticket Pocket</label>
                            <select id="ticketPocket" className="form-select">
                                <option value="">Select</option>
                                <option>Tuxedo</option>
                                <option>Straight</option>
                                <option>Slanted</option>
                                <option>Patch</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Monogram</label>
                            <input
                                id="monogram"
                                maxLength="5"
                                className="form-control"
                            />
                        </div>


                    </div>

                </div>




                {/* Trouser Additional Info */}

                <div className="card p-4 mb-4">

                    <h3>
                        <i className="bi bi-sliders"></i> Trouser Additional Info
                    </h3>


                    <div className="row g-3">


                        <div className="col-md-4">
                            <label>Trouser Fabric</label>
                            <input
                                id="trouserFabric"
                                className="form-control"
                            />
                        </div>


                        <div className="col-md-4">
                            <label>Button</label>
                            <input
                                id="trouserButton"
                                className="form-control"
                            />
                        </div>


                        <div className="col-md-4">
                            <label>Tuxedo</label>
                            <select
                                id="trouserTuxedo"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Tuxedo Fabric</label>
                            <select
                                id="trouserTuxedoFabric"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>Satin</option>
                                <option>Velvet</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Waist Extension</label>
                            <select
                                id="waistExtension"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>Normal</option>
                                <option>Longer</option>
                                <option>Gukha</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Waistband</label>
                            <select
                                id="waistband"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>Buckles</option>
                                <option>Loops</option>
                                <option>Both</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Waistband Width</label>
                            <select
                                id="waistbandWidth"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>Normal</option>
                                <option>4.5</option>
                                <option>5.5</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Trouser Pleats</label>
                            <select
                                id="trouserPleats"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>None</option>
                                <option>Single</option>
                                <option>Double</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Side Pocket</label>
                            <select
                                id="sidePocket"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>Tuxedo</option>
                                <option>Straight</option>
                                <option>Slanted</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Trouser Cuff</label>
                            <select
                                id="trouserCuff"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>Normal</option>
                                <option>Turnup 3.8</option>
                                <option>Turnup 5.0</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Additional Info</label>
                            <input
                                id="trouserAdditionalInfo"
                                className="form-control"
                            />
                        </div>


                    </div>

                </div>
                                {/* Waistcoat Additional Info */}

                <div className="card p-4 mb-4">

                    <h3>
                        <i className="bi bi-vest"></i> Waistcoat Additional Info
                    </h3>

                    <div className="row g-3">

                        <div className="col-md-4">
                            <label>Waistcoat Fabric</label>
                            <input
                                id="waistcoatFabric"
                                className="form-control"
                            />
                        </div>


                        <div className="col-md-4">
                            <label>Button</label>
                            <input
                                id="waistcoatButton"
                                className="form-control"
                            />
                        </div>


                        <div className="col-md-4">
                            <label>Back</label>
                            <select
                                id="waistcoatBack"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>Lining</option>
                                <option>Fabric</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Neckline</label>
                            <select
                                id="neckline"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>V-Neck</option>
                                <option>U-Neck</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Lapel</label>
                            <select
                                id="waistcoatLapel"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>Notch</option>
                                <option>Peak</option>
                                <option>Shawl</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Curved Lapel</label>
                            <select
                                id="curvedLapel"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>Peak</option>
                                <option>Shawl</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Single-Breasted</label>
                            <select
                                id="waistcoatSingleBreasted"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>4 Button</option>
                                <option>5 Button</option>
                                <option>6 Button</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Double-Breasted</label>
                            <select
                                id="waistcoatDoubleBreasted"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>4 Button</option>
                                <option>6 Button</option>
                                <option>8 Button</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Slanted Double-Breasted</label>
                            <select
                                id="slantedDoubleBreasted"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>5 Button</option>
                                <option>6 Button</option>
                                <option>8 Button</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Lower Pocket Flap</label>
                            <select
                                id="lowerPocketFlap"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>Straight</option>
                                <option>Slanted</option>
                                <option>Patch</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Lower Pocket No Flap</label>
                            <select
                                id="lowerPocketNoFlap"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>Straight</option>
                                <option>Slanted</option>
                                <option>Tuxedo</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Waistcoat Bottom</label>
                            <select
                                id="waistcoatBottom"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>Pointed</option>
                                <option>Straight</option>
                                <option>Round</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Tuxedo Fabric</label>
                            <select
                                id="waistcoatTuxedoFabric"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>None</option>
                                <option>Satin</option>
                                <option>Velvet</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Additional Info</label>
                            <input
                                id="waistcoatAdditionalInfo"
                                className="form-control"
                            />
                        </div>

                    </div>

                </div>
                                {/* Shirt Details */}

                <div className="card p-4 mb-4">

                    <h3>
                        <i className="bi bi-person-lines-fill"></i> Shirt Details
                    </h3>

                    <div className="row g-3">

                        <div className="col-md-4">
                            <label>Shirt Fabric</label>
                            <input
                                id="shirtFabric"
                                className="form-control"
                            />
                        </div>


                        <div className="col-md-4">
                            <label>Button</label>
                            <input
                                id="shirtButton"
                                className="form-control"
                            />
                        </div>


                        <div className="col-md-4">
                            <label>Front Style</label>
                            <select
                                id="frontStyle"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>Normal</option>
                                <option>Plain Bib</option>
                                <option>Pleated Bib</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Collar</label>
                            <select
                                id="collar"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>Classic</option>
                                <option>Spread</option>
                                <option>Cutaway</option>
                                <option>Button Down</option>
                                <option>Wing</option>
                                <option>Mandarin</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Placket</label>
                            <select
                                id="placket"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>Placket</option>
                                <option>No Placket</option>
                                <option>Concealed</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Cuff</label>
                            <select
                                id="cuffType"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>Button</option>
                                <option>Double</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Contrast</label>
                            <select
                                id="contrast"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>Inner Collar</option>
                                <option>Collar</option>
                                <option>Collar & Cuff</option>
                            </select>
                        </div>


                        <div className="col-md-4">
                            <label>Monogram</label>
                            <input
                                id="shirtMonogram"
                                maxLength="5"
                                className="form-control"
                            />
                        </div>


                        <div className="col-md-4">
                            <label>Monogram Position</label>
                            <select
                                id="monogramPosition"
                                className="form-select"
                            >
                                <option value="">Select</option>
                                <option>Cuff</option>
                                <option>Tummy</option>
                            </select>
                        </div>


                        <div className="col-md-12">
                            <label>Additional Info</label>
                            <textarea
                                id="shirtAdditionalInfo"
                                rows="4"
                                className="form-control"
                            ></textarea>
                        </div>

                    </div>

                </div>



{/* Buttons */}

<div className="d-flex justify-content-between mt-5">

    <Link to="/" className="back-btn">
        <i className="bi bi-arrow-left me-2"></i>
        Back
    </Link>


    <button type="submit" className="next-btn">
        Submit
        <i className="bi bi-check-circle-fill ms-2"></i>
    </button>

</div>
                            </div>

            </form>

            <Footer />

        </>
    );
}

export default FormsPage;
