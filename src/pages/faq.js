/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, Container, ThemeProvider} from 'theme-ui';
import React, {Fragment} from 'react';
import Seo from "../components/seo";
import {HomePageData} from "../data/home-page";
import StickyHeader from "../components/header/sticky-header";
import SectionHeading from "../components/section-heading";
import SDKintegration from "../components/sdk-integration";
import Communications from "../components/support";
import Footer from "../components/footer/footer";
import {FAQData} from "../data/faq";
import Accordion from "../components/rc-collapse/accordion";
import {themeSettings} from "../theme/theme-settings";
import PricingPage from "../components/pricing";

const Faq = () => {
    return (
        <ThemeProvider theme={themeSettings}>
            {/*overwrites title and include SEO*/}
            <Seo data={HomePageData.seo}/>
            <Fragment>
                <Seo data={HomePageData.seo}/>
                <StickyHeader/>
                <Container sx={styles.container}>
                    <SectionHeading title="Frequently Asked Questions" as={'h1'}/>
                    <Accordion faqs={FAQData}/>
                </Container>
                <SDKintegration data={HomePageData.sdk}/>
                <Communications data={HomePageData.communications}/>
                <Footer/>
            </Fragment>
        </ThemeProvider>

    );
};

export default Faq;

const styles = {
    container: {
        my: 100,
    },
};
