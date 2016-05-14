import {inject} from 'aurelia-framework';
import {TagsService} from '../services/tags';

@inject(TagsService)
export class Tags {
   
   constructor(tags) {
      this.tags = tags;
   }

   deleteTag(tag) {
      this.tags.del(tag);
      this.list = this.tags.lookup();
   }
   
   activate() {
      this.list = this.tags.lookup();
   }
}