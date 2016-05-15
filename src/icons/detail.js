import {inject} from 'aurelia-framework'
import {IconsService} from '../services/icons';
import {TagsService} from '../services/tags';

@inject(IconsService, TagsService)
export class IconDetail {

   icon = null;
   newTag = '';
   
   constructor(icons, tags) {
      this.icons = icons;
      this.tags = tags;
   }
   
   addTag() {
      if (this.icon && this.newTag) {
         this.tags.setTag(this.icon.id, this.newTag);
         this.icon.tags = this.tags.tagsFor(this.icon.id);
         this.newTag = '';
      }
   }
   
   removeTag(tag) {
      if (this.icon) {
         this.tags.unsetTag(this.icon.id, tag);
         this.icon.tags = this.tags.tagsFor(this.icon.id);
      }
   }
   
   load(id) {
      return this.icons.load().then(icons => {
         this.icon = icons.find(icon => icon.id === id);
         this.icon.tags = this.tags.tagsFor(this.icon.id);
      });
   }
   
   activate(param) {
      return this.load(param.id);
   }
}