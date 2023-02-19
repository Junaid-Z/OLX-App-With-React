import facebook from '../resources/facebook.svg'
import twitter from '../resources/twitter.svg'
import youtube from '../resources/youtube.svg'
import insta from '../resources/insta.svg'
import appGallary from '../resources/AppGallery.svg'
import appStore from '../resources/AppStore.svg'
import googlePlay from '../resources/GooglePlay.svg'
function SMFooter() {
    return (
        <footer>
            <div>
                <div className="category">
                    <div className="title">
                        Popular categories
                    </div>
                    <div className="categoryLink">Cars</div>
                    <div className="categoryLink">Flats For Rent</div>
                    <div className="categoryLink">Mobile Phones</div>
                    <div className="categoryLink">Jobs</div>
                </div>
                <div className="category">
                    <div className="title">trending searches</div>
                    <div className="categoryLink">Bikes</div>
                    <div className="categoryLink">watches</div>
                    <div className="categoryLink">Books</div>
                    <div className="categoryLink">Dogs</div>
                </div>
                <div className="category">
                    <div className="title">about us</div>
                    <div className="categoryLink">About EMPG</div>
                    <div className="categoryLink">Old Blog</div>
                    <div className="categoryLink">Contact Us</div>
                    <div className="categoryLink">OLX for Businesses</div>
                </div>
                <div className="category">
                    <div className="title">OLX</div>
                    <div className="categoryLink">Help</div>
                    <div className="categoryLink">Sitemap</div>
                    <div className="categoryLink">Terms Of Use</div>
                    <div className="categoryLink">Privacy Policy</div>
                </div>
                <div className="category2">
                    <div className="title">Follow Us</div>
                    <div className="footerIcons">
                        <a href="/">
                            <img src={facebook} alt="" />
                        </a>
                        <a href="/">
                            <img src={twitter} alt="" />
                        </a>
                        <a href="/">
                            <img src={youtube} alt="" />
                        </a>
                        <a href="/">
                            <img src={insta} alt="" />
                        </a>
                    </div>
                    <div className="footerDownloadApp">
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
        </footer>
    )
}
export default SMFooter;