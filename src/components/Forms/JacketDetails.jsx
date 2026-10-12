import { useState } from "react";
import useFormStorage from "../../hooks/useFormStorage";

function JacketDetails() {

    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(
            openSection === section ? null : section
        );
    };


    const [jacketFabric, setJacketFabric] =
        useFormStorage("jacketFabric");

    const [jacketColour, setJacketColour] =
        useFormStorage("jacketColour");

    const [jacketPattern, setJacketPattern] =
        useFormStorage("jacketPattern");

    const [singleBreasted, setSingleBreasted] =
        useFormStorage("singleBreasted");

    const [doubleBreasted, setDoubleBreasted] =
        useFormStorage("doubleBreasted");

    const [lapelStyle, setLapelStyle] =
        useFormStorage("lapelStyle");


    return (
        <div className="measurement-menu-card">

            {/* MENU HEADER */}

            <button
                type="button"
                className="measurement-menu-button"
                onClick={() => toggleSection("jacket")}
            >

                <span className="measurement-menu-title">

                    <i className="bi bi-scissors"></i>

                    Jacket Details

                </span>

                <span className="measurement-toggle">

                    {openSection === "jacket"
                        ? "−"
                        : "+"}

                </span>

            </button>


            {/* JACKET DETAILS */}

            {openSection === "jacket" && (

                <div className="measurement-dropdown">

                    <div className="row g-3">

                        {/* Jacket Fabric */}

                        <div className="col-6 col-md-4">

                            <label className="form-label">
                                Jacket Fabric
                            </label>

                            <input
                                id="jacketFabric"
                                className="form-control"
                                value={jacketFabric}
                                onChange={(e) =>
                                    setJacketFabric(e.target.value)
                                }
                            />

                        </div>


                        {/* Colour */}

                        <div className="col-6 col-md-4">

                            <label className="form-label">
                                Colour
                            </label>

                            <input
                                id="jacketColour"
                                className="form-control"
                                value={jacketColour}
                                onChange={(e) =>
                                    setJacketColour(e.target.value)
                                }
                            />

                        </div>


                        {/* Pattern */}

                        <div className="col-6 col-md-4">

                            <label className="form-label">
                                Pattern
                            </label>

                            <input
                                id="jacketPattern"
                                className="form-control"
                                value={jacketPattern}
                                onChange={(e) =>
                                    setJacketPattern(e.target.value)
                                }
                            />

                        </div>


                        {/* Single Breasted */}

                        <div className="col-6 col-md-4">

                            <label className="form-label">
                                Single Breasted
                            </label>

                            <select
                                id="singleBreasted"
                                className="form-select"
                                value={singleBreasted}
                                onChange={(e) =>
                                    setSingleBreasted(e.target.value)
                                }
                            >

                                <option value="">
                                    Select
                                </option>

                                <option value="1 Button">
                                    1 Button
                                </option>

                                <option value="2 Button">
                                    2 Button
                                </option>

                                <option value="3R2 Button">
                                    3R2 Button
                                </option>

                            </select>

                        </div>


                        {/* Double Breasted */}

                        <div className="col-6 col-md-4">

                            <label className="form-label">
                                Double Breasted
                            </label>

                            <select
                                id="doubleBreasted"
                                className="form-select"
                                value={doubleBreasted}
                                onChange={(e) =>
                                    setDoubleBreasted(e.target.value)
                                }
                            >

                                <option value="">
                                    Select
                                </option>

                                <option value="2 Button">
                                    2 Button
                                </option>

                                <option value="4 Button">
                                    4 Button
                                </option>

                                <option value="6 Button">
                                    6 Button
                                </option>

                            </select>

                        </div>


                        {/* Lapel Style */}

                        <div className="col-6 col-md-4">

                            <label className="form-label">
                                Lapel Style
                            </label>

                            <select
                                id="lapelStyle"
                                className="form-select"
                                value={lapelStyle}
                                onChange={(e) =>
                                    setLapelStyle(e.target.value)
                                }
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

                    </div>

                </div>

            )}

        </div>
    );
}

export default JacketDetails;