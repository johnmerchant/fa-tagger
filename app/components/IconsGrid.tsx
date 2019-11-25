/** @jsx jsx */
import { jsx } from '@emotion/core';

import { Grid, GridCol } from '../styles';
import { Icon } from '../@types/icons';
import { Icon as IconComponent } from './Icon';
import { IconTags } from '../@types/tags';

interface IconsGridProps {
    icons: Icon[];
    iconTags: IconTags;
    onDeleteTag(id: string, tag: string): void;
}

export const IconsGrid = ({ icons, iconTags, onDeleteTag }: IconsGridProps) => <Grid>
    {icons.map(icon => 
        <GridCol key={'ico-' + icon.id}>
            <IconComponent
                icon={icon}
                iconTags={iconTags[icon.id] || []} 
                onDeleteTag={(tag) => onDeleteTag(icon.id, tag) } />
        </GridCol>)
    }
</Grid>;