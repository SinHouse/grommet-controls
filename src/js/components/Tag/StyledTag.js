import styled from 'styled-components';
import { Box } from 'grommet';
import { backgroundStyle } from '../../utils/styles';

const disabledStyle = `
  opacity: 0.4;
  cursor: default;
`;

export const StyledIcon = styled.span`
  display: inline-block;
  > * {
    vertical-align: bottom;
  }
  ${props => !props.diabled && 'cursor: pointer;'}
`;

export const StyledTagContainer = styled(Box)`
  ${props => backgroundStyle(props.background || 'brand', props.theme)}
  ${props => props.onClick && 'cursor: pointer;'}
  user-select: none;
  ${props => props.disabled && disabledStyle}
`;


export default StyledTagContainer.extend`
  ${props => props.theme.tag && props.theme.tag.extend}
`;
