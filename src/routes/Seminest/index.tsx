import { Helmet } from '@tokopedia/skipper/head';
import { useNavigate } from '@tokopedia/skipper/router';

import type { SkipperComponentType } from '@tokopedia/skipper/router';

import Main from '@/components/Main';

import * as styles from './seminest.module.css';
import { Button as SemiButton, Space } from '@douyinfe/semi-ui';
import { Button } from '@nest-ui/core';

/**
 * @function Seminest
 */
const Seminest: SkipperComponentType = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <Helmet>
        <title>Blog | Skipper Framework</title>
      </Helmet>

      <div className={styles.wrapperContent}>
        <Space>
          <p className={styles.title}>Semi Design</p>
          <button className={styles.ctaButton} type="button" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </Space>
        <p className={styles.description}>Test Semi design on skipper framework</p>

        <h2>Semi</h2>
        <Space>
          <SemiButton>Primary Button</SemiButton>
          <SemiButton type="secondary">Secondary Button</SemiButton>
          <SemiButton type="tertiary">Tertiary Button</SemiButton>
          <SemiButton type="warning">Warning Button</SemiButton>
          <SemiButton type="danger">Danger Button</SemiButton>
        </Space>

        <h2>Nest</h2>
        <Space>
          <Button>Primary Button</Button>
          <Button variant="ghost">Secondary Button</Button>
          <Button variant="text">Tertiary Button</Button>
        </Space>
      </div>
    </Main>
  );
};

export default Seminest;
