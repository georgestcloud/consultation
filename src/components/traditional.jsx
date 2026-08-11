import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useFormStorage from "../hooks/useFormStorage";

function Traditional() {

    const navigate = useNavigate();

    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(
            openSection === section ? null : section
        );
    };

    const [shortLength, setShortLength] =
        useFormStorage("shortLength");

    const [midLength, setMidLength] =
        useFormStorage("midLength");

    const [aboveKneeLength, setAboveKneeLength] =
        useFormStorage("aboveKneeLength");

    const [kneeLength, setKneeLength] =
        useFormStorage("kneeLength");

    const [threeQuarterLength, setThreeQuarterLength] =
        useFormStorage("threeQuarterLength");

    const [traditionalNeck, setTraditionalNeck] =
        useFormStorage("traditionalNeck");

    const [traditionalShoulder, setTraditionalShoulder] =
        useFormStorage("traditionalShoulder");

    const [shortSleeveLength, setShortSleeveLength] =
        useFormStorage("shortSleeveLength");

    const [threeQuarterSleeveLength, setThreeQuarterSleeveLength] =
        useFormStorage("threeQuarterSleeveLength");

    const [longSleeveLength, setLongSleeveLength] =
        useFormStorage("longSleeveLength");

    const [traditionalChest, setTraditionalChest] =
        useFormStorage("traditionalChest");

    const [belly, setBelly] =
        useFormStorage("belly");

    const [stomach, setStomach] =
        useFormStorage("stomach");

    const [traditionalHips, setTraditionalHips] =
        useFormStorage("traditionalHips");

    const [agbadaShortSleeve, setAgbadaShortSleeve] =
        useFormStorage("agbadaShortSleeve");

    const [agbadaLongSleeve, setAgbadaLongSleeve] =
        useFormStorage("agbadaLongSleeve");

    const [head, setHead] =
        useFormStorage("head");


    return (
        <div className="container my-5">

            {/* TRADITIONAL MENU */}

            <div className="measurement-menu-card">

                {/* MENU HEADER */}

                <button
                    type="button"
                    className="measurement-menu-button"
                    onClick={() => toggleSection("traditional")}
                >

                    <span className="measurement-menu-title">

                        <i className="bi bi-person-standing-dress"></i>

                        Traditional

                    </span>

                    <span className="measurement-toggle">

                        {openSection === "traditional"
                            ? "−"
                            : "+"}

                    </span>

                </button>


                {/* TRADITIONAL MEASUREMENTS */}

                {openSection === "traditional" && (

                    <div className="measurement-dropdown">

                        <div className="row g-3">

                            {/* Short Length */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Short Length
                                </label>

                                <input
                                    id="shortLength"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={shortLength}
                                    onChange={(e) =>
                                        setShortLength(e.target.value)
                                    }
                                />

                            </div>


                            {/* Mid Length */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Mid Length
                                </label>

                                <input
                                    id="midLength"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={midLength}
                                    onChange={(e) =>
                                        setMidLength(e.target.value)
                                    }
                                />

                            </div>


                            {/* Above Knee Length */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Above Knee Length
                                </label>

                                <input
                                    id="aboveKneeLength"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={aboveKneeLength}
                                    onChange={(e) =>
                                        setAboveKneeLength(e.target.value)
                                    }
                                />

                            </div>


                            {/* Knee Length */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Knee Length
                                </label>

                                <input
                                    id="kneeLength"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={kneeLength}
                                    onChange={(e) =>
                                        setKneeLength(e.target.value)
                                    }
                                />

                            </div>


                            {/* 3/4 Length */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    3/4 Length
                                </label>

                                <input
                                    id="threeQuarterLength"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={threeQuarterLength}
                                    onChange={(e) =>
                                        setThreeQuarterLength(e.target.value)
                                    }
                                />

                            </div>


                            {/* Neck */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Neck
                                </label>

                                <input
                                    id="traditionalNeck"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={traditionalNeck}
                                    onChange={(e) =>
                                        setTraditionalNeck(e.target.value)
                                    }
                                />

                            </div>


                            {/* Shoulder */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Shoulder
                                </label>

                                <input
                                    id="traditionalShoulder"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={traditionalShoulder}
                                    onChange={(e) =>
                                        setTraditionalShoulder(e.target.value)
                                    }
                                />

                            </div>


                            {/* Short Sleeve Length */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Short Sleeve Length
                                </label>

                                <input
                                    id="shortSleeveLength"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={shortSleeveLength}
                                    onChange={(e) =>
                                        setShortSleeveLength(e.target.value)
                                    }
                                />

                            </div>


                            {/* 3/4 Sleeve Length */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    3/4 Sleeve Length
                                </label>

                                <input
                                    id="threeQuarterSleeveLength"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={threeQuarterSleeveLength}
                                    onChange={(e) =>
                                        setThreeQuarterSleeveLength(e.target.value)
                                    }
                                />

                            </div>


                            {/* Long Sleeve Length */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Long Sleeve Length
                                </label>

                                <input
                                    id="longSleeveLength"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={longSleeveLength}
                                    onChange={(e) =>
                                        setLongSleeveLength(e.target.value)
                                    }
                                />

                            </div>


                            {/* Chest */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Chest
                                </label>

                                <input
                                    id="traditionalChest"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={traditionalChest}
                                    onChange={(e) =>
                                        setTraditionalChest(e.target.value)
                                    }
                                />

                            </div>


                            {/* Belly */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Belly
                                </label>

                                <input
                                    id="belly"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={belly}
                                    onChange={(e) =>
                                        setBelly(e.target.value)
                                    }
                                />

                            </div>


                            {/* Stomach */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Stomach
                                </label>

                                <input
                                    id="stomach"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={stomach}
                                    onChange={(e) =>
                                        setStomach(e.target.value)
                                    }
                                />

                            </div>


                            {/* Hips */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Hips
                                </label>

                                <input
                                    id="traditionalHips"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={traditionalHips}
                                    onChange={(e) =>
                                        setTraditionalHips(e.target.value)
                                    }
                                />

                            </div>


                            {/* Agbada Short Sleeve */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Agbada Short Sleeve
                                </label>

                                <input
                                    id="agbadaShortSleeve"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={agbadaShortSleeve}
                                    onChange={(e) =>
                                        setAgbadaShortSleeve(e.target.value)
                                    }
                                />

                            </div>


                            {/* Agbada Long Sleeve */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Agbada Long Sleeve
                                </label>

                                <input
                                    id="agbadaLongSleeve"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={agbadaLongSleeve}
                                    onChange={(e) =>
                                        setAgbadaLongSleeve(e.target.value)
                                    }
                                />

                            </div>


                            {/* Head */}

                            <div className="col-6 col-md-4">

                                <label className="form-label">
                                    Head
                                </label>

                                <input
                                    id="head"
                                    type="text"
                                    inputMode="decimal"
                                    className="form-control"
                                    value={head}
                                    onChange={(e) =>
                                        setHead(e.target.value)
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

export default Traditional;