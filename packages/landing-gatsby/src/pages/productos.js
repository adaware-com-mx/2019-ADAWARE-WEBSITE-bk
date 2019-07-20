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

import BlogSection from 'common/src/containers/Productos/BlogSection';
import Navbar from 'common/src/containers/SaasTwo/Navbar';
import BannerSection from 'common/src/containers/Productos/Banner';

import PartnerSection from 'common/src/containers/Nosotros/Partner';
import TestimonialSection from 'common/src/containers/SaasTwo/Testimonial';

import Footer from 'common/src/containers/SaasTwo/Footer';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={saasTwoTheme}>
      <Fragment>
        <SEO title="ADAWARE - Productos Administrativos, Contables, Seguridad TI" />
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
          <BlogSection />

          <Footer />
        </ContentWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};