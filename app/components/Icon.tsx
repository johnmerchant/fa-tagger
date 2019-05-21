import * as React from 'react';

import { Icon as IconData } from '../@types/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-common-types';
import { Tags } from './tags';
import { A, IconPanelHeading, IconPanel, IconPanelIcon, IconPanelTags, colors } from '../styles';
import {NavLink} from 'react-router-dom';

type IconProps = { 
    iconName: string, 
    iconData: IconData,
    iconTags: string[],
    onDeleteTag: (tag: string) => void;
};

export const Icon = ({ iconName, iconData, iconTags, onDeleteTag }: IconProps) => 
    <IconPanel>
        <IconPanelHeading>
            <A to={'/icons/' + iconName}>{iconData.label}
            </A>
        </IconPanelHeading>
        <IconPanelIcon>
            <A to={'/icons/' + iconName}>
                <FontAwesomeIcon icon={iconName as IconName} size="4x" color={colors.WHITE} />
            </A>
        </IconPanelIcon>
        <IconPanelTags>
            <Tags onDelete={onDeleteTag} tags={iconTags}></Tags>
        </IconPanelTags>
    </IconPanel>;
