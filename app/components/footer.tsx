import { Link } from "@remix-run/react";
import { FC } from "react";

interface FooterSocial {
    icon: string;
    href: string;
}

interface FooterItem {
    text: string;
    href: string;
}

interface FooterColumn {
    title: string;
    items: FooterItem[];
}

interface FooterProps {
    image?: string;
    headerTitle: string;
    bodyTitle: string;
    columns: FooterColumn[];
    socials: FooterSocial[];
    companyName?: string;
}

const Footer: FC<FooterProps> = ({ image = "BNW-logo.svg", headerTitle, bodyTitle, columns, socials, companyName="bnwfastpay" }) => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="bg-[--primary_background] font-comfortaa py-8">
            <footer className="container mx-auto px-4">
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-1">
                    <div className="flex flex-col md:col-span-2 items-center md:items-start px-8 mb-8">
                        <img src={`/${image}`} alt="FastPay Logo" className="w-12 h-12 mb-4" />
                        <h4 className="text-center md:text-start text-2xl text-[--heading] font-bold font-montserrat mb-2">{headerTitle}</h4>
                        <p className="text-center md:text-start text-[--body-text]">{bodyTitle}</p>
                    </div>
                    
                    {columns.map((column, index) => (
                        <div className="text-center md:text-start" key={index}>
                            <h4 className="text-lg font-bold font-montserrat mb-2">{column.title}</h4>
                            <ul>
                                {column.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="mb-1">
                                        {item.href.startsWith("http") ? (
                                            <a href={item.href} className="text-[--body-text] text-[12px] hover:underline" target="_blank" rel="noopener noreferrer">
                                                {item.text}
                                            </a>
                                        ) : (
                                            <Link to={item.href} className="text-[--body-text] text-[12px] hover:underline">
                                                {item.text}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="relative h-[1px] w-full bg-[--stroke] top-8 md:top-0"></div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-8">
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        {socials.map((item, itemIndex) => (
                            <a key={itemIndex} href={item.href} className="text-[--body-text] hover:underline" target="_blank" rel="noopener noreferrer">
                                <img src={`/${item.icon}`} alt={item.icon} className="w-5 h-5 md:scale-150" />
                            </a>
                        ))}
                    </div>
                    <p className="text-[--body-text] ">© {currentYear} {companyName}. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;