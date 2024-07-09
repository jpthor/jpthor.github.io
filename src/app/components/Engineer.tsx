import { engineerCopy } from "@/app/copy/Engineer"
import Image from "next/image"

export function Engineer() {
    return (

        <>
            <div className="section mt-300 mt-section" id="ENGINEER">
                <div className="w-100 pt-custom position-relative">
                    <div className="bullet" style={{ top: "120px" }}></div>
                    <div className="ps-0 ps-lg-5 mt-lg-0 mt-3 item appear2">
                        <h2 className="text-xlarge text-yellow text-bold">{engineerCopy.title}</h2>
                        <p className="text-small text-c9 text-narrow-height w-75-custom text-thin text-justify" >
                            {engineerCopy.description}
                        </p>

                        <div className="card-cont mt-5" id="ENGINEER">
                            {engineerCopy.cards.map((card, index) => (
                                <div className="card-item item appear2 text-center text-lg-start" key={index}>
                                    <Image width={90} height={90} src={card.image} alt={card.title} />
                                    <h3 className="text-large my-3 item-head">{card.title}</h3>
                                    <div className="text-c9 text-medium text-thin item-body">
                                        {card.description}
                                    </div>
                                    <a href={card.link} target="_blank">
                                        <Image width={52} height={52} className="mt-5" src="/img/arrow-link-circle.svg" alt="Link" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Image width={729} height={726} className="arts" src="/img/art-ent.svg" alt="ENGINEER" />
                </div>

            </div>
        </>
    )
}