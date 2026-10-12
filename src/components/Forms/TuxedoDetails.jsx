import { useState } from "react";
import useFormStorage from "../../hooks/useFormStorage";

function Tuxedo() {

    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(
            openSection === section ? null : section
        );
    };


    // ================= TUXEDO =================

    const [tuxedo, setTuxedo] =
        useFormStorage("tuxedo");

    const [tuxedoFabric, setTuxedoFabric] =
        useFormStorage("tuxedoFabric");

    const [lapelButtonhole, setLapelButtonhole] =
        useFormStorage("lapelButtonhole");

    const [lapelTrimming, setLapelTrimming] =
        useFormStorage("lapelTrimming");

    const [chestPocket, setChestPocket] =
        useFormStorage("chestPocket");

    const [lowerPocket, setLowerPocket] =
        useFormStorage("lowerPocket");

    const [ticketPocket, setTicketPocket] =
        useFormStorage("ticketPocket");

    const [monogram, setMonogram] =
        useFormStorage("monogram");

    const [tuxedoAdditionalInfo, setTuxedoAdditionalInfo] =
        useFormStorage("tuxedoAdditionalInfo");


    // ================= TUXEDO TROUSER =================

    const [trouserTuxedo, setTrouserTuxedo] =
        useFormStorage("trouserTuxedo");

    const [trouserFabric, setTrouserFabric] =
        useFormStorage("trouserFabric");

    const [trouserTuxedoFabric, setTrouserTuxedoFabric] =
        useFormStorage("trouserTuxedoFabric");

    const [waistExtension, setWaistExtension] =
        useFormStorage("waistExtension");

    const [waistband, setWaistband] =
        useFormStorage("waistband");

    const [waistbandWidth, setWaistbandWidth] =
        useFormStorage("waistbandWidth");

    const [trouserPleats, setTrouserPleats] =
        useFormStorage("trouserPleats");

    const [sidePocket, setSidePocket] =
        useFormStorage("sidePocket");

    const [trouserCuff, setTrouserCuff] =
        useFormStorage("trouserCuff");

    const [trouserAdditionalInfo, setTrouserAdditionalInfo] =
        useFormStorage("trouserAdditionalInfo");


    const tuxedoActive = tuxedo === "Yes";
    const trouserActive = trouserTuxedo === "Yes";


    return (

        <div>

            {/* ================================================= */}
            {/* TUXEDO */}
            {/* ================================================= */}

            <div className="measurement-menu-card">

                {/* MENU HEADER */}

                <button
                    type="button"
                    className="measurement-menu-button"
                    onClick={() => toggleSection("tuxedo")}
                >

                    <span className="measurement-menu-title">

                        <i className="bi bi-stars"></i>

                        Tuxedo

                    </span>

                    <span className="measurement-toggle">

                        {openSection === "tuxedo"
                            ? "−"
                            : "+"}

                    </span>

                </button>


                {/* TUXEDO DETAILS */}

                {openSection === "tuxedo" && (

                    <div className="measurement-dropdown">

                        <div className="row g-3">

                            {/* Tuxedo */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Tuxedo
                                </label>

                                <select
                                    id="tuxedo"
                                    className="form-select"
                                    value={tuxedo}
                                    onChange={(e) =>
                                        setTuxedo(e.target.value)
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


                            {/* Tuxedo Fabric */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Tuxedo Fabric
                                </label>

                                <select
                                    id="tuxedoFabric"
                                    className="form-select"
                                    value={tuxedoFabric}
                                    onChange={(e) =>
                                        setTuxedoFabric(e.target.value)
                                    }
                                    disabled={!tuxedoActive}
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


                            {/* Lapel Buttonhole */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Lapel Buttonhole
                                </label>

                                <select
                                    id="lapelButtonhole"
                                    className="form-select"
                                    value={lapelButtonhole}
                                    onChange={(e) =>
                                        setLapelButtonhole(e.target.value)
                                    }
                                    disabled={!tuxedoActive}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Straight">
                                        Straight
                                    </option>

                                    <option value="Key Hole">
                                        Key Hole
                                    </option>

                                </select>

                            </div>


                            {/* Lapel Trimming */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Lapel Trimming
                                </label>

                                <select
                                    id="lapelTrimming"
                                    className="form-select"
                                    value={lapelTrimming}
                                    onChange={(e) =>
                                        setLapelTrimming(e.target.value)
                                    }
                                    disabled={!tuxedoActive}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Piping">
                                        Piping
                                    </option>

                                    <option value="Taping">
                                        Taping
                                    </option>

                                </select>

                            </div>


                            {/* Chest Pocket */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Chest Pocket
                                </label>

                                <select
                                    id="chestPocket"
                                    className="form-select"
                                    value={chestPocket}
                                    onChange={(e) =>
                                        setChestPocket(e.target.value)
                                    }
                                    disabled={!tuxedoActive}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Normal">
                                        Normal
                                    </option>

                                    <option value="Patch">
                                        Patch
                                    </option>

                                </select>

                            </div>


                            {/* Lower Pocket */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Lower Pocket
                                </label>

                                <select
                                    id="lowerPocket"
                                    className="form-select"
                                    value={lowerPocket}
                                    onChange={(e) =>
                                        setLowerPocket(e.target.value)
                                    }
                                    disabled={!tuxedoActive}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Tuxedo">
                                        Tuxedo
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


                            {/* Ticket Pocket */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Ticket Pocket
                                </label>

                                <select
                                    id="ticketPocket"
                                    className="form-select"
                                    value={ticketPocket}
                                    onChange={(e) =>
                                        setTicketPocket(e.target.value)
                                    }
                                    disabled={!tuxedoActive}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Tuxedo">
                                        Tuxedo
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


                            {/* Monogram */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Monogram
                                </label>

                                <input
                                    id="monogram"
                                    maxLength="5"
                                    className="form-control"
                                    value={monogram}
                                    onChange={(e) =>
                                        setMonogram(e.target.value)
                                    }
                                    disabled={!tuxedoActive}
                                />

                            </div>


                            {/* Additional Info */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Additional Info
                                </label>

                                <input
                                    id="tuxedoAdditionalInfo"
                                    className="form-control"
                                    value={tuxedoAdditionalInfo}
                                    onChange={(e) =>
                                        setTuxedoAdditionalInfo(e.target.value)
                                    }
                                    disabled={!tuxedoActive}
                                />

                            </div>

                        </div>

                    </div>

                )}

            </div>


            {/* ================================================= */}
            {/* TUXEDO TROUSER */}
            {/* ================================================= */}

            <div className="measurement-menu-card">

                {/* MENU HEADER */}

                <button
                    type="button"
                    className="measurement-menu-button"
                    onClick={() => toggleSection("tuxedoTrouser")}
                >

                    <span className="measurement-menu-title">

                        <i className="bi bi-sliders"></i>

                        Tuxedo-Trouser

                    </span>

                    <span className="measurement-toggle">

                        {openSection === "tuxedoTrouser"
                            ? "−"
                            : "+"}

                    </span>

                </button>


                {/* TUXEDO TROUSER DETAILS */}

                {openSection === "tuxedoTrouser" && (

                    <div className="measurement-dropdown">

                        <div className="row g-3">

                            {/* Tuxedo */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Tuxedo
                                </label>

                                <select
                                    id="trouserTuxedo"
                                    className="form-select"
                                    value={trouserTuxedo}
                                    onChange={(e) =>
                                        setTrouserTuxedo(e.target.value)
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


                            {/* Trouser Fabric */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Trouser Fabric
                                </label>

                                <input
                                    id="trouserFabric"
                                    className="form-control"
                                    value={trouserFabric}
                                    onChange={(e) =>
                                        setTrouserFabric(e.target.value)
                                    }
                                    disabled={!trouserActive}
                                />

                            </div>


                            {/* Tuxedo Fabric */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Tuxedo Fabric
                                </label>

                                <select
                                    id="trouserTuxedoFabric"
                                    className="form-select"
                                    value={trouserTuxedoFabric}
                                    onChange={(e) =>
                                        setTrouserTuxedoFabric(e.target.value)
                                    }
                                    disabled={!trouserActive}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Satin">
                                        Satin
                                    </option>

                                    <option value="Velvet">
                                        Velvet
                                    </option>

                                </select>

                            </div>


                            {/* Waist Extension */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Waist Extension
                                </label>

                                <select
                                    id="waistExtension"
                                    className="form-select"
                                    value={waistExtension}
                                    onChange={(e) =>
                                        setWaistExtension(e.target.value)
                                    }
                                    disabled={!trouserActive}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Normal">
                                        Normal
                                    </option>

                                    <option value="Longer">
                                        Longer
                                    </option>

                                    <option value="Gukha">
                                        Gukha
                                    </option>

                                </select>

                            </div>


                            {/* Waistband */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Waistband
                                </label>

                                <select
                                    id="waistband"
                                    className="form-select"
                                    value={waistband}
                                    onChange={(e) =>
                                        setWaistband(e.target.value)
                                    }
                                    disabled={!trouserActive}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Buckles">
                                        Buckles
                                    </option>

                                    <option value="Loops">
                                        Loops
                                    </option>

                                    <option value="Both">
                                        Both
                                    </option>

                                </select>

                            </div>


                            {/* Waistband Width */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Waistband Width
                                </label>

                                <select
                                    id="waistbandWidth"
                                    className="form-select"
                                    value={waistbandWidth}
                                    onChange={(e) =>
                                        setWaistbandWidth(e.target.value)
                                    }
                                    disabled={!trouserActive}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Normal">
                                        Normal
                                    </option>

                                    <option value="4.5">
                                        4.5
                                    </option>

                                    <option value="5.5">
                                        5.5
                                    </option>

                                </select>

                            </div>


                            {/* Trouser Pleats */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Trouser Pleats
                                </label>

                                <select
                                    id="trouserPleats"
                                    className="form-select"
                                    value={trouserPleats}
                                    onChange={(e) =>
                                        setTrouserPleats(e.target.value)
                                    }
                                    disabled={!trouserActive}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="None">
                                        None
                                    </option>

                                    <option value="Single">
                                        Single
                                    </option>

                                    <option value="Double">
                                        Double
                                    </option>

                                </select>

                            </div>


                            {/* Side Pocket */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Side Pocket
                                </label>

                                <select
                                    id="sidePocket"
                                    className="form-select"
                                    value={sidePocket}
                                    onChange={(e) =>
                                        setSidePocket(e.target.value)
                                    }
                                    disabled={!trouserActive}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Tuxedo">
                                        Tuxedo
                                    </option>

                                    <option value="Straight">
                                        Straight
                                    </option>

                                    <option value="Slanted">
                                        Slanted
                                    </option>

                                </select>

                            </div>


                            {/* Trouser Cuff */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Trouser Cuff
                                </label>

                                <select
                                    id="trouserCuff"
                                    className="form-select"
                                    value={trouserCuff}
                                    onChange={(e) =>
                                        setTrouserCuff(e.target.value)
                                    }
                                    disabled={!trouserActive}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Normal">
                                        Normal
                                    </option>

                                    <option value="Turnup 3.8">
                                        Turnup 3.8
                                    </option>

                                    <option value="Turnup 5.0">
                                        Turnup 5.0
                                    </option>

                                </select>

                            </div>


                            {/* Additional Info */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Additional Info
                                </label>

                                <input
                                    id="trouserAdditionalInfo"
                                    className="form-control"
                                    value={trouserAdditionalInfo}
                                    onChange={(e) =>
                                        setTrouserAdditionalInfo(e.target.value)
                                    }
                                    disabled={!trouserActive}
                                />

                            </div>

                        </div>

                    </div>

                )}

            </div>

        </div>
    );
}

export default Tuxedo;