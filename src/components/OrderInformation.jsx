import useFormStorage from "../hooks/useFormStorage";

function OrderInformation() {
    const [orderNumber, setOrderNumber] = useFormStorage("orderNumber");
    const [date, setDate] = useFormStorage("date");
    const [customerName, setCustomerName] = useFormStorage("customerName");
    const [email, setEmail] = useFormStorage("email");
    const [telephone, setTelephone] = useFormStorage("telephone");
    const [height, setHeight] = useFormStorage("height");
    const [heightUnit, setHeightUnit] = useFormStorage("heightUnit");
    const [weight, setWeight] = useFormStorage("weight");
    const [weightUnit, setWeightUnit] = useFormStorage("weightUnit");
    const [dueDate, setDueDate] = useFormStorage("dueDate");
    const [consultant, setConsultant] = useFormStorage("consultant");
    const [shoeSize, setShoeSize] = useFormStorage("shoeSize");
    const [measuredBy, setMeasuredBy] = useFormStorage("measuredBy");

    const handleHeightChange = (e) => {
        let value = e.target.value;

        // CM: numbers only
        if (heightUnit === "CM") {
            value = value.replace(/\D/g, "");
            setHeight(value);
            return;
        }

        // FT/IN: numbers only
        value = value.replace(/\D/g, "");

        // Maximum 4 digits: e.g. 510 or 5110
        value = value.slice(0, 4);

        if (value.length <= 1) {
            setHeight(value);
        } else {
            const feet = value.slice(0, 1);
            const inches = value.slice(1, 3);

            setHeight(`${feet}'${inches}`);
        }
    };

    const handleHeightUnitChange = (e) => {
        const unit = e.target.value;
        setHeightUnit(unit);

        // Clear height when changing measurement system
        setHeight("");
    };

    return (
        <div className="container my-5">
            <div className="card shadow border-0 rounded-4 p-4">

                <h3 className="mb-4">Order Information</h3>

                <div className="row g-3 order-info-grid">

                    {/* ORDER NUMBER */}
                    <div className="col-md-4">
                        <label className="form-label">ORDER NUMBER</label>
                        <input
                            id="orderNumber"
                            className="form-control"
                            value={orderNumber}
                            onChange={(e) => setOrderNumber(e.target.value)}
                        />
                    </div>

                    {/* DATE */}
                    <div className="col-md-4">
                        <label className="form-label">DATE</label>
                        <input
                            id="date"
                            type="date"
                            className="form-control"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    {/* NAME */}
                    <div className="col-md-4">
                        <label className="form-label">NAME</label>
                        <input
                            id="customerName"
                            className="form-control"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                        />
                    </div>

                    {/* EMAIL */}
                    <div className="col-md-4">
                        <label className="form-label">EMAIL</label>
                        <input
                            id="email"
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* TELEPHONE */}
                    <div className="col-md-4">
                        <label className="form-label">TELEPHONE</label>
                        <input
                            id="telephone"
                            type="tel"
                            className="form-control"
                            value={telephone}
                            onChange={(e) => setTelephone(e.target.value)}
                        />
                    </div>

                    {/* HEIGHT */}
                    <div className="col-md-4">
                        <label className="form-label">HEIGHT</label>

                        <div className="input-group">
                            <input
                                id="height"
                                type="text"
                                inputMode="numeric"
                                className="form-control"
                                placeholder={
                                    heightUnit === "CM"
                                        ? "e.g. 178"
                                        : "e.g. 510"
                                }
                                value={height}
                                onChange={handleHeightChange}
                            />

                            <select
                                id="heightUnit"
                                className="form-select"
                                value={heightUnit}
                                onChange={handleHeightUnitChange}
                            >
                                <option value="FT/IN">FT/IN</option>
                                <option value="CM">CM</option>
                            </select>
                        </div>
                    </div>

                    {/* WEIGHT */}
                    <div className="col-md-4">
                        <label className="form-label">WEIGHT</label>

                        <div className="input-group">
                            <input
                                id="weight"
                                type="number"
                                min="0"
                                className="form-control"
                                placeholder="Enter weight"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />

                            <select
                                id="weightUnit"
                                className="form-select"
                                value={weightUnit}
                                onChange={(e) => setWeightUnit(e.target.value)}
                            >
                                <option value="KG">KG</option>
                                <option value="LBS">LBS</option>
                            </select>
                        </div>
                    </div>

                    {/* DUE DATE */}
                    <div className="col-md-4">
                        <label className="form-label">DUE DATE</label>
                        <input
                            id="dueDate"
                            type="date"
                            className="form-control"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                    </div>

                    {/* CONSULTANT */}
                    <div className="col-md-4">
                        <label className="form-label">CONSULTANT</label>
                        <input
                            id="consultant"
                            className="form-control"
                            value={consultant}
                            onChange={(e) => setConsultant(e.target.value)}
                        />
                    </div>

                    {/* SHOE SIZE */}
                    <div className="col-md-4">
                        <label className="form-label">SHOE SIZE</label>
                        <input
                            id="shoeSize"
                            type="number"
                            min="0"
                            step="0.5"
                            className="form-control"
                            value={shoeSize}
                            onChange={(e) => setShoeSize(e.target.value)}
                        />
                    </div>

                    {/* MEASURED BY */}
                    <div className="col-md-4">
                        <label className="form-label">MEASURED BY</label>
                        <input
                            id="measuredBy"
                            className="form-control"
                            value={measuredBy}
                            onChange={(e) => setMeasuredBy(e.target.value)}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default OrderInformation;