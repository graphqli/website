import React from 'react';
import {Fragment} from "react";
import StickyHeader from "../components/header/sticky-header";
import {ThemeProvider} from "theme-ui";
import {themeSettings} from "../theme/theme-settings";
import HeroBanner from "../components/hero-banner";
import {HomePageData} from "../data/home-page";
import Seo from "../components/seo";
import SDKintegration from "../components/sdk-integration";
import Communications from "../components/support";
import Footer from "../components/footer/footer";
import Features from "../components/features";
import Projects from "../components/projects";
import Layout from '@theme/Layout';
import ExampleQueries from "../components/example-queries";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Hello() {

    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;

    return (
        <Layout
            title={`${siteConfig.title}`}
            description={`${siteConfig.tagline}`}>
            <ThemeProvider theme={themeSettings}>
                {/*overwrites title and include SEO*/}
                <Seo data={HomePageData.seo}/>

                {/*                <StickyHeader/>*/}
                <HeroBanner data={HomePageData.header}/>
                <ExampleQueries data={HomePageData.exampleQueries}/>
                <Features features={HomePageData.features1} hideSection={true}/>
                {/*<Projects data={HomePageData.projects} />*/}
                <Features features={HomePageData.features2} hideSection={true}/>
                <Features features={HomePageData.features3} hideSection={true}/>
                <SDKintegration data={HomePageData.sdk}/>
                <Communications data={HomePageData.communications}/>
                <Footer/>

            </ThemeProvider>
        </Layout>
    );
}

export default Hello;