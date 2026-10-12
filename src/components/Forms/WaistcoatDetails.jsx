import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFormStorage from "../../hooks/useFormStorage";

function WaistcoatDetails() {

    const navigate = useNavigate();

    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(
            openSection === section ? null : section
        );
    };


    /* ==============================
       WAISTCOAT
    ============================== */

    const [waistcoat, setWaistcoat] =
        useFormStorage("waistcoat");


    /* ==============================
       WAISTCOAT DETAILS
    ============================== */

    const [waistcoatFabric, setWaistcoatFabric] =
        useFormStorage("waistcoatFabric");

    const [waistcoatButton, setWaistcoatButton] =
        useFormStorage("waistcoatButton");

    const [waistcoatBack, setWaistcoatBack] =
        useFormStorage("waistcoatBack");

    const [neckline, setNeckline] =
        useFormStorage("neckline");

    const [waistcoatLapel, setWaistcoatLapel] =
        useFormStorage("waistcoatLapel");

    const [curvedLapel, setCurvedLapel] =
        useFormStorage("curvedLapel");

    const [waistcoatSingleBreasted, setWaistcoatSingleBreasted] =
        useFormStorage("waistcoatSingleBreasted");

    const [waistcoatDoubleBreasted, setWaistcoatDoubleBreasted] =
        useFormStorage("waistcoatDoubleBreasted");

    const [slantedDoubleBreasted, setSlantedDoubleBreasted] =
        useFormStorage("slantedDoubleBreasted");

    const [lowerPocketFlap, setLowerPocketFlap] =
        useFormStorage("lowerPocketFlap");

    const [lowerPocketNoFlap, setLowerPocketNoFlap] =
        useFormStorage("lowerPocketNoFlap");

    const [waistcoatBottom, setWaistcoatBottom] =
        useFormStorage("waistcoatBottom");

    const [waistcoatTuxedoFabric, setWaistcoatTuxedoFabric] =
        useFormStorage("waistcoatTuxedoFabric");

    const [waistcoatAdditionalInfo, setWaistcoatAdditionalInfo] =
        useFormStorage("waistcoatAdditionalInfo");


    const waistcoatActive = waistcoat === "Yes";


    return (
        <>

            {/* ==================================================
                WAISTCOAT DETAILS CARD
                ================================================== */}

            <div className="measurement-menu-card">

                {/* ==============================
                    MENU HEADER
                ============================== */}

                <button
                    type="button"
                    className="measurement-menu-button"
                    onClick={() => toggleSection("waistcoat")}
                >

                    <span className="measurement-menu-title">

                        <i className="bi bi-vest"></i>

                        Waistcoat Details

                    </span>

                    <span className="measurement-toggle">

                        {openSection === "waistcoat"
                            ? "−"
                            : "+"}

                    </span>

                </button>


                {/* ==============================
                    DROPDOWN CONTENT
                ============================== */}

                {openSection === "waistcoat" && (

                    <div className="measurement-dropdown">

                        <div className="row g-3">


                            {/* WAISTCOAT */}

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


                            {/* WAISTCOAT FABRIC */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="waistcoatFabric"
                                    className="form-label"
                                >
                                    Waistcoat Fabric
                                </label>

                                <input
                                    id="waistcoatFabric"
                                    type="text"
                                    className="form-control"
                                    value={waistcoatFabric}
                                    onChange={(e) =>
                                        setWaistcoatFabric(e.target.value)
                                    }
                                    disabled={!waistcoatActive}
                                />

                            </div>


                            {/* BUTTON */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="waistcoatButton"
                                    className="form-label"
                                >
                                    Button
                                </label>

                                <input
                                    id="waistcoatButton"
                                    type="text"
                                    className="form-control"
                                    value={waistcoatButton}
                                    onChange={(e) =>
                                        setWaistcoatButton(e.target.value)
                                    }
                                    disabled={!waistcoatActive}
                                />

                            </div>


                            {/* BACK */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="waistcoatBack"
                                    className="form-label"
                                >
                                    Back
                                </label>

                                <select
                                    id="waistcoatBack"
                                    className="form-select"
                                    value={waistcoatBack}
                                    onChange={(e) =>
                                        setWaistcoatBack(e.target.value)
                                    }
                                    disabled={!waistcoatActive}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Lining">
                                        Lining
                                    </option>

                                    <option value="Fabric">
                                        Fabric
                                    </option>

                                </select>

                            </div>


                            {/* NECKLINE */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="neckline"
                                    className="form-label"
                                >
                                    Neckline
                                </label>

                                <select
                                    id="neckline"
                                    className="form-select"
                                    value={neckline}
                                    onChange={(e) =>
                                        setNeckline(e.target.value)
                                    }
                                    disabled={!waistcoatActive}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="V-Neck">
                                        V-Neck
                                    </option>

                                    <option value="U-Neck">
                                        U-Neck
                                    </option>

                                </select>

                            </div>


                            {/* LAPEL */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="waistcoatLapel"
                                    className="form-label"
                                >
                                    Lapel
                                </label>

                                <select
                                    id="waistcoatLapel"
                                    className="form-select"
                                    value={waistcoatLapel}
                                    onChange={(e) =>
                                        setWaistcoatLapel(e.target.value)
                                    }
                                    disabled={!waistcoatActive}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Notch">
                                        Notch
                                    </option>

                                    <option value="Peak">
                                        Peak
                                    </option>

                                    <option value="Shawl">
                                        Shawl
                                    </option>

                                </select>

                            </div>


                            {/* CURVED LAPEL */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="curvedLapel"
                                    className="form-label"
                                >
                                    Curved Lapel
                                </label>

                                <select
                                    id="curvedLapel"
                                    className="form-select"
                                    value={curvedLapel}
                                    onChange={(e) =>
                                        setCurvedLapel(e.target.value)
                                    }
                                    disabled={!waistcoatActive}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Peak">
                                        Peak
                                    </option>

                                    <option value="Shawl">
                                        Shawl
                                    </option>

                                </select>

                            </div>


                            {/* SINGLE-BREASTED */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="waistcoatSingleBreasted"
                                    className="form-label"
                                >
                                    Single-Breasted
                                </label>

                                <select
                                    id="waistcoatSingleBreasted"
                                    className="form-select"
                                    value={waistcoatSingleBreasted}
                                    onChange={(e) =>
                                        setWaistcoatSingleBreasted(
                                            e.target.value
                                        )
                                    }
                                    disabled={!waistcoatActive}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="4 Button">
                                        4 Button
                                    </option>

                                    <option value="5 Button">
                                        5 Button
                                    </option>

                                    <option value="6 Button">
                                        6 Button
                                    </option>

                                </select>

                            </div>


                            {/* DOUBLE-BREASTED */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="waistcoatDoubleBreasted"
                                    className="form-label"
                                >
                                    Double-Breasted
                                </label>

                                <select
                                    id="waistcoatDoubleBreasted"
                                    className="form-select"
                                    value={waistcoatDoubleBreasted}
                                    onChange={(e) =>
                                        setWaistcoatDoubleBreasted(
                                            e.target.value
                                        )
                                    }
                                    disabled={!waistcoatActive}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="4 Button">
                                        4 Button
                                    </option>

                                    <option value="6 Button">
                                        6 Button
                                    </option>

                                    <option value="8 Button">
                                        8 Button
                                    </option>

                                </select>

                            </div>


                            {/* SLANTED DOUBLE-BREASTED */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="slantedDoubleBreasted"
                                    className="form-label"
                                >
                                    Slanted Double-Breasted
                                </label>

                                <select
                                    id="slantedDoubleBreasted"
                                    className="form-select"
                                    value={slantedDoubleBreasted}
                                    onChange={(e) =>
                                        setSlantedDoubleBreasted(
                                            e.target.value
                                        )
                                    }
                                    disabled={!waistcoatActive}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="5 Button">
                                        5 Button
                                    </option>

                                    <option value="6 Button">
                                        6 Button
                                    </option>

                                    <option value="8 Button">
                                        8 Button
                                    </option>

                                </select>

                            </div>


                            {/* LOWER POCKET FLAP */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="lowerPocketFlap"
                                    className="form-label"
                                >
                                    Lower Pocket Flap
                                </label>

                                <select
                                    id="lowerPocketFlap"
                                    className="form-select"
                                    value={lowerPocketFlap}
                                    onChange={(e) =>
                                        setLowerPocketFlap(e.target.value)
                                    }
                                    disabled={!waistcoatActive}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Straight">
                                        Straight
                                    </option>

                                    <option value="Slanted">
                                        Slanted
                                    </option>

                                    <option value="Patch">
                                        Patch
                                    </option>

                                </select>

                            </div>


                            {/* LOWER POCKET NO FLAP */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="lowerPocketNoFlap"
                                    className="form-label"
                                >
                                    Lower Pocket No Flap
                                </label>

                                <select
                                    id="lowerPocketNoFlap"
                                    className="form-select"
                                    value={lowerPocketNoFlap}
                                    onChange={(e) =>
                                        setLowerPocketNoFlap(e.target.value)
                                    }
                                    disabled={!waistcoatActive}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Straight">
                                        Straight
                                    </option>

                                    <option value="Slanted">
                                        Slanted
                                    </option>

                                    <option value="Tuxedo">
                                        Tuxedo
                                    </option>

                                </select>

                            </div>


                            {/* WAISTCOAT BOTTOM */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="waistcoatBottom"
                                    className="form-label"
                                >
                                    Waistcoat Bottom
                                </label>

                                <select
                                    id="waistcoatBottom"
                                    className="form-select"
                                    value={waistcoatBottom}
                                    onChange={(e) =>
                                        setWaistcoatBottom(e.target.value)
                                    }
                                    disabled={!waistcoatActive}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Pointed">
                                        Pointed
                                    </option>

                                    <option value="Straight">
                                        Straight
                                    </option>

                                    <option value="Round">
                                        Round
                                    </option>

                                </select>

                            </div>


                            {/* TUXEDO FABRIC */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="waistcoatTuxedoFabric"
                                    className="form-label"
                                >
                                    Tuxedo Fabric
                                </label>

                                <select
                                    id="waistcoatTuxedoFabric"
                                    className="form-select"
                                    value={waistcoatTuxedoFabric}
                                    onChange={(e) =>
                                        setWaistcoatTuxedoFabric(
                                            e.target.value
                                        )
                                    }
                                    disabled={!waistcoatActive}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="None">
                                        None
                                    </option>

                                    <option value="Satin">
                                        Satin
                                    </option>

                                    <option value="Velvet">
                                        Velvet
                                    </option>

                                </select>

                            </div>


                            {/* ADDITIONAL INFO */}

                            <div className="col-6 col-md-4">

                                <label
                                    htmlFor="waistcoatAdditionalInfo"
                                    className="form-label"
                                >
                                    Additional Info
                                </label>

                                <input
                                    id="waistcoatAdditionalInfo"
                                    type="text"
                                    className="form-control"
                                    value={waistcoatAdditionalInfo}
                                    onChange={(e) =>
                                        setWaistcoatAdditionalInfo(
                                            e.target.value
                                        )
                                    }
                                    disabled={!waistcoatActive}
                                />

                            </div>


                        </div>

                    </div>

                )}

            </div>



        </>
    );
}

export default WaistcoatDetails;