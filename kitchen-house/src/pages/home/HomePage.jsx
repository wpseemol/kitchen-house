import { Helmet } from 'react-helmet-async';
import HomeHero from '../../components/homeHero/HomeHero';
import PreOrder from '../../components/preOrder/PreOrder';
import ProductSection from '../../components/productSection/ProductSection';
import StoryInfo from '../../components/storyInfo/StoryInfo';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Kitchen House || Home</title>
            </Helmet>

            {/* home hero section */}
            <section>
                <HomeHero />
            </section>

            {/* some Detail about our stor */}
            <section>
                <StoryInfo />
            </section>
            {/* product section */}
            <section>
                <ProductSection />
            </section>

            {/* pre-Order Section */}
            <section>
                <PreOrder />
            </section>
        </>
    );
};

export default HomePage;
