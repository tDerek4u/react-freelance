import { RiSearchLine } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Link } from "react-router-dom";

const menuLists = ['Home', 'Clubs & Events', 'Posts', 'About us', 'FAQ']

const formatPath = (menu) => {
    if (menu === 'Home') return '/';
    return `/${menu.toLowerCase().replace(/ & | /g, '-')}`;
}

const Menu = () => {
    return (
        <ul className="menu-section">
            {
                menuLists.map(menu => (
                    <li key={menu}>
                        <Link className="menu-list" to={formatPath(menu)}>
                            {menu}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

const Header = () => {

    return (
        <>
            <nav className="header-section">
                <div className="header-list">
                    <div>
                        <img className="w-10" src="/images/logo.jpeg" alt="logo" />
                    </div>
                    <Menu />
                </div>
                <div className="header-list">
                    <div className="relative max-sm:hidden flex">
                        <input type="text" placeholder="Search here" className="header-search" />
                        <RiSearchLine size={18} className="header-search-icon" />
                    </div>
                    <div>
                        <img className="w-9 rounded-full" src="/images/logo.jpeg" alt="avatar" />
                    </div>
                    {/* mobile */}
                    <div className="header-mobile">
                        <Sheet>
                            <SheetTrigger asChild>
                                <CiMenuBurger size={22} className="cursor-pointer" />
                            </SheetTrigger>
                            <SheetContent>
                                <ul className="flex flex-col space-y-5">
                                    {
                                        menuLists.map(menu => (
                                            <li className="menu-list" key={menu}>
                                                <Link to={formatPath(menu)}>
                                                    {menu}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="relative mt-7">
                                    <input type="text" placeholder="Search here" className="header-mobile-search" />
                                    <RiSearchLine size={18} className="header-mobile-search-icon" />
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
