import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '开始到结束',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        附带一切你需要理解完整系统，如SSL/TLS：分块密码、流密码、哈希函数、消息认证码、公钥加密、密钥协商协议和签名算法。
      </>
    ),
  },
  {
    title: '通过实践来学习',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        学会如何利用常见的加密缺陷，只需一点时间和你钟爱的编程语言。

        精通伪造管理员Cookie，恢复密码，甚至在你自己的随机数生成器中设置后门。
      </>
    ),
  },
  {
    title: '在各个领域皆得心应手',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        无数字版权管理限制，可在所有常见格式中获取：

        PDF（适用于Mac和PC）
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
