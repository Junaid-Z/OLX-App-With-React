import Carousel from 'react-bootstrap/Carousel';
import slide from '../resources/Slide.webp'
function Slide() {
	return (
		<Carousel style={{ maxWidth: "1280px", margin: "20px auto 40px auto", }}>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={slide}
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={slide}
					alt="Second slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={slide}
					alt="Third slide"
				/>
			</Carousel.Item>
		</Carousel>
	);
}

export default Slide;