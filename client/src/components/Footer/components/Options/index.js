import { useState } from 'react';
import styles from './options.module.scss';
import { AddIcon, ConnectIcon, VolumeIcon } from 'assets/icons/icons';
import Slider from 'components/Footer/components/Slider';

const Options = () => {
  const [range, setRange] = useState(50);

  return (
    <div className={styles.options}>
      <AddIcon />
      <ConnectIcon />
      <VolumeIcon />
      <Slider sm={true} range={range} setRange={setRange} />
    </div>
  );
};

export default Options;
