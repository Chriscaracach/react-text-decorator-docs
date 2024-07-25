import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/img-1.svg").default,
    description: (
      <>
        Just keep using your texts, but wrap them in RTD components to see magic
        happen.
      </>
    ),
  },
  {
    title: "Customize Decorators",
    Svg: require("@site/static/img/img-2.svg").default,
    description: (
      <>Customize the decorators with simple parameters and properties.</>
    ),
  },
  {
    title: "Consistency",
    Svg: require("@site/static/img/img-3.svg").default,
    description: <>Make your data look better and consistent</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
