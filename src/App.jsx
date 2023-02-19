import SMNavbar from "./Components/SMNavbar";
import Slide from "./Components/Carousel";
import './styles/CardHolder.css'
import SMCard from "./Components/SMCard";
import { cards } from "./data/data";
import BlueCard from "./Components/BlueCard";
import './styles/Main.css'
import Mob from './resources/Mob.webp'
import appGallary from './resources/AppGallery.svg'
import appStore from './resources/AppStore.svg'
import googlePlay from './resources/GooglePlay.svg'
import SMFooter from "./Components/SMFooter";
const App = () => {
	return (
		<>
			<SMNavbar />
			<main>
				<Slide />
				<div id="cardHolder">
					<h4>Fresh recommendations</h4>
					<div id="cards">
						{
							cards.map((card, i) => {
								if (i === 5) {
									return (
										<>
											<BlueCard />
											<SMCard title={card.title} location={card.location} imageLink={card.imageLink} price={card.price} />
										</>
									)
								}
								else {
									return (
										<SMCard title={card.title} location={card.location} imageLink={card.imageLink} price={card.price} />
									)
								}
							})
						}
					</div>
					<div className="load">Load More</div>
				</div>
				<div className="tryApp">
					<div>
						<img src={Mob} alt="" />
						<div className="tryAppTextHolder">
							<div className="tryAppTitle">Try the OLX app</div>
							<div className="tryAppText">Buy, sell and find just about anything using the app on your mobile.</div>
						</div>
						<div className="hDiv"></div>
						<div className="dwnldApp">
							<div className="dwnldAppTitle">
								Get your app today
							</div>
							<div className="dwnldAppOpts">
								<a href="/">
									<img src={appStore} alt="" />
								</a>
								<a href="/">
									<img src={googlePlay} alt="" />
								</a>
								<a href="/">
									<img src={appGallary} alt="" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</main>
			<SMFooter />
			<div className="extra">
				<div>
					<span>
						Free Classifieds in Pakistan
					</span>
					. © 2006-2023 OLX
				</div>
			</div>
		</>
	);
}

export default App;