import useFormStorage from "../hooks/useFormStorage";

function OrderInformation() {

    const [orderNumber, setOrderNumber] = useFormStorage("orderNumber");
    const [date, setDate] = useFormStorage("date");
    const [customerName, setCustomerName] = useFormStorage("customerName");
    const [email, setEmail] = useFormStorage("email");
    const [telephone, setTelephone] = useFormStorage("telephone");
    const [height, setHeight] = useFormStorage("height");
    const [dueDate, setDueDate] = useFormStorage("dueDate");
    const [consultant, setConsultant] = useFormStorage("consultant");
    const [shoeSize, setShoeSize] = useFormStorage("shoeSize");
    const [measuredBy, setMeasuredBy] = useFormStorage("measuredBy");

    return (
        <div className="container my-5">
            <div className="card shadow border-0 rounded-4 p-4">
                <h3 className="mb-4">Order Information</h3>

                <div className="row g-3">

                    <div className="col-md-6">
                        <label className="form-label">ORDER NUMBER</label>
                        <input id="orderNumber" className="form-control"
                            value={orderNumber}
                            onChange={(e)=>setOrderNumber(e.target.value)} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">DATE</label>
                        <input id="date" type="date" className="form-control"
                            value={date}
                            onChange={(e)=>setDate(e.target.value)} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">NAME</label>
                        <input id="customerName" className="form-control"
                            value={customerName}
                            onChange={(e)=>setCustomerName(e.target.value)} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">EMAIL</label>
                        <input id="email" type="email" className="form-control"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)} />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">TELEPHONE</label>
                        <input id="telephone" className="form-control"
                            value={telephone}
                            onChange={(e)=>setTelephone(e.target.value)} />
                    </div>

                    <div className="col-md-3">
                        <label className="form-label">HEIGHT</label>
                        <input id="height" className="form-control"
                            value={height}
                            onChange={(e)=>setHeight(e.target.value)} />
                    </div>

                    <div className="col-md-3">
                        <label className="form-label">DUE DATE</label>
                        <input id="dueDate" type="date" className="form-control"
                            value={dueDate}
                            onChange={(e)=>setDueDate(e.target.value)} />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">CONSULTANT</label>
                        <input id="consultant" className="form-control"
                            value={consultant}
                            onChange={(e)=>setConsultant(e.target.value)} />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">SHOE SIZE</label>
                        <input id="shoeSize" className="form-control"
                            value={shoeSize}
                            onChange={(e)=>setShoeSize(e.target.value)} />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">MEASURED BY</label>
                        <input id="measuredBy" className="form-control"
                            value={measuredBy}
                            onChange={(e)=>setMeasuredBy(e.target.value)} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default OrderInformation;
