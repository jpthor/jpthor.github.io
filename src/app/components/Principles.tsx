import { principlesCopy } from "@/app/copy/Principles";
import Image from "next/image";

export function Principles() {
    return (
        <>
            <div className="section mt-300 mt-section" id="Principles">
                <div className="w-100 pt-custom position-relative">
                    <div className="bullet" style={{ top: "120px" }}></div>
                    <div className="ps-0 ps-lg-5 item appear2 mt-lg-0 mt-3">
                        <h2 className="text-xlarge text-white text-bold">
                            {principlesCopy.title}<span className="text-green"> {principlesCopy.titleColored}</span>
                        </h2>
                        <div className="text-small text-c9 text-narrow-height w-75-custom text-thin text-justify" >{principlesCopy.description}</div>
                        <div className="card-cont mt-5">
                            {principlesCopy.cards.map((card, index) => (
                                <div key={index} className="card-item item appear2 text-center text-lg-start position-relative">
                                    <Image width={232} height={250} src={card.image} className="position-absolute top-0 end-0" alt={card.title} />
                                    <div className="position-relative">
                                        <div>
                                            <h2 className="text-large">{card.number}</h2>
                                            <h3 className="my-3">{card.title}</h3>
                                        </div>
                                        <div className="text-c9 text-14 text-thin text-justify">
                                            {card.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                      
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}