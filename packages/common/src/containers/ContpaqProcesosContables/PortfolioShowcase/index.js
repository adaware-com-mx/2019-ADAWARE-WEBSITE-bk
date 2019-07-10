import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import ScrollableTabBar from 'rc-tabs/lib/ScrollableTabBar';
import Box from 'reusecore/src/elements/Box';
import Button from 'reusecore/src/elements/Button'
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import Container from '../../../components/UI/Container';
import GlideCarousel from '../../../components/GlideCarousel';
import GlideSlide from '../../../components/GlideCarousel/glideSlide';
import {
  PortfolioShowcaseWrapper,
  PortfolioShowcaseItem,
  PortfolioLink,
  BuiltWith,
  PortfolioMeta,
  MetaItem,
} from './portfolioShowcase.style';
import { PORTFOLIO_SHOWCASE, PORTFOLIO_COMERCIAL } from '../../../data/SaasTwo/index';

const PortfolioShowcase = ({
  sectionWrapper,
  secTitleWrapper,
  secTitleWrapper2,
  secTitle,
  secDescription,
  portfolioImage,
  portfolioDetails,
  titleStyle,
  detailsStyle,
  btnStyle,
  secTab,
  secComercialWrapper,
}) => {
  //Carousel Options
  const carouselOptions = {
    type: 'static',
    perView: 1,
    gap: 0,
    animationDuration: 900,
  };

  return (
    <Box {...sectionWrapper} as="section" id="portfolio_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="Soluciones CONTPAQi para procesos contables" />
          <Text
            {...secDescription}
            content="Deja de perder dinero y comienza operar tu empresa con las mejores herramientas en procesos contables. Contamos con más de 10 años de experiencia tecnológica en los Sistemas Administrativos CONTPAQi y sabemos que estos aportarán eficiencia en tu organización."
          />
        </Box>

        <PortfolioShowcaseWrapper>
          <Tabs
            renderTabBar={() => <ScrollableInkTabBar pageSize={3} speed={5} />}
            renderTabContent={() => <TabContent animated={false} />}
          >
            {PORTFOLIO_SHOWCASE.map((tabItem, index) => (
              <TabPane
                tab={
                  <Box>
                    <Text {...secTab}
                    content="CONTPAQ®"
                    data-text="CONTPAQ®"
                    as="div"
                    />
                    <Text
                    content={tabItem.title}
                    data-text={tabItem.title}
                    as="div"
                    />
                  </Box>
                }
                key={index + 1}
              >
                <GlideCarousel
                  carouselSelector={`portfolio-showcase-carousel-${index + 1}`}
                  options={carouselOptions}
                  controls={false}
                >
                  <>
                    {tabItem.portfolioItem.map((portfolioItem, index) => (
                      <GlideSlide key={`PortfolioShowcaseItem-${index}`}>
                        <PortfolioShowcaseItem>
                          <Box {...portfolioImage}>
                            <Image
                              src={portfolioItem.image}
                              alt={`Solucion-Contpaqi-${index + 1}`}
                            />
                          </Box>
                          <Box {...portfolioDetails}>
                            <PortfolioLink>
                              <Link href={portfolioItem.link || '#'}>
                                <a><Button title="MÁS INFORMACIÓN" {...btnStyle} /></a>
                              </Link>
                            </PortfolioLink>
                            <Heading
                              content={portfolioItem.title}
                              {...titleStyle}
                            />
                            <Text
                              content={portfolioItem.description}
                              {...detailsStyle}
                            />
                            {portfolioItem.buildWith ? (
                              <BuiltWith>
                                {portfolioItem.buildWith.map((item, index) => (
                                  <span key={`buildWith-item-${index}`}>
                                    {item.content}
                                  </span>
                                ))}
                              </BuiltWith>
                            ) : (
                              ''
                            )}
                          </Box>

                          {portfolioItem.featuredIn ||
                          portfolioItem.view ||
                          portfolioItem.love ||
                          portfolioItem.feedback ? (
                            <PortfolioMeta>
                              {portfolioItem.featuredIn ? (
                                <MetaItem className="meta_featured">
                                  Actualización:
                                  <Link
                                    href={portfolioItem.featuredLink || '#'}
                                  >
                                    <a>{portfolioItem.featuredIn}</a>
                                  </Link>
                                </MetaItem>
                              ) : (
                                ''
                              )}
                              {portfolioItem.view ? (
                                <MetaItem>
                                  Versión: <b>{portfolioItem.view}</b> 
                                </MetaItem>
                              ) : (
                                ''
                              )}
                              {portfolioItem.love ? (
                                <MetaItem>
                                  <b>{portfolioItem.love}</b> 
                                </MetaItem>
                              ) : (
                                ''
                              )}
                              {portfolioItem.feedback ? (
                                <MetaItem>
                                  <b>{portfolioItem.feedback}</b> 
                                </MetaItem>
                              ) : (
                                ''
                              )}
                            </PortfolioMeta>
                          ) : (
                            ''
                          )}
                        </PortfolioShowcaseItem>
                      </GlideSlide>
                    ))}
                  </>
                </GlideCarousel>
              </TabPane>
            ))}
          </Tabs>
        </PortfolioShowcaseWrapper>
      </Container>


      <Container noGutter mobileGutter width="1200px" className="container-comercial" {...secComercialWrapper}>
        <Box {...secTitleWrapper2}>
          <Heading {...secTitle} content="Soluciones CONTPAQi para procesos comerciales" />
          <Text
            {...secDescription}
            content="Operar tu empresa con las mejores herramientas en procesos comerciales. Deja de perder oportunidades y suma tu negocio a la transformación digital, acércate a la tecnología que te ofrece el software de CONTPAQi®."
          />
        </Box>

        <PortfolioShowcaseWrapper>
          <Tabs
            renderTabBar={() => <ScrollableInkTabBar pageSize={3} speed={5} />}
            renderTabContent={() => <TabContent animated={false} />}
          >
            {PORTFOLIO_COMERCIAL.map((tabItem, index) => (
              <TabPane
                tab={
                  <Box>
                    <Text {...secTab}
                    content="CONTPAQ®"
                    data-text="CONTPAQ®"
                    
                    />
                    <Text
                    content={tabItem.title}
                    data-text={tabItem.title}
                    
                    />
                  </Box>
                }
                key={index + 1}
              >
                <GlideCarousel
                  carouselSelector={`portfolio-showcase-carousel-${index + 1}`}
                  options={carouselOptions}
                  controls={false}
                >
                  <>
                    {tabItem.portfolioItem.map((portfolioItem, index) => (
                      <GlideSlide key={`PortfolioShowcaseItem-${index}`}>
                        <PortfolioShowcaseItem>
                          <Box {...portfolioImage}>
                            <Image
                              src={portfolioItem.image}
                              alt={`Solucion-Contpaqi-${index + 1}`}
                            />
                          </Box>
                          <Box {...portfolioDetails}>
                            <PortfolioLink>
                              <Link href={portfolioItem.link || '#'}>
                                <a><Button title="MÁS INFORMACIÓN" {...btnStyle} /></a>
                              </Link>
                            </PortfolioLink>
                            <Heading
                              content={portfolioItem.title}
                              {...titleStyle}
                            />
                            <Text
                              content={portfolioItem.description}
                              {...detailsStyle}
                            />
                            {portfolioItem.buildWith ? (
                              <BuiltWith>
                                {portfolioItem.buildWith.map((item, index) => (
                                  <span key={`buildWith-item-${index}`}>
                                    {item.content}
                                  </span>
                                ))}
                              </BuiltWith>
                            ) : (
                              ''
                            )}
                          </Box>

                          {portfolioItem.featuredIn ||
                          portfolioItem.view ||
                          portfolioItem.love ||
                          portfolioItem.feedback ? (
                            <PortfolioMeta>
                              {portfolioItem.featuredIn ? (
                                <MetaItem className="meta_featured">
                                  Actualización:
                                  <Link
                                    href={portfolioItem.featuredLink || '#'}
                                  >
                                    <a>{portfolioItem.featuredIn}</a>
                                  </Link>
                                </MetaItem>
                              ) : (
                                ''
                              )}
                              {portfolioItem.view ? (
                                <MetaItem>
                                  Versión: <b>{portfolioItem.view}</b> 
                                </MetaItem>
                              ) : (
                                ''
                              )}
                              {portfolioItem.love ? (
                                <MetaItem>
                                  <b>{portfolioItem.love}</b> 
                                </MetaItem>
                              ) : (
                                ''
                              )}
                              {portfolioItem.feedback ? (
                                <MetaItem>
                                  <b>{portfolioItem.feedback}</b> 
                                </MetaItem>
                              ) : (
                                ''
                              )}
                            </PortfolioMeta>
                          ) : (
                            ''
                          )}
                        </PortfolioShowcaseItem>
                      </GlideSlide>
                    ))}
                  </>
                </GlideCarousel>
              </TabPane>
            ))}
          </Tabs>
        </PortfolioShowcaseWrapper>
      </Container>
    </Box>
  );
};

