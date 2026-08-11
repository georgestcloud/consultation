import { useState } from "react";
import useFormStorage from "../hooks/useFormStorage";

function Measurements() {

    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(
            openSection === section ? null : section
        );
    };

    const [frontLength, setFrontLength] =
        useFormStorage("frontLength");

    const [backLength, setBackLength] =
        useFormStorage("backLength");

    const [halfBackLength, setHalfBackLength] =
        useFormStorage("halfBackLength");

    const [buttonPoint, setButtonPoint] =
        useFormStorage("buttonPoint");

    const [shoulder, setShoulder] =
        useFormStorage("shoulder");

    const [neck, setNeck] =
        useFormStorage("neck");

    const [chest, setChest] =
        useFormStorage("chest");

    const [hips, setHips] =
        useFormStorage("hips");

    const [upperTummy, setUpperTummy] =
        useFormStorage("upperTummy");

    const [tummy, setTummy] =
        useFormStorage("tummy");

    const [waist, setWaist] =
        useFormStorage("waist");

    const [seat, setSeat] =
        useFormStorage("seat");

    const [leftSleeve, setLeftSleeve] =
        useFormStorage("leftSleeve");

    const [rightSleeve, setRightSleeve] =
        useFormStorage("rightSleeve");

    const [biceps, setBiceps] =
        useFormStorage("biceps");

    const [forearm, setForearm] =
        useFormStorage("forearm");

    const [cuff, setCuff] =
        useFormStorage("cuff");


    return (
        <div className="container my-5">

            <div className="measurement-menu-card">

                {/* MENU HEADER */}

                <button
                    type="button"
                    className="measurement-menu-button"
                    onClick={() => toggleSection("jacket")}
                >

                    <span className="measurement-menu-title">
                        <i className="bi bi-rulers"></i>
                        Jacket Measurements
                    </span>

                    <span className="measurement-toggle">
                        {openSection === "jacket" ? "−" : "+"}
                    </span>

                </button>


                {/* MEASUREMENTS */}

                {openSection === "jacket" && (

                    <div className="measurement-dropdown">

                        <div className="row g-3">

                            <div className="col-6 col-md-4">
                                <label className="form-label">
                                    Front Length
                                </label>
                                <input
                                    id="frontLength"
                                    className="form-control"
                                    value={frontLength}
                                    onChange={(e) =>
                                        setFrontLength(e.target.value)
                                    }
                                />
                            </div>


                            <div className="col-6 col-md-4">
                                <label className="form-label">
                                    Back Length
                                </label>
                                <input
                                    id="backLength"
                                    className="form-control"
                                    value={backLength}
                                    onChange={(e) =>
                                        setBackLength(e.target.value)
                                    }
                                />
                            </div>


                            <div className="col-6 col-md-4">
                                <label className="form-label">
                                    Half Back Length
                                </label>
                                <input
                                    id="halfBackLength"
                                    className="form-control"
                                    value={halfBackLength}
                                    onChange={(e) =>
                                        setHalfBackLength(e.target.value)
                                    }
                                />
                            </div>


                            <div className="col-6 col-md-4">
                                <label className="form-label">
                                    Button Point
                                </label>
                                <input
                                    id="buttonPoint"
                                    className="form-control"
                                    value={buttonPoint}
                                    onChange={(e) =>
                                        setButtonPoint(e.target.value)
                                    }
                                />
                            </div>


                            <div className="col-6 col-md-4">
                                <label className="form-label">
                                    Shoulder
                                </label>
                                <input
                                    id="shoulder"
                                    className="form-control"
                                    value={shoulder}
                                    onChange={(e) =>
                                        setShoulder(e.target.value)
                                    }
                                />
                            </div>


                            <div className="col-6 col-md-4">
                                <label className="form-label">
                                    Neck
                                </label>
                                <input
                                    id="neck"
                                    className="form-control"
                                    value={neck}
                                    onChange={(e) =>
                                        setNeck(e.target.value)
                                    }
                                />
                            </div>


                            <div className="col-6 col-md-4">
                                <label className="form-label">
                                    Chest
                                </label>
                                <input
                                    id="chest"
                                    className="form-control"
                                    value={chest}
                                    onChange={(e) =>
                                        setChest(e.target.value)
                                    }
                                />
                            </div>


                            <div className="col-6 col-md-4">
                                <label className="form-label">
                                    Hips
                                </label>
                                <input
                                    id="hips"
                                    className="form-control"
                                    value={hips}
                                    onChange={(e) =>
                                        setHips(e.target.value)
                                    }
                                />
                            </div>


                            <div className="col-6 col-md-4">
                                <label className="form-label">
                                    Upper Tummy
                                </label>
                                <input
                                    id="upperTummy"
                                    className="form-control"
                                    value={upperTummy}
                                    onChange={(e) =>
                                        setUpperTummy(e.target.value)
                                    }
                                />
                            </div>


                            <div className="col-6 col-md-4">
                                <label className="form-label">
                                    Tummy
                                </label>
                                <input
                                    id="tummy"
                                    className="form-control"
                                    value={tummy}
                                    onChange={(e) =>
                                        setTummy(e.target.value)
                                    }
                                />
                            </div>


                            <div className="col-6 col-md-4">
                                <label className="form-label">
                                    Waist
                                </label>
                                <input
                                    id="waist"
                                    className="form-control"
                                    value={waist}
                                    onChange={(e) =>
                                        setWaist(e.target.value)
                                    }
                                />
                            </div>


                            <div className="col-6 col-md-4">
                                <label className="form-label">
                                    Seat
                                </label>
                                <input
                                    id="seat"
                                    className="form-control"
                                    value={seat}
                                    onChange={(e) =>
                                        setSeat(e.target.value)
                                    }
                                />
                            </div>


                            <div className="col-6 col-md-4">
                                <label className="form-label">
                                    Left Sleeve
                                </label>
                                <input
                                    id="leftSleeve"
                                    className="form-control"
                                    value={leftSleeve}
                                    onChange={(e) =>
                                        setLeftSleeve(e.target.value)
                                    }
                                />
                            </div>


                            <div className="col-6 col-md-4">
                                <label className="form-label">
                                    Right Sleeve
                                </label>
                                <input
                                    id="rightSleeve"
                                    className="form-control"
                                    value={rightSleeve}
                                    onChange={(e) =>
                                        setRightSleeve(e.target.value)
                                    }
                                />
                            </div>


                            <div className="col-6 col-md-4">
                                <label className="form-label">
                                    Biceps
                                </label>
                                <input
                                    id="biceps"
                                    className="form-control"
                                    value={biceps}
                                    onChange={(e) =>
                                        setBiceps(e.target.value)
                                    }
                                />
                            </div>


                            <div className="col-6 col-md-4">
                                <label className="form-label">
                                    Forearm
                                </label>
                                <input
                                    id="forearm"
                                    className="form-control"
                                    value={forearm}
                                    onChange={(e) =>
                                        setForearm(e.target.value)
                                    }
                                />
                            </div>


                            <div className="col-6 col-md-4">
                                <label className="form-label">
                                    Cuff
                                </label>
                                <input
                                    id="cuff"
                                    className="form-control"
                                    value={cuff}
                                    onChange={(e) =>
                                        setCuff(e.target.value)
                                    }
                                />
                            </div>

                        </div>

                    </div>

                )}

            </div>

        </div>
    );
}

export default Measurements;