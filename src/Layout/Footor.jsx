import { FootorText } from "../Components/ui/Text"
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaTwitter } from "react-icons/fa";

export const Footor = () => {
    const link = ["About Us", "Services", "Case Studies", "How it works", "Blog", "Careers", "Areas We Serve"]
    const icon = [<FaFacebookF />, <FaInstagram />, <FaTwitter />, <FaLinkedinIn />]
    return (
        <>
            <div className="footor">
                <div className="fot1">
                    <div className="logo">
                        <img src="/img/logo.png" alt="Logo" />
                        <div className="logo-text">JK developers</div>
                    </div>
                    <div>
                        <FootorText variant="con">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </FootorText>
                    </div>
                    <div className="img-box">
                        <img src="img/footor.png"></img>
                    </div>
                </div>
                <div className="fot2">
                    <FootorText variant="link">
                        links
                    </FootorText>
                    {
                        link.map((curr ,index) => (
                            <FootorText variant="links" key={index}>{curr}</FootorText>
                        ))
                    }
                </div>
                <div className="fot3">
                    <FootorText variant="link">
                        Contact us
                    </FootorText>
                    <FootorText variant="links">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</FootorText>
                    <FootorText variant="links">+923183561921</FootorText>
                </div>
                <div className="fot4">
                    <div className="social">

                        {
                            icon.map((curr,index) => (
                                <div className="icon" key={index}>{curr}</div>
                            ))
                        }

                    </div>
                </div>
            </div>
            <div className="reversed">
                <FootorText variant="reversed">© 2023 Copyright by IK Developers. All rights reserved.</FootorText >
            </div>
        </>
    )
}