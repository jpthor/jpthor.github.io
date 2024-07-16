import { mediaCopy } from "@/app/copy/"
import Image from "next/image"

export function Media() {
    return (
        <>
            <div id="media" className="section mt-300 mt-section">
                <div className="w-100 pt-custom position-relative">
                    <div className="bullet" style={{ top: "120px" }}></div>
                    <div className="ps-0 ps-lg-5 mt-lg-0 mt-3 item appear2">
                        <h2 className="text-xlarge text-blue text-bold" >{mediaCopy.title}</h2>
                        <p className="text-small text-c9 text-narrow-height w-75-custom text-thin text-justify" dangerouslySetInnerHTML={{ __html: mediaCopy.description }} >
                        </p>
                        <div className="card-cont-media mt-5">
                            {mediaCopy.cards.map((card, index) => (
                                <a key={index} className="item appear2 card-item text-center text-lg-start row m-0 text-decoration-none" style={{ padding: "1rem" }}
                                    target={card.target}
                                    href={card.link} >
                                    <div className="col-lg-5 p-0 d-flex align-items-center">
                                        <Image width={150} height={150} src={card.image} alt={card.alt} className="rounded-2 mx-auto mb-lg-0 mb-2" />
                                    </div>
                                    <div className="col-lg-7 ps-lg-4 ps-0 pt-2 pt-lg-0 pe-0 my-auto">
                                        <div className="text-c9 text-xsmall  text-narrow-height ex-text "
                                        >{card.title}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                 
                </div>
            </div>
        </>
    )
}