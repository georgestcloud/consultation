import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFormStorage from "../../hooks/useFormStorage";

function ShirtDetails() {

    const navigate = useNavigate();

    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(
            openSection === section ? null : section
        );
    };


    /* ==============================
       SHIRT DETAILS
    ============================== */

    const [shirtFabric, setShirtFabric] =
        useFormStorage("shirtFabric");

    const [shirtButton, setShirtButton] =
        useFormStorage("shirtButton");

    const [frontStyle, setFrontStyle] =
        useFormStorage("frontStyle");

    const [collar, setCollar] =
        useFormStorage("collar");

    const [placket, setPlacket] =
        useFormStorage("placket");

    const [cuff, setCuff] =
        useFormStorage("cuff");

    const [contrast, setContrast] =
        useFormStorage("contrast");

    const [monogram, setMonogram] =
        useFormStorage("monogram");

    const [monogramPosition, setMonogramPosition] =
        useFormStorage("monogramPosition");

    const [shirtAdditionalInfo, setShirtAdditionalInfo] =
        useFormStorage("shirtAdditionalInfo");


    return (
        <>

            {/* ==================================================
                SHIRT DETAILS CARD
            ================================================== */}

            <div className="measurement-menu-card">

                {/* ==============================
                    MENU HEADER
                ============================== */}

                <button
                    type="button"
                    className="measurement-menu-button"
                    onClick={() => toggleSection("shirt")}
                >

                    <span className="measurement-menu-title">

                        <i className="bi bi-person-standing"></i>

                        Shirt Details

                    </span>

                    <span className="measurement-toggle">

                        {openSection === "shirt"
                            ? "−"
                            : "+"}

                    </span>

                </button>


                {/* ==============================
                    DROPDOWN CONTENT
                ============================== */}

                {openSection === "shirt" && (

                    <div className="measurement-dropdown">

                        <div className="row g-3">


                            {/* SHIRT FABRIC */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="shirtFabric"
                                    className="form-label"
                                >
                                    Shirt Fabric
                                </label>

                                <input
                                    id="shirtFabric"
                                    type="text"
                                    className="form-control"
                                    value={shirtFabric}
                                    onChange={(e) =>
                                        setShirtFabric(e.target.value)
                                    }
                                />

                            </div>


                            {/* BUTTON */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="shirtButton"
                                    className="form-label"
                                >
                                    Button
                                </label>

                                <input
                                    id="shirtButton"
                                    type="text"
                                    className="form-control"
                                    value={shirtButton}
                                    onChange={(e) =>
                                        setShirtButton(e.target.value)
                                    }
                                />

                            </div>


                            {/* FRONT STYLE */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="frontStyle"
                                    className="form-label"
                                >
                                    Front Style
                                </label>

                                <select
                                    id="frontStyle"
                                    className="form-select"
                                    value={frontStyle}
                                    onChange={(e) =>
                                        setFrontStyle(e.target.value)
                                    }
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Normal">
                                        Normal
                                    </option>

                                    <option value="Plain Bib">
                                        Plain Bib
                                    </option>

                                    <option value="Pleated Bib">
                                        Pleated Bib
                                    </option>

                                </select>

                            </div>


                            {/* COLLAR */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="collar"
                                    className="form-label"
                                >
                                    Collar
                                </label>

                                <input
                                    id="collar"
                                    type="text"
                                    className="form-control"
                                    value={collar}
                                    onChange={(e) =>
                                        setCollar(e.target.value)
                                    }
                                />

                            </div>


                            {/* PLACKET */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="placket"
                                    className="form-label"
                                >
                                    Placket
                                </label>

                                <select
                                    id="placket"
                                    className="form-select"
                                    value={placket}
                                    onChange={(e) =>
                                        setPlacket(e.target.value)
                                    }
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Placket">
                                        Placket
                                    </option>

                                    <option value="No Placket">
                                        No Placket
                                    </option>

                                    <option value="Concealed">
                                        Concealed
                                    </option>

                                </select>

                            </div>


                            {/* CUFF */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="cuff"
                                    className="form-label"
                                >
                                    Cuff
                                </label>

                                <select
                                    id="cuff"
                                    className="form-select"
                                    value={cuff}
                                    onChange={(e) =>
                                        setCuff(e.target.value)
                                    }
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Button">
                                        Button
                                    </option>

                                    <option value="Double">
                                        Double
                                    </option>

                                </select>

                            </div>


                            {/* CONTRAST */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="contrast"
                                    className="form-label"
                                >
                                    Contrast
                                </label>

                                <select
                                    id="contrast"
                                    className="form-select"
                                    value={contrast}
                                    onChange={(e) =>
                                        setContrast(e.target.value)
                                    }
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Inner Collar">
                                        Inner Collar
                                    </option>

                                    <option value="Collar">
                                        Collar
                                    </option>

                                    <option value="Collar & Cuff">
                                        Collar & Cuff
                                    </option>

                                </select>

                            </div>


                            {/* MONOGRAM */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="monogram"
                                    className="form-label"
                                >
                                    Monogram
                                </label>

                                <input
                                    id="monogram"
                                    type="text"
                                    className="form-control"
                                    value={monogram}
                                    onChange={(e) =>
                                        setMonogram(e.target.value)
                                    }
                                />

                            </div>


                            {/* MONOGRAM POSITION */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="monogramPosition"
                                    className="form-label"
                                >
                                    Monogram Position
                                </label>

                                <select
                                    id="monogramPosition"
                                    className="form-select"
                                    value={monogramPosition}
                                    onChange={(e) =>
                                        setMonogramPosition(e.target.value)
                                    }
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Cuff">
                                        Cuff
                                    </option>

                                    <option value="Tummy">
                                        Tummy
                                    </option>

                                </select>

                            </div>


                            {/* ADDITIONAL INFO */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="shirtAdditionalInfo"
                                    className="form-label"
                                >
                                    Additional Info
                                </label>

                                <input
                                    id="shirtAdditionalInfo"
                                    type="text"
                                    className="form-control"
                                    value={shirtAdditionalInfo}
                                    onChange={(e) =>
                                        setShirtAdditionalInfo(
                                            e.target.value
                                        )
                                    }
                                />

                            </div>


                        </div>

                    </div>

                )}

            </div>


            {/* ==================================================
                STANDALONE NAVIGATION
                OUTSIDE THE CARD
            ================================================== */}

            <div
                className="d-flex justify-content-between align-items-center mt-4"
                style={{ width: "100%" }}
            >

                {/* PREVIOUS */}

                <button
                    type="button"
                    className="next-btn"
                    onClick={() => navigate("/")}
                >

                    <i className="bi bi-arrow-left me-2"></i>

                    Previous

                </button>


                {/* SUBMIT */}

                <button
                    type="submit"
                    className="next-btn"
                >

                    Submit

                    <i className="bi bi-check-lg ms-2"></i>

                </button>

            </div>

        </>
    );
}

export default ShirtDetails;