import HomeHero from '../../components/homeHero/HomeHero';
import ProductSection from '../../components/productSection/ProductSection';
import StoryInfo from '../../components/storyInfo/StoryInfo';

const HomePage = () => {
    return (
        <>
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
        </>
    );
};

export default HomePage;
