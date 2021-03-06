/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';

import InfoCard from '../layout/InfoCard';
import CircleProgress from './CircleProgress';

type Props = {
  title: string;
  subheader?: string;
  variant?: string;
  progress: number | string;
  deepLink?: string | { title: string; link: string };
  gacontext?: string;
};

const useStyles = makeStyles({
  root: {
    height: '100%',
    width: 250,
  },
});

const ProgressCard: FC<Props> = props => {
  const classes = useStyles(props);
  const { title, subheader, progress, deepLink, variant } = props;

  // TODO(freben): Make type more strict when InfoCard is written in TS
  let link: any = undefined;
  if (deepLink) {
    if (typeof deepLink === 'string') {
      link = { title: 'View more', link: deepLink };
    } else {
      link = deepLink;
    }
  }

  return (
    <div className={classes.root}>
      <InfoCard
        title={title}
        subheader={subheader}
        deepLink={link}
        variant={variant}
      >
        <CircleProgress value={Number(progress)} />
      </InfoCard>
    </div>
  );
};

export default ProgressCard;
