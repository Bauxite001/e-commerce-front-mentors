import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";

import shoe1 from "./assets/image-product-1.jpg";
import shoe2 from "./assets/image-product-2.jpg";
import shoe3 from "./assets/image-product-3.jpg";
import shoe4 from "./assets/image-product-4.jpg";

import thumbs1 from "./assets/image-product-1-thumbnail.jpg";
import thumbs2 from "./assets/image-product-2-thumbnail.jpg";
import thumbs3 from "./assets/image-product-3-thumbnail.jpg";
import thumbs4 from "./assets/image-product-4-thumbnail.jpg";

import next from "./assets/icon-next.svg";
import prev from "./assets/icon-previous.svg";
import close from "./assets/icon-close.svg";

const images = [shoe1, shoe2, shoe3, shoe4];
const thumbs = [thumbs1, thumbs2, thumbs3, thumbs4];

function Images() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [selectedThumbs, setSelectedThumbs] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const modalSwiperRef = useRef(null);

	const setThumbnail = (i) => {
		setSelectedThumbs(i);
	};

	return (
		<>
			<section>
				{/* Mobile Swiper */}
				<div className="relative mb-0.5 mt-4 md:hidden">
					<button className="custom-next absolute top-1/2 right-4 z-20 bg-white p-2 rounded-full shadow w-8 h-8 flex justify-center items-center">
						<img src={next} alt="next" className="w-3 h-3" />
					</button>
					<button className="custom-prev absolute top-1/2 left-4 z-20 bg-white p-2 rounded-full shadow w-8 h-8">
						<img src={prev} alt="previous" className="w-3 h-3" />
					</button>
					<Swiper
						slidesPerView={1}
						spaceBetween={20}
						loop={true}
						modules={[Navigation]}
						navigation={{
							nextEl: ".custom-next",
							prevEl: ".custom-prev",
						}}
					>
						{images.map((img, i) => (
							<SwiperSlide key={i}>
								<img
									src={img}
									alt={`product ${i + 1}`}
									className="w-full h- min-[370px]:h-[360px] 
									object-cover
									
             min-[480px]:h-[400px] 
             sm:h-[460px] "
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				{/* Desktop Swiper */}
				<div className="hidden md:flex md:mt-10 flex-col items-center">
					<Swiper
						slidesPerView={1}
						spaceBetween={10}
						thumbs={{ swiper: thumbsSwiper }}
						modules={[Thumbs]}
						className="w-full max-w-[350px] mb-4"
						onSlideChange={(swiper) => setSelectedThumbs(swiper.activeIndex)}
					>
						{images.map((img, i) => (
							<SwiperSlide key={i}>
								<img
									src={img}
									alt={`product ${i + 1}`}
									onClick={() => setShowModal(true)}
									className="w-[350px] h-[300px] object-cover rounded-[9px] cursor-pointer"
								/>
							</SwiperSlide>
						))}
					</Swiper>

					<Swiper
						onSwiper={setThumbsSwiper}
						spaceBetween={10}
						slidesPerView={4}
						freeMode={true}
						watchSlidesProgress={true}
						modules={[Thumbs]}
						className="w-full max-w-[350px]"
					>
						{thumbs.map((img, i) => (
							<SwiperSlide key={i}>
								<img
									src={img}
									alt={`product ${i + 1}`}
									onClick={() => setThumbnail(i)}
									className={`w-full h-full object-cover cursor-pointer rounded-[9px] hover:opacity-[0.5] ${
										selectedThumbs === i
											? "border-orange-500 border-[4px] opacity-50"
											: ""
									}`}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>

			{/* Modal */}
			{showModal && (
				<div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
					<div className="relative rounded-lg">
						<button className="customNext absolute top-40 -right-2 z-50 bg-white p-2 rounded-full shadow w-8 h-8 flex justify-center items-center">
							<img src={next} alt="next" className="w-3 h-3" />
						</button>
						<button className="customPrev absolute top-40 -left-2 z-50 bg-white p-2 rounded-full shadow w-8 h-8">
							<img
								src={prev}
								alt="previous"
								className="w-3 h-3
							cursor-pointer transition-all duration-200 hover:invert hover:sepia hover:hue-rotate-[10deg] hover:saturate-[800%] hover:brightness-110"
							/>
						</button>
						<button
							className="absolute right-0 -top-6 z-50"
							onClick={() => setShowModal(false)}
						>
							<img
								src={close}
								alt="close"
								className="w-5 h-5 invert sepia hue-rotate-[10deg] saturate-[700%] brightness-40"
							/>
						</button>

						<Swiper
							slidesPerView={1}
							spaceBetween={10}
							initialSlide={selectedThumbs}
							loop={true}
							onSlideChange={(swiper) => setSelectedThumbs(swiper.activeIndex)}
							modules={[Navigation]}
							navigation={{
								nextEl: ".customNext",
								prevEl: ".customPrev",
							}}
							onSwiper={(swiper) => (modalSwiperRef.current = swiper)}
							className="w-full max-w-[400px] mb-4"
						>
							{images.map((img, i) => (
								<SwiperSlide key={i}>
									<img
										src={img}
										alt={`product ${i + 1}`}
										className="w-[400px] h-[350px] object-cover rounded-[9px]"
									/>
								</SwiperSlide>
							))}
						</Swiper>

						<div className="w-full max-w-[400px] mt-9 flex gap-4 justify-center">
							{thumbs.map((img, i) => (
								<img
									key={i}
									src={img}
									alt={`thumb ${i + 1}`}
									onClick={() => {
										setSelectedThumbs(i);
										modalSwiperRef.current?.slideTo(i);
									}}
									className={`w-[60px] h-[60px] object-cover rounded-[9px] cursor-pointer hover:opacity-50 ${
										selectedThumbs === i
											? "border-orange-500 border-[4px] opacity-50"
											: ""
									}`}
								/>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Images;
