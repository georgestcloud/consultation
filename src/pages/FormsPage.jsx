import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import JacketDetails from "../components/Forms/JacketDetails";
import TuxedoDetails from "../components/Forms/TuxedoDetails";
import WaistcoatDetails from "../components/Forms/WaistcoatDetails";
import ShirtDetails from "../components/Forms/ShirtDetails";

function FormsPage() {

    return (
        <>
            <Navbar />

            <form>

                <div className="container my-5">

                    {/* JACKET DETAILS */}
                    <JacketDetails />


                    {/* TUXEDO DETAILS */}
                    <TuxedoDetails />


                    {/* WAISTCOAT DETAILS */}
                    <WaistcoatDetails />


                    {/* SHIRT DETAILS */}
                    <ShirtDetails />

                </div>

            </form>

            <Footer />
        </>
    );
}

export default FormsPage;