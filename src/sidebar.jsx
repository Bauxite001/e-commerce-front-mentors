import close from "./assets/icon-close.svg";

function Sidebar(prop) {
	return (
		<>
			{/* Sidebar Overlay */}
			<div
				onClick={prop.close}
				className="fixed inset-0 bg-black/40 z-40 md:hidden"
			></div>

			{/* Sidebar Panel */}
			<nav className="h-full bg-white w-[70%] fixed left-0 top-0 bottom-0 z-50 font-bold pl-7 pt-6">
				{/* Close Button */}
				<button onClick={prop.close} className="mb-10">
					<img src={close} alt="close" className="w-4 h-4" />
				</button>

				{/* Nav Links */}
				<ul onClick={prop.close} className="flex flex-col gap-6 text-black">
					<li className="cursor-pointer">Collections</li>
					<li className="cursor-pointer">Men</li>
					<li className="cursor-pointer">Women</li>
					<li className="cursor-pointer">About</li>
					<li className="cursor-pointer">Contact</li>
				</ul>
			</nav>
		</>
	);
}

export default Sidebar;
