import { explorerCopy } from "@/app/copy/"
import Image from "next/image"

export function Explorer() {
    return (
        <>
            <div id="explorer" className="section mt-300 mt-section">
                <div className="w-100 pt-custom position-relative">
                    <div className="bullet" style={{ top: "120px" }}></div>
                    <div className="ps-0 ps-lg-5 mt-lg-0 mt-3 item">
                        <h2 className="text-xlarge text-white text-bold" >{explorerCopy.title}</h2>
                        <p className="text-small text-c9 text-narrow-height w-75-custom text-thin text-justify" dangerouslySetInnerHTML={{ __html: explorerCopy.description }} >
                        </p>
                        <div className="card-cont-explorer mt-5">
                            {explorerCopy.cards.map((card, index) => (
                                <a key={index} className="item card-item text-center text-lg-start row m-0 text-decoration-none"
                                    target={card.target}
                                    href={card.link} >
                                    <div className="col-lg-6 p-0 d-flex align-items-center">
                                        <img src={card.image} alt={card.alt} className="w-100 ex-img rounded-2" />
                                    </div>
                                    <div className="col-lg-6 ps-lg-4 ps-0 pt-2 pt-lg-0 pe-0">
                                        <div className="text-c9 text-small text-thin text-narrow-height ex-text"
                                        >{card.title}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                    <Image width={569} height={569} className="arts" src="/img/art-explorer.svg" alt="explorer" />
                </div>
            </div>
        </>
    )
}