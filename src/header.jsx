import menu from "./assets/icon-menu.svg";
import logo from "./assets/logo.svg";
import cart from "./assets/icon-cart.svg";
import avatar from "./assets/image-avatar.png";

import Sidebar from "./sidebar";
import { useState } from "react";
function Header(prop) {
	const [isOpen, setisOpen] = useState(false);

	const toggle = () => {
		setisOpen(!isOpen);
	};
	const opener = <img src={menu} alt="menu" className="w-6 h-4" />;
	const totalItems = (prop.cartItems || []).reduce(
		(sum, item) => sum + item.quantity,
		0
	);

	return (
		<>
			<header className="w-[75%] m-auto mt-3 ">
				<div className="flex justify-between">
					<div className="flex justify-center gap-3 items-center">
						<div className="md:hidden cursor-pointer">
							<button onClick={toggle}>{isOpen ? "" : opener}</button>
							{isOpen && <Sidebar close={toggle} />}
						</div>

						<img src={logo} alt="logo" className="h-5 cursor-pointer" />

						<ul className="hidden md:flex flex-row justify-between 6 gap-8 text-gray-400 ml-6 ">
							<li className="cursor-pointer head">Collections</li>

							<li className="cursor-pointer head">Men</li>

							<li className="cursor-pointer head">Women</li>

							<li className="cursor-pointer head">About</li>

							<li className="cursor-pointer head">Contact</li>
						</ul>
					</div>

					<div className="flex justify-center items-center gap-8">
						<div className="relative cursor-pointer" onClick={prop.toggleCart}>
							<img src={cart} alt="cart" className="h-4 w-4" />
							{totalItems > 0 && (
								<span className="absolute -top-2 -right-2 text-white text-[10px] bg-orange-500 rounded-full px-1">
									{totalItems}
								</span>
							)}
						</div>
						<img
							src={avatar}
							alt="avatar"
							className=" h-8 w-8 cursor-pointer orange"
						/>
					</div>
				</div>
				<div className="w-full my-6 hidden md:block border-t border-t-[#808080bb]"></div>
			</header>
		</>
	);
}

export default Header;
