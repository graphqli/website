/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, Container, Image} from 'theme-ui';
import SectionHeading from "./section-heading";

const SdkIntegraion = ({ data }) => {
  return (
    <section id="supported-langs" sx={styles.section}>
      <Container>
        <SectionHeading slogan={data?.header} title={data?.title} />
        <figure sx={styles.figure}>
          <a target="_blank" href={data?.link}>
            <Image width={'auto'} height={320} src={data?.image.url} alt={data?.title} title={data?.title} />
          </a>
        </figure>
      </Container>
    </section>
  );
};

export default SdkIntegraion;

const styles = {
  section: {
    pt: [40, null, null, null, 60],
    pb: [40, null, null, null, 60],
  },
  figure: {
    margin: 0,
    textAlign: 'center',
    img: {
      height: 'auto',
      maxWidth: '100%',
    },
  },
};
