import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { Box, Text, Button, Heading, Meter } from 'grommet';
import { withTheme } from 'grommet/components/hocs';
import { deepMerge } from 'grommet/utils/object';
import { Close, StatusGood, StatusWarning, StatusCritical, StatusUnknown, StatusInfo, StatusDisabled } from 'grommet-icons';
import { longDate } from '../../utils/moment';

import doc from './doc';

const StatusIcons = {
  ok: StatusGood,
  warning: StatusWarning,
  error: StatusCritical,
  unknown: StatusUnknown,
  disabled: StatusDisabled,
  info: StatusInfo,
};

const SIZE_LEVELS = {
  small: {
    level: 4,
    size: 'xsmall',
    meterSize: 'xsmall',
  },
  medium: {
    level: 3,
    size: 'small',
    meterSize: 'small',
  },
  large: {
    level: 1,
    size: 'medium',
    meterSize: 'large',
  },
};

class Notification extends Component {
  static contextTypes = {
    grommet: PropTypes.object,
  };
  static defaultProps = {
    status: 'info',
    size: 'medium',
    message: 'Notification...',
    icon: true,
    animation: 'fadeIn',
    closer: undefined,
    pad: 'small',
    margin: 'small',
    locale: 'en-us',
  }

  render() {
    const {
      status, message, locale, closer, margin, reverse, a11yTitle, background, border, timestamp,
      theme, icon, strong, round, pad, size, state, onClose, percentComplete, ...rest
    } = this.props;
    const sizeLevel = SIZE_LEVELS[size];
    const { grommet } = this.context;
    const Border = deepMerge(theme.notification ? theme.notification.border : {}, border);
    const Round = round ||
      (theme.notification && theme.notification.border ?
        theme.notification.border.round : undefined);
    let closeBtn;
    if (onClose) {
      const closeIcon = closer || <Close size={sizeLevel.size} />;
      closeBtn = (
        <Box pad={pad}>
          <Button
            a11yTitle={a11yTitle}
            onClick={onClose || (() => {})}
          >
            {closeIcon}
          </Button>
        </Box>
      );
    }
    let heading = message;
    if (strong) {
      heading = <strong>{heading}</strong>;
    }
    let statusIcon;
    if (icon) {
      const StatusIcon = StatusIcons[status];
      statusIcon = (
        React.isValidElement(icon) ? icon : <StatusIcon size={sizeLevel.size} />
      );
    }
    let progress;
    if (percentComplete || percentComplete === 0) {
      progress = (
        <Box direction='row' align='center' pad={{ between: 'medium' }} style={{ whiteSpace: 'nowrap' }}>
          <Meter
            size={sizeLevel.meterSize}
            thickness='small'
            values={[{
              label: percentComplete,
              value: percentComplete,
              color: 'accent-1',
            }]}
          />
          <Text size='small' >
            {` ${percentComplete} %`}
          </Text>
        </Box>
      );
    }
    let timeStamp;
    if (timestamp) {
      timeStamp = longDate(timestamp, locale);
    }
    return (
      <Box
        direction={reverse ? 'row-reverse' : 'row'}
        fill='horizontal'
        border={Border}
        round={Round}
        onClick={this.clickTag}
        role='checkbox'
        aria-checked={true}
        background={background || `status-${status}`}
        reverse={reverse}
        theme={theme}
        grommet={grommet}
        {...rest}

      >
        <Box flex='grow' pad={pad}>
          <Heading level={sizeLevel.level} margin={margin} style={{ maxWidth: '100%' }}>
            <Box direction={reverse ? 'row-reverse' : 'row'} align='center' gap='small'>
              {statusIcon}
              {heading}
            </Box>
          </Heading>
          <Text size={sizeLevel.size}>
            {state}
          </Text>
          <Text size={sizeLevel.size}>
            {timeStamp}
          </Text>
          {progress}
        </Box>
        {closeBtn}
      </Box>
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  doc(Notification);
}

export default compose(
  withTheme,
)(Notification);
