import { NAV_LINKS } from "@/constants/index";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import Button from "./Button";

const Navbar = () => {
    return (
        <nav className=" flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/">
                <Image
                    src="hilink-logo.svg"
                    alt="logo"
                    width={74}
                    height={29}
                ></Image>
            </Link>

            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link
                        href={link.href}
                        key={link.key}
                        className="regular-16 transition-all hover:font-bold text-gray-50 cursor-pointer pb-1.5 flexCenter"
                    >
                        {link.label}
                    </Link>
                ))}
            </ul>

            <div className="lg:flexCenter hidden">
                <Button
                    type="button"
                    title="Log in"
                    icon="/user.svg"
                    variant="btn_dark_green"
                ></Button>
            </div>

            <Image
                src="menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
            ></Image>
        </nav>
    );
};

export default Navbar;
