import { footerCopy } from "@/app/copy/Footer";
import Image from "next/image";

export function Footer() {
    return (
        <>
            <div className="footer container mt-300 mt-high mb-5">
                <div className="row">
                    <div className="col-lg-5 d-flex flex-column justify-content-between">
                        <a href="#" className="mb-5">
                            <Image width={140} height={40} src="/img/jpthor-logo.svg" alt="JP THOR" />
                        </a>

                        <div className="mt-5">
                            <ul className="navbar-nav footer-social list-group-horizontal">
                                {footerCopy.socials.map((social, index) => (
                                    <li key={index} className="p-social">
                                        <a href={social.href} target={social.target}>
                                            <Image width={30} height={30} src={social.image} alt={social.title} />
                                        </a>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7 row mt-lg-0 mt-5">
                        <div className="col-lg-4 col-6">
                            <ul className="list-unstyled">
                                <li className="mb-4">
                                    <h3 className="text-medium text-green">{footerCopy.links[0].title}</h3>
                                </li>
                                {footerCopy.links[0].links.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} target={link.target} className="nav-link text-small text-thin my-2">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-lg-4 col-6">
                            <ul className="list-unstyled">
                                <li className="mb-4">
                                    <h3 className="text-medium text-green">{footerCopy.links[1].title}</h3>
                                </li>
                                {footerCopy.links[1].links.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} target={link.target} className="nav-link text-small text-thin my-2">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-lg-4 col-6 mt-lg-0 mt-3">
                            <ul className="list-unstyled">
                                <li className="mb-4">
                                    <h3 className="text-medium text-green">{footerCopy.links[2].title}</h3>
                                </li>
                                {footerCopy.links[2].links.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} target={link.target} className="nav-link text-small text-thin my-2" download={link.download}>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}