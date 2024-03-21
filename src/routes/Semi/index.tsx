import { Helmet } from '@tokopedia/skipper/head';
import { useNavigate } from '@tokopedia/skipper/router';

import type { SkipperComponentType } from '@tokopedia/skipper/router';

import Main from '@/components/Main';

import * as styles from './semi.module.css';
import { Button, Space } from '@douyinfe/semi-ui';

/**
 * @function Semi
 */
const Semi: SkipperComponentType = () => {
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

        <h2>Button</h2>
        <Space>
          <Button>Primary Button</Button>
          <Button type="secondary">Secondary Button</Button>
          <Button type="tertiary">Tertiary Button</Button>
          <Button type="warning">Warning Button</Button>
          <Button type="danger">Danger Button</Button>
        </Space>
      </div>
    </Main>
  );
};

export default Semi;
