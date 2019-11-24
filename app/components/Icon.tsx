import * as React from 'react';

import { Icon as IconData } from '../@types/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tags } from './Tags';
import { A, IconPanelHeading, IconPanel, IconPanelIcon, IconPanelTags, colors } from '../styles';


type IconProps = { 
    icon: IconData,
    iconTags: string[],
    onDeleteTag: (tag: string) => void;
};

export const Icon = ({ icon, iconTags, onDeleteTag }: IconProps) => 
    <IconPanel>
        <IconPanelHeading>
            <A to={'/icons/' + icon.id}>{icon.label}</A>
        </IconPanelHeading>
        <IconPanelIcon>
            <A to={'/icons/' + icon.id}>
                <FontAwesomeIcon icon={icon.id} size="4x" color={colors.WHITE} />
            </A>
        </IconPanelIcon>
        <IconPanelTags>
            <Tags onDelete={onDeleteTag} tags={iconTags}></Tags>
        </IconPanelTags>
    </IconPanel>;
