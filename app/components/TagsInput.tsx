import * as React from 'react';
import { Tags } from "./tags";
import {Panel, Input, Autocomplete, AutocompleteItem, Button} from '../styles';

interface TagsInputProps {
    tags: string[];
    availableTags: string[];
    onAdd(tag: string): void;
    onDelete(tag: string): void;
}

export const TagsInput = ({ tags, availableTags, onDelete, onAdd }: TagsInputProps) => {
    
    const [value, setValue] = React.useState('');
    const autocompleteTags = value ? availableTags.filter(z => z.startsWith(value)) : [];

    return <Panel>
        <Tags dark tags={tags} onDelete={onDelete} />
        <Input 
            placeholder={"Enter a new Tag ..."}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) =>  {
                if (value && e.keyCode === 13) {
                    onAdd(value);
                    setValue('');
                }
            }} 
        />
        <Autocomplete>
            {autocompleteTags.map(tag => 
                <AutocompleteItem key={'aci-' + tag}>
                    <Button onClick={() => { 
                        onAdd(tag);
                        setValue(''); 
                    }}>
                        {tag}
                    </Button>
                </AutocompleteItem>)}
        </Autocomplete>
    </Panel>;
}