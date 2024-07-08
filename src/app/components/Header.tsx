import { headerCopy } from "@/app/copy/Header";
import { NavBar } from "@/app/shared-components/NavBar";

export function Header() {
    return (
        <>
            <div className="header-img parallax" ></div>
            <header className="header mb-2">
                <div className="container">
                    <NavBar />
                    <h1 className="text-xxlarge text-uppercase fade-effect" fade-time="2" fade-direction="left" >
                        {headerCopy.title_1} <br />  {headerCopy.title_2} <br /> {headerCopy.title_3}
                    </h1>
                    <div fade-time="3" fade-direction="left" className="text-medium mt-4 fade-effect" >
                        {headerCopy.subtitle_1} <br /> {headerCopy.subtitle_2}
                    </div>
                </div>
            </header>
        </>
    )
}