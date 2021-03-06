import React, { Component } from 'react';
import { compose } from 'recompose';

import { Box, DropButton, Keyboard, TextInput } from 'grommet';
import { withTheme } from 'grommet/components/hocs';

import SelectContainer from './SelectContainer';
import doc from './doc';

class Select extends Component {
  static defaultProps = {
    dropAlign: { top: 'bottom', left: 'left' },
    messages: { multiple: 'multiple' },
  }

  state = { open: false }

  onOpen = () => {
    this.setState({ open: true });
  }

  onClose = () => {
    const { onClose } = this.props;
    this.setState({ open: false });
    if (onClose) {
      onClose();
    }
  }

  render() {
    const {
      a11yTitle,
      children,
      disabled,
      dropAlign,
      dropTarget,
      messages,
      onChange,
      onClose,
      placeholder,
      plain,
      size,
      theme,
      value,
      label,
      ...rest
    } = this.props;
    const { open } = this.state;

    const onSelectChange = (event, ...args) => {
      this.onClose();
      if (onChange) {
        onChange(event, ...args);
      }
    };

    const SelectIcon = theme.select.icons.down;
    let selectValue;
    let textValue;
    if (!React.isValidElement(value)) {
      if (typeof label === 'function') {
        selectValue = label({ placeholder, value, onChange });
      } else if (Array.isArray(value)) {
        if (value.length > 1) {
          textValue = messages.multiple;
        } else if (value.length === 1) {
          if (React.isValidElement(value[0])) {
            selectValue = value[0];
          } else {
            textValue = value[0];
          }
        } else {
          textValue = '';
        }
      } else {
        textValue = value;
      }
    } else {
      selectValue = value;
    }

    return (
      <Keyboard onDown={this.onOpen} onUp={this.onOpen}>
        <DropButton
          disabled={disabled}
          dropAlign={dropAlign}
          dropTarget={dropTarget}
          {...rest}
          open={open}
          onOpen={this.onOpen}
          onClose={this.onClose}
          a11yTitle={`${a11yTitle}${typeof value === 'string' ? `, ${value}` : ''}`}
          dropContent={<SelectContainer {...this.props} onChange={onSelectChange} />}
        >
          <Box
            aria-hidden={true}
            align='center'
            border={!plain ? 'all' : undefined}
            direction='row'
            justify='between'
          >
            {selectValue || (
              <TextInput
                style={{ cursor: 'pointer' }}
                ref={(ref) => { this.inputRef = ref; }}
                {...rest}
                tabIndex='-1'
                type='text'
                placeholder={placeholder}
                plain={true}
                size={size}
                readOnly={true}
                value={textValue}
              />
            )}
            <Box
              margin={{ horizontal: 'small' }}
              flex={false}
              style={{ minWidth: 'auto' }}
            >
              <SelectIcon color='brand' size={size} />
            </Box>
          </Box>
        </DropButton>
      </Keyboard>
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  doc(Select);
}

export default compose(
  withTheme,
)(Select);
