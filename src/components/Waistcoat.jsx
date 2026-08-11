import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFormStorage from "../hooks/useFormStorage";

function Waistcoat() {

    const navigate = useNavigate();

    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(
            openSection === section ? null : section
        );
    };


    /* ==============================
       WAISTCOAT ACTIVATION
    ============================== */

    const [waistcoat, setWaistcoat] =
        useFormStorage("waistcoat");


    /* ==============================
       WAISTCOAT MEASUREMENTS
    ============================== */

    const [frontLength, setFrontLength] =
        useFormStorage("frontLength");

    const [backLength, setBackLength] =
        useFormStorage("backLength");

    const [waistcoatChest, setWaistcoatChest] =
        useFormStorage("waistcoatChest");

    const [waistcoatStomach, setWaistcoatStomach] =
        useFormStorage("waistcoatStomach");

    const [waistcoatShoulder, setWaistcoatShoulder] =
        useFormStorage("waistcoatShoulder");

    const [waistcoatHips, setWaistcoatHips] =
        useFormStorage("waistcoatHips");

    const [waistcoatHem, setWaistcoatHem] =
        useFormStorage("waistcoatHem");

    const [waistcoatNeck, setWaistcoatNeck] =
        useFormStorage("waistcoatNeck");


    const waistcoatActive = waistcoat === "Yes";


    return (
        <div className="container my-5">

            {/* ==============================
                WAISTCOAT MENU
            ============================== */}

            <div className="measurement-menu-card">

                {/* MENU HEADER */}

                <button
                    type="button"
                    className="measurement-menu-button"
                    onClick={() => toggleSection("waistcoat")}
                >

                    <span className="measurement-menu-title">

                        <i className="bi bi-vest"></i>

                        Waistcoat

                    </span>

                    <span className="measurement-toggle">

                        {openSection === "waistcoat"
                            ? "−"
                            : "+"}

                    </span>

                </button>


                {/* ==============================
                    WAISTCOAT DROPDOWN
                ============================== */}

                {openSection === "waistcoat" && (

                    <div className="measurement-dropdown">

                        <div className="row g-3">


                            {/* WAISTCOAT ACTIVATION */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="waistcoat"
                                    className="form-label"
                                >
                                    Waistcoat
                                </label>

                                <select
                                    id="waistcoat"
                                    className="form-select"
                                    value={waistcoat}
                                    onChange={(e) =>
                                        setWaistcoat(e.target.value)
                                    }
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Yes">
                                        Yes
                                    </option>

                                    <option value="No">
                                        No
                                    </option>

                                </select>

                            </div>


                            {/* FRONT LENGTH */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="frontLength"
                                    className="form-label"
                                >
                                    Front Length
                                </label>

                                <input
                                    id="frontLength"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={frontLength}
                                    onChange={(e) =>
                                        setFrontLength(e.target.value)
                                    }
                                    disabled={!waistcoatActive}
                                />

                            </div>


                            {/* BACK LENGTH */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="backLength"
                                    className="form-label"
                                >
                                    Back Length
                                </label>

                                <input
                                    id="backLength"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={backLength}
                                    onChange={(e) =>
                                        setBackLength(e.target.value)
                                    }
                                    disabled={!waistcoatActive}
                                />

                            </div>


                            {/* CHEST */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="waistcoatChest"
                                    className="form-label"
                                >
                                    Chest
                                </label>

                                <input
                                    id="waistcoatChest"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={waistcoatChest}
                                    onChange={(e) =>
                                        setWaistcoatChest(e.target.value)
                                    }
                                    disabled={!waistcoatActive}
                                />

                            </div>


                            {/* STOMACH */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="waistcoatStomach"
                                    className="form-label"
                                >
                                    Stomach
                                </label>

                                <input
                                    id="waistcoatStomach"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={waistcoatStomach}
                                    onChange={(e) =>
                                        setWaistcoatStomach(e.target.value)
                                    }
                                    disabled={!waistcoatActive}
                                />

                            </div>


                            {/* SHOULDER */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="waistcoatShoulder"
                                    className="form-label"
                                >
                                    Shoulder
                                </label>

                                <input
                                    id="waistcoatShoulder"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={waistcoatShoulder}
                                    onChange={(e) =>
                                        setWaistcoatShoulder(e.target.value)
                                    }
                                    disabled={!waistcoatActive}
                                />

                            </div>


                            {/* HIPS */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="waistcoatHips"
                                    className="form-label"
                                >
                                    Hips
                                </label>

                                <input
                                    id="waistcoatHips"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={waistcoatHips}
                                    onChange={(e) =>
                                        setWaistcoatHips(e.target.value)
                                    }
                                    disabled={!waistcoatActive}
                                />

                            </div>


                            {/* HEM */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="waistcoatHem"
                                    className="form-label"
                                >
                                    Hem
                                </label>

                                <input
                                    id="waistcoatHem"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={waistcoatHem}
                                    onChange={(e) =>
                                        setWaistcoatHem(e.target.value)
                                    }
                                    disabled={!waistcoatActive}
                                />

                            </div>


                            {/* NECK */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="waistcoatNeck"
                                    className="form-label"
                                >
                                    Neck
                                </label>

                                <input
                                    id="waistcoatNeck"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={waistcoatNeck}
                                    onChange={(e) =>
                                        setWaistcoatNeck(e.target.value)
                                    }
                                    disabled={!waistcoatActive}
                                />

                            </div>


                        </div>

                    </div>

                )}

            </div>


            {/* ==============================
                NEXT BUTTON
            ============================== */}

            <div className="d-flex justify-content-end mt-4">

                <button
                    type="button"
                    className="next-btn"
                    onClick={() => navigate("/forms")}
                >
                    Next
                    <i className="bi bi-arrow-right ms-2"></i>
                </button>

            </div>


        </div>
    );
}

export default Waistcoat;