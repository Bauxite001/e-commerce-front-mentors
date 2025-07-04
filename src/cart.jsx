import delet from "./assets/icon-delete.svg";

function Cart(prop) {
	return (
		<div className="fixed top-[60px] left-1/2 transform -translate-x-1/2 md:absolute md:right-4 md:left-auto bg-white rounded-md shadow-lg w-[95%] md:w-[290px] z-[40] h-[30vh] md:h-[28vh] max-h-[70vh] overflow-y-auto">
			<p className="p-4 font-bold border-b">Cart</p>
			{prop.cartItems.length === 0 ? (
				<div className="flex items-center justify-center h-[60%]">
					<p className="p-6 text-gray-500 text-center">Your cart is empty.</p>
				</div>
			) : (
				<div className="p-4">
					{prop.cartItems.map((item, i) => (
						<div key={i} className="flex items-center justify-between mb-4">
							<img
								src={item.image}
								alt="product"
								className="w-12 h-12 rounded"
							/>
							<div className="text-sm text-gray-600">
								<p>{item.name}</p>
								<p>
									${item.price} x {item.quantity}{" "}
									<span className="font-bold text-black">
										${item.price * item.quantity}
									</span>
								</p>
							</div>
							<button onClick={prop.clearCart} className="text-red-400">
								<img src={delet} alt="" />
							</button>
						</div>
					))}
					<button className="w-full bg-[#ff7d1a] py-2 text-white font-bold rounded-lg">
						Checkout
					</button>
				</div>
			)}
		</div>
	);
}
export default Cart;
