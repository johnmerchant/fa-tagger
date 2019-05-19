import * as React from 'react';

import { Icon as IconData } from '../@types/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-common-types';
import { P, H3, IconPanel, colors } from '../styles';

type IconProps = { iconName: string, iconData: IconData };

export const Icon = ({ iconName, iconData }: IconProps) => <IconPanel>
    <H3>{iconData.label}</H3>
    <FontAwesomeIcon icon={iconName as IconName} size="4x" color={colors.DARKER} />
</IconPanel>;
