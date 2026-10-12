function CategoryMarquee() {

    const categories = [
        {
            name: "Tuxedo",
            icon: (
                <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M18 6l6 6 6-6 7 6 4 28H7l4-28 7-6z" />
                    <path d="M18 6l6 11 6-11" />
                    <path d="M24 17v23" />
                    <path d="M19 25h10" />
                    <circle cx="24" cy="30" r="1" />
                    <circle cx="24" cy="35" r="1" />
                </svg>
            ),
        },

        {
            name: "Traditionals",
            icon: (
                <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M17 7l7 5 7-5 10 8-6 9-5-4v21H18V20l-5 4-6-9 10-8z" />
                    <path d="M24 12v29" />
                    <path d="M20 9l4 6 4-6" />
                </svg>
            ),
        },

        {
            name: "Bespoke Shirts",
            icon: (
                <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M18 9l6 4 6-4 9 7-5 8-5-4v18H19V20l-5 4-5-8 9-7z" />
                    <path d="M24 13v25" />
                    <path d="M20 10l4 6 4-6" />
                </svg>
            ),
        },

        {
            name: "Trousers",
            icon: (
                <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M15 6h18l4 35-10-1-3-17-3 17-10 1 4-35z" />
                    <path d="M24 6v17" />
                    <path d="M15 6h18" />
                </svg>
            ),
        },

        {
            name: "Shoes",
            icon: (
                <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M8 34c5 0 10-2 13-9l3-8 5 8c2 3 5 5 10 6 3 1 5 3 5 6H8v-3z" />
                    <path d="M8 37h36" />
                    <path d="M22 25l5 2" />
                    <path d="M28 27l5 2" />
                </svg>
            ),
        },

        {
            name: "Waistcoat",
            icon: (
                <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M18 7l6 5 6-5 7 7-4 26H15l-4-26 7-7z" />
                    <path d="M18 7l6 11 6-11" />
                    <path d="M24 18v22" />
                    <circle cx="24" cy="26" r="1" />
                    <circle cx="24" cy="32" r="1" />
                </svg>
            ),
        },

        {
            name: "Top-notch Stitches",
            icon: (
                <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M8 39h32" />
                    <path d="M12 39V17h13c7 0 11 4 11 11v11" />
                    <path d="M12 17V9h9v8" />
                    <path d="M21 9v10h11" />
                    <path d="M32 19v10h-9" />
                    <path d="M23 29v10" />
                    <circle cx="15" cy="34" r="4" />
                    <circle cx="34" cy="34" r="3" />
                </svg>
            ),
        },
    ];


    return (
        <section className="category-marquee">

            <div className="category-marquee-track">

                {/* FIRST GROUP */}

                <div className="category-marquee-group">

                    {categories.map((category, index) => (

                        <div
                            className="category-item"
                            key={`category-one-${index}`}
                        >

                            <div className="category-icon">
                                {category.icon}
                            </div>

                            <span>
                                {category.name}
                            </span>

                        </div>

                    ))}

                </div>


                {/* SECOND GROUP
                    Required for the seamless loop
                */}

                <div
                    className="category-marquee-group"
                    aria-hidden="true"
                >

                    {categories.map((category, index) => (

                        <div
                            className="category-item"
                            key={`category-two-${index}`}
                        >

                            <div className="category-icon">
                                {category.icon}
                            </div>

                            <span>
                                {category.name}
                            </span>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default CategoryMarquee;