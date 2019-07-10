import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { saasTwoTheme } from 'common/src/theme/saasTwo';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from 'common/src/containers/SaasTwo/sassTwo.style';

import Navbar from 'common/src/containers/SaasTwo/Navbar';
import BannerSection from 'common/src/containers/SaasTwo/Banner';
import WorkingProcessSection from 'common/src/containers/SaasTwo/WorkingProcess';
import SolutionSection from 'common/src/containers/SaasTwo/SolutionSection';
import ServiceSection from 'common/src/containers/saasTwo/Service';
import InfoSectionContpaq from 'common/src/containers/SaasTwo/Contpaq1';
import InfoSectionLeft from 'common/src/containers/SaasTwo/Info-left';
import PricingSection from 'common/src/containers/SaasTwo/Pricing';
import PartnerSection from 'common/src/containers/SaasTwo/Partner';
import FaqSection from 'common/src/containers/SaasTwo/Faq';
import TrialSection from 'common/src/containers/SaasTwo/Trial';
import FeatureSection from 'common/src/containers/SaasTwo/Feature';
import UpdateScreen from 'common/src/containers/SaasTwo/UpdateScreen';
import TestimonialSection from 'common/src/containers/SaasTwo/Testimonial';
import Footer from 'common/src/containers/SaasTwo/Footer';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={saasTwoTheme}>
      <Fragment>
        <SEO title="ADAWARE, asesores de las mejores soluciones contables y administrativas" />
        <Modal />
        <ResetCSS />
        <GlobalStyle />
        {/* End of Home head section */}
        {/* Start Home wrapper section */}
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <WorkingProcessSection />
          <SolutionSection />
          <ServiceSection />
          <InfoSectionContpaq />
          <InfoSectionLeft />

          {/* <UpdateScreen />
          <PricingSection /> */}

          <TestimonialSection />
          <FaqSection />
          <TrialSection />
          <Footer />
        </ContentWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
