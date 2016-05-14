import {inject} from 'aurelia-framework';
import {computedFrom} from 'aurelia-binding';

import {IconsService} from '../services/icons';
import {TagsService} from '../services/tags';

@inject(IconsService, TagsService)
export class Icons {

   search = '';
   list = [];
   colsPerCategory = 4;
   
   constructor(icons, tags) {
      this.icons = icons;
      this.tags = tags;
      this.colSize = Math.ceil(12 / this.colsPerCategory);
   }
   
   @computedFrom('visibleIcons')   
   get visibleCategories() {
      
      let categories = new Map();

      // map icons to cagegories      
      this.visibleIcons.forEach(icon => {
         icon.categories.forEach(category => {
            if (categories.has(category)) {
               categories.get(category).push(icon);
            } else {
               categories.set(category, [icon]);
            }
         })
      });

      // split category icons into columns of equal length
      categories.forEach((icons, category) => {
         let remainder = icons.length % this.colsPerCategory;
         let remainderUsed = remainder;
         let colLength = Math.floor(icons.length / this.colsPerCategory);
         let columns = [];

         for (let i = 0; i < icons.length; i += colLength) {
            let end = colLength + i;
            let add = 0;

            if (remainder !== 0 && remainderUsed) {
               ++end;
               --remainderUsed;
               add = 1;
            }

            columns.push(icons.slice(i, end)); 
            i += add;
         }
         
         categories.set(category, columns);
      });
      
      return categories;
   }

   @computedFrom('list', 'search')   
   get visibleIcons() {
      let list = this.list;
      if (this.search) {
         let regex = new RegExp(this.search, 'gi');
         list = list.filter(icon =>
            regex.test(icon.name)
            || (icon.filter && icon.filter.some(filter => regex.test(filter)))
            || this.tags.tagsFor(icon.id).some(tag => regex.test(tag)));
      }
      return list;
   }
   
   activate() {
      return this.icons.load().then(list => {
         list.forEach(icon => icon.tags = this.tags.tagsFor(icon.id));
         this.list = list;
      });
   }
}