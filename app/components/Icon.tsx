import * as React from 'react';

import {Icon as IconData} from '../@types/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {IconName} from '@fortawesome/fontawesome-common-types';


type IconProps = { iconName: string, iconData: IconData };

export const Icon = ({ iconName, iconData }: IconProps) => <div>
    <p>{iconName}</p>
    <FontAwesomeIcon icon={iconName as IconName} />
</div>;
