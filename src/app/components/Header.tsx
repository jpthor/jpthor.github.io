import { headerCopy } from "@/app/copy/Header";
import { NavBar } from "@/app/shared-components/NavBar";

export function Header() {
    return (
        <>
            <div className="header-img parallax" ></div>
            <header className="header mb-2">
                <div className="container">
                    <NavBar />
                    <h1 className="text-xxlarge text-uppercase hero-title-animate">
                        {headerCopy.title_1} <br />  {headerCopy.title_2} <br /> {headerCopy.title_3}
                    </h1>
                    <div className="text-medium mt-4 hero-desc-animate">
                        {headerCopy.subtitle_1} <br /> {headerCopy.subtitle_2}
                    </div>
                </div>
            </header>
        </>
    )
}