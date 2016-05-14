import {inject} from 'aurelia-framework';
import {TagsService} from '../services/tags';
import {IconsService} from '../services/icons';

@inject(TagsService, IconsService)
export class Detail {
   
   list = [];
   tag = null;
   
   constructor(tags, icons) {
      this.tags = tags;
      this.icons = icons;
   }

   activate(param) {
      this.tag = param.id;
      
      // find all icons for this tag
      return this.icons.load().then(icons =>
         this.list = this.tags
            .idsFor(this.tag)
            .map(id => icons.find(icon => icon.id === id))
            .filter(icon => typeof icon !== 'undefined' && icon !== null)
            .sort((x, y) => x.name.localeCompare(y.name)));
   }
}