/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Grid, Flex, Button } from 'theme-ui';
import { useState } from 'react';
import {pricing} from "../data/pricing";
import SectionHeading from "./section-heading";
import PriceTable from "./cards/price-table";

const PricingPage = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handlePlan = (plan) => {
    plan === 'monthly' ? setIsMonthly(true) : setIsMonthly(false);
  };
  return (
    <section id="pricing" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Pricing Plan"
          title="Flexible Pay Per Project Plan"
          as={'h1'}
        />
        <Flex sx={styles.priceSwitcher}>
          <Button
            variant="default"
            onClick={() => handlePlan('monthly')}
            className={`${isMonthly ? 'active' : ''}`}
          >
            Monthly Plan
          </Button>
          <Button
            variant="default"
            onClick={() => handlePlan('annual')}
            className={`${!isMonthly ? 'active' : ''}`}
          >
            Annual Plan
          </Button>
        </Flex>
        <Grid sx={styles.grid}>
          {pricing.map((item) => (
            <PriceTable key={item.id} id={item.id} data={item} isMonthly={isMonthly} />
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default PricingPage;

const styles = {
  section: {
    pt: [40, null, null, null, 60],
    pb: [60, null, null, null, 60],
  },
  heading: {
    maxWidth: 545,
    mx: 'auto',
    textAlign: 'center',
    h2: {
      fontSize: [24, null, null, 36],
    },
  },
  priceSwitcher: {
    backgroundColor: '#F7F8FB',
    borderRadius: '5px',
    border: `1px solid rgba(#fff, 0.2)`,
    margin: ['0 auto 40px', null, null, '0 auto 50px'],
    maxWidth: 302,
    position: 'relative',
    p: 2,
    button: {
      color: 'textAlt',
      minHeight: '48px',
      px: '25px',
      fontWeight: 500,
      '&.active': {
        backgroundColor: '#fff',
        color: 'textAlt',
      },
      ':focus': {
        outline: '0 none',
      },
    },
  },
  grid: {
    gridGap: [20, null, null, 20],
    gridTemplateColumns: ['repeat(1, 1fr)', null, 'repeat(4, 1fr)'],
    maxWidth: 1360,
    margin: '0 auto',
  },
};
