import { meetJpCopy } from "@/app/copy/MeetJp";
import Image from "next/image";

export function MeetJP() {
    return (
        <>
            <div className="section mt-300 mt-section" id="meet">
                <div className="w-100 pt-custom position-relative">
                    <div className="bullet" style={{ top: "120px" }}></div>
                    <div className="ps-lg-5 row">
                        <div className="col-lg-6 mt-3 mt-300">
                            <div className="item">
                                <h2 className="text-xlarge text-bold">{meetJpCopy.title} <span
                                    className="text-green">{meetJpCopy.titleColored}</span></h2>
                                <p className="text-small text-thin text-c9 text-narrow-height text-justify" >
                                    {meetJpCopy.description_p1} <br /> <br /> {meetJpCopy.description_p2} <br /> <br /> {meetJpCopy.description_p3}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 text-lg-start text-center">
                            <img id="meet-jp" src={meetJpCopy.image}
                                alt={meetJpCopy.alt} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}