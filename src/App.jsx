import {
  Hero,
  CustomerReviews,
  Footer,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from "./sections/index.js";
import Nav from "./components/Nav.jsx";
import "./index.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useInView } from "react-intersection-observer";

const App = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: popularProductsRef, inView: popularProductsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: superQualityRef, inView: superQualityInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: specialOffersRef, inView: specialOffersInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: customerReviewsRef, inView: customerReviewsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: subscribeRef, inView: subscribeInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: footerRef, inView: footerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <main className="relative">
      <Nav />
      <section
        ref={heroRef}
        className={`x1-padding-1 wide:padding-r padding-b ${
          heroInView ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <Hero />
      </section>
      <section
        ref={popularProductsRef}
        className={`padding ${
          popularProductsInView ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <PopularProducts />
      </section>
      <section
        ref={superQualityRef}
        className={`padding ${
          superQualityInView ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <SuperQuality />
      </section>
      <section
        ref={servicesRef}
        className={`padding-x py-10 ${
          servicesInView ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <Services />
      </section>
      <section
        ref={specialOffersRef}
        className={`padding ${
          specialOffersInView ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <SpecialOffers />
      </section>
      <section
        ref={customerReviewsRef}
        className={`padding bg-pale-blue dark:bg-slate-600 ${
          customerReviewsInView ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <CustomerReviews />
      </section>
      <section
        ref={subscribeRef}
        className={`padding-x sm:py-32 py-16 w-full  ${
          subscribeInView ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <Subscribe />
      </section>
      <section
        ref={footerRef}
        className={`padding-x padding-t pb-8 bg-black ${
          footerInView ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <Footer />
      </section>
      <SpeedInsights />
    </main>
  );
};

export default App;
