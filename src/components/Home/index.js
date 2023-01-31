import Header from '../Header'
import RestaurantsOffer from '../RestaurantsOffer'
import RestaurantsList from '../RestaurantsList'
import Footer from '../Footer'

const Home = () => (
  <>
    <Header activeTabId="Home" />
    <RestaurantsOffer />
    <RestaurantsList />
    <Footer />
  </>
)

export default Home
