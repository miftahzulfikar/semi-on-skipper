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

  const switchMode = () => {
    const body = document.body;
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode');
    } else {
      body.setAttribute('theme-mode', 'dark');
    }
  };

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
        <p>Light Button (default)</p>
        <Space>
          <Button>Primary Button</Button>
          <Button type="secondary">Secondary Button</Button>
          <Button type="tertiary">Tertiary Button</Button>
          <Button type="warning">Warning Button</Button>
          <Button type="danger">Danger Button</Button>
        </Space>
        <p>Solid Button</p>
        <Space>
          <Button theme="solid">Primary Button</Button>
          <Button theme="solid" type="secondary">
            Secondary Button
          </Button>
          <Button theme="solid" type="tertiary">
            Tertiary Button
          </Button>
          <Button theme="solid" type="warning">
            Warning Button
          </Button>
          <Button theme="solid" type="danger">
            Danger Button
          </Button>
        </Space>

        <h2>Light / Dark Mode</h2>
        <Button onClick={switchMode}>Switch Mode</Button>
      </div>
    </Main>
  );
};

export default Semi;
