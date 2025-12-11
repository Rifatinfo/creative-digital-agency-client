import Logo from "@/components/ui/modules/common/Logo/Logo";
import { Mail, MapPin, Phone } from "lucide-react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
    return (
        <div className="bg-gray-900 text-white p-8 mt-20">
            <footer className="container mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <Logo/>
                        </div>
                        <p className="text-gray-400 text-sm mb-8 leading-6">
                            Transforming brands through creative digital solutions and strategic innovation.
                        </p>
                        <div className="flex gap-3">
                            <button className="bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition-colors">
                                <FaFacebook className="w-[18px] h-[18px]" />
                            </button>
                            <button className="bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition-colors">
                                <BsTwitter className="w-[18px] h-[18px]" />
                            </button>
                            <button className="bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition-colors">
                                <BsInstagram className="w-[18px] h-[18px]" />
                            </button>
                            <button className="bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition-colors">
                                <LiaLinkedin className="w-[18px] h-[18px]" />
                            </button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Services</a></li>
                            <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Portfolio</a></li>
                            <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Blogs</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white mb-6">Services</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Content Development</a></li>
                            <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Digital Marketing</a></li>
                            <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Branding & Promotion</a></li>
                            <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Web & App</a></li>
                            <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Event & Activation</a></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-white mb-6">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                                <p className="text-gray-400 text-sm">
                                    123 Creative Street, Design District, NY 10001
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                <a href="tel:+15551234567" className="text-gray-400 text-sm hover:text-white transition-colors">
                                    +1 (555) 123-4567
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                <a href="mailto:hello@socialverb.com" className="text-gray-400 text-sm hover:text-white transition-colors">
                                    hello@socialverb.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-xs">
                        © 2024 Social Verb. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 text-xs hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-400 text-xs hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="text-gray-400 text-xs hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;