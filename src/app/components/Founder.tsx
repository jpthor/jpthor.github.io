import { founderCopy } from "@/app/copy";
import Image from "next/image";

export function Founder() {
    return (
        <>
            <div className="section mt-300 mt-section" id="FOUNDER">
                <div className="w-100 pt-custom position-relative">
                    <div className="bullet" style={{ top: "120px" }}></div>
                    <div className="ps-0 ps-lg-5 item mt-lg-0 mt-3">
                        <h2 className="text-xlarge text-blue text-bold">{founderCopy.title}</h2>
                        <p className="text-small text-c9 text-narrow-height w-75-custom text-thin text-justify" dangerouslySetInnerHTML={{ __html: founderCopy.description }}>
                            
                        </p>

                        <div className="card-cont mt-5">
                            {founderCopy.cards.map((card, index) => (
                                <div key={index} className="card-item item text-center text-lg-start">
                                    <Image width={90} height={90} src={card.image} alt={card.title} />
                                    <h3 className="text-large my-3">{card.title}</h3>
                                    <div className="text-c9 text-medium text-thin">
                                        {card.description}
                                    </div>
                                    <a href={card.link} target={card.target}>
                                        <Image width={52} height={52} className="mt-5" src="/img/arrow-link-circle.svg" alt="Link" /></a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Image width={662} height={670} className="arts" src="/img/art-projects.svg" alt="Projects" />
                </div>

            </div>
        </>
    )
}