PortfolioShowcase.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitleWrapper2: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  portfolioImage: PropTypes.object,
  portfolioDetails: PropTypes.object,
  titleStyle: PropTypes.object,
  detailsStyle: PropTypes.object,
  button: PropTypes.object,
  secTab: PropTypes.object,
  secComercialWrapper: PropTypes.object,
};

PortfolioShowcase.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '80px', '100px', '110px', '150px'],
    pb: ['60px', '80px', '100px', '110px', '150px'],
  },
  secTitleWrapper: {
    width: ['100%', '100%', '80%', '80%', '80%'],
    mb: ['50px', '65px'],
  },
  secTitleWrapper2: {
    width: ['100%', '100%', '90%', '90%', '90%'],
    mb: ['50px', '65px'],
    mt: ['80px', '100px'],
  },
  secTitle: {
    fontSize: ['26px', '32px', '36px', '40px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px',
    lineHeight: '1.25',
  },
  secDescription: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    color: '#343d48cc',
    lineHeight: '2',
    mb: '33px',
  },
  portfolioImage: {
    width: [1, 1, 1 / 2],
  },
  portfolioDetails: {
    width: [1, 1, 1 / 2],
    p: ['30px 0 0 0', '40px 0 0 0', '0 0 0 30px', '0 50px', '0 50px'],
  },
  titleStyle: {
    fontSize: ['22px', '22px', '26px', '40px', '40px'],
    fontWeight: '600',
    color: '#302b4e',
    mb: '17px',
  },
  detailsStyle: {
    fontSize: ['12px', '12px', '13px', '14px', '14px'],
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'secondaryWithBg',
    pl: ['15px', '30px'],
    pr: ['15px', '30px'],
  },
  secTab: {
    mb: '0',
  },
  secComercialWrapper: {
    pt: ['60px', '80px', '100px', '110px', '150px'],
  },
};

export default PortfolioShowcase;