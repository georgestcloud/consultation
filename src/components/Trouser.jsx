import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFormStorage from "../hooks/useFormStorage";

function Trouser() {

    const navigate = useNavigate();

    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(
            openSection === section ? null : section
        );
    };


    /* ==============================
       TROUSER ACTIVATION
    ============================== */

    const [trouser, setTrouser] =
        useFormStorage("trouser");


    /* ==============================
       TROUSER MEASUREMENTS
    ============================== */

    const [halfLength, setHalfLength] =
        useFormStorage("halfLength");

    const [leftPantLength, setLeftPantLength] =
        useFormStorage("leftPantLength");

    const [rightPantLength, setRightPantLength] =
        useFormStorage("rightPantLength");

    const [trouserWaist, setTrouserWaist] =
        useFormStorage("trouserWaist");

    const [trouserHips, setTrouserHips] =
        useFormStorage("trouserHips");

    const [crotch, setCrotch] =
        useFormStorage("crotch");

    const [thigh, setThigh] =
        useFormStorage("thigh");

    const [knee, setKnee] =
        useFormStorage("knee");

    const [calf, setCalf] =
        useFormStorage("calf");

    const [trouserCuff, setTrouserCuff] =
        useFormStorage("trouserCuff");


    const trouserActive = trouser === "Yes";


    return (
        <div className="container my-5">

            {/* ==============================
                TROUSER MENU
            ============================== */}

            <div className="measurement-menu-card">

                {/* MENU HEADER */}

                <button
                    type="button"
                    className="measurement-menu-button"
                    onClick={() => toggleSection("trouser")}
                >

                    <span className="measurement-menu-title">

                        <i className="bi bi-person-standing"></i>

                        Trouser Measurements

                    </span>

                    <span className="measurement-toggle">

                        {openSection === "trouser"
                            ? "−"
                            : "+"}

                    </span>

                </button>


                {/* ==============================
                    TROUSER DROPDOWN
                ============================== */}

                {openSection === "trouser" && (

                    <div className="measurement-dropdown">

                        <div className="row g-3">


                            {/* TROUSER */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="trouser"
                                    className="form-label"
                                >
                                    Trouser
                                </label>

                                <select
                                    id="trouser"
                                    className="form-select"
                                    value={trouser}
                                    onChange={(e) =>
                                        setTrouser(e.target.value)
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


                            {/* HALF LENGTH */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="halfLength"
                                    className="form-label"
                                >
                                    Half Length
                                </label>

                                <input
                                    id="halfLength"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={halfLength}
                                    onChange={(e) =>
                                        setHalfLength(e.target.value)
                                    }
                                    disabled={!trouserActive}
                                />

                            </div>


                            {/* LEFT PANT LENGTH */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="leftPantLength"
                                    className="form-label"
                                >
                                    Left Pant Length
                                </label>

                                <input
                                    id="leftPantLength"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={leftPantLength}
                                    onChange={(e) =>
                                        setLeftPantLength(e.target.value)
                                    }
                                    disabled={!trouserActive}
                                />

                            </div>


                            {/* RIGHT PANT LENGTH */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="rightPantLength"
                                    className="form-label"
                                >
                                    Right Pant Length
                                </label>

                                <input
                                    id="rightPantLength"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={rightPantLength}
                                    onChange={(e) =>
                                        setRightPantLength(e.target.value)
                                    }
                                    disabled={!trouserActive}
                                />

                            </div>


                            {/* WAIST */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="trouserWaist"
                                    className="form-label"
                                >
                                    Waist
                                </label>

                                <input
                                    id="trouserWaist"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={trouserWaist}
                                    onChange={(e) =>
                                        setTrouserWaist(e.target.value)
                                    }
                                    disabled={!trouserActive}
                                />

                            </div>


                            {/* HIPS */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="trouserHips"
                                    className="form-label"
                                >
                                    Hips
                                </label>

                                <input
                                    id="trouserHips"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={trouserHips}
                                    onChange={(e) =>
                                        setTrouserHips(e.target.value)
                                    }
                                    disabled={!trouserActive}
                                />

                            </div>


                            {/* CROTCH */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="crotch"
                                    className="form-label"
                                >
                                    Crotch
                                </label>

                                <input
                                    id="crotch"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={crotch}
                                    onChange={(e) =>
                                        setCrotch(e.target.value)
                                    }
                                    disabled={!trouserActive}
                                />

                            </div>


                            {/* THIGH */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="thigh"
                                    className="form-label"
                                >
                                    Thigh
                                </label>

                                <input
                                    id="thigh"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={thigh}
                                    onChange={(e) =>
                                        setThigh(e.target.value)
                                    }
                                    disabled={!trouserActive}
                                />

                            </div>


                            {/* KNEE */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="knee"
                                    className="form-label"
                                >
                                    Knee
                                </label>

                                <input
                                    id="knee"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={knee}
                                    onChange={(e) =>
                                        setKnee(e.target.value)
                                    }
                                    disabled={!trouserActive}
                                />

                            </div>


                            {/* CALF */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="calf"
                                    className="form-label"
                                >
                                    Calf
                                </label>

                                <input
                                    id="calf"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={calf}
                                    onChange={(e) =>
                                        setCalf(e.target.value)
                                    }
                                    disabled={!trouserActive}
                                />

                            </div>


                            {/* CUFF */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="trouserCuff"
                                    className="form-label"
                                >
                                    Cuff
                                </label>

                                <input
                                    id="trouserCuff"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={trouserCuff}
                                    onChange={(e) =>
                                        setTrouserCuff(e.target.value)
                                    }
                                    disabled={!trouserActive}
                                />

                            </div>

                        </div>

                    </div>

                )}

            </div>


            {/* ==============================
                NEXT BUTTON
            ============================== */}

          
        </div>
    );
}

export default Trouser;