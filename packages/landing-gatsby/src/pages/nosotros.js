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
import BannerSection from 'common/src/containers/Nosotros/Banner';
import ProblemSection from 'common/src/containers/Nosotros/Problem';
import WorkHistory from 'common/src/containers/Nosotros/WorkHistory';
import AboutUsSection from 'common/src/containers/Nosotros/AboutUsSection';

import PartnerSection from 'common/src/containers/Nosotros/Partner';
import TestimonialSection from 'common/src/containers/SaasTwo/Testimonial';

import Footer from 'common/src/containers/SaasTwo/Footer';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={saasTwoTheme}>
      <Fragment>
        <SEO title="ADAWARE - Sobre nosotros y sobre como podemos asesorarte" />
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
          <ProblemSection />
          <WorkHistory />

          <PartnerSection />
          <AboutUsSection />
          <TestimonialSection />

          <Footer />
        </ContentWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
