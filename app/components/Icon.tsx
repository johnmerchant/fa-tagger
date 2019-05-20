import * as React from 'react';

import { Icon as IconData } from '../@types/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-common-types';
import { IconPanelHeading, IconPanel, IconPanelIcon as IconPanelIcon, colors } from '../styles';

type IconProps = { iconName: string, iconData: IconData };

export const Icon = ({ iconName, iconData }: IconProps) => <IconPanel>
    <IconPanelHeading>{iconData.label}</IconPanelHeading>
    <IconPanelIcon>
        <FontAwesomeIcon icon={iconName as IconName} size="4x" color={colors.WHITE} />
    </IconPanelIcon>
</IconPanel>;
