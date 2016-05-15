import {inject} from 'aurelia-framework';
import {computedFrom} from 'aurelia-binding';
import {IconsService} from '../services/icons';
import {TagsService} from '../services/tags';

@inject(IconsService, TagsService)
export class Icons {

   search = '';
   list = [];
   colsPerCategory = 4;
   filters = ['All', 'Tagged', 'Untagged'];
   filter = 'All';

   constructor(icons, tags) {
      this.icons = icons;
      this.tags = tags;
   }

   selectFilter(filter) {
      this.filter = filter;
   }
   
   @computedFrom('visibleIcons', 'colsPerCategory')
   get visibleCategories() {
      let categories = this.getCategories(this.visibleIcons);
      this.splitCategories(categories, this.colsPerCategory);
      return categories;
   }

   @computedFrom('list', 'search', 'filter')
   get visibleIcons() {
      let list = this.list;
      
      if (this.search) {
         let regex = new RegExp(this.search, 'gi');
         list = list.filter(icon => regex.test(icon.name)
            || (icon.filter && icon.filter.some(filter => regex.test(filter)))
            || this.tags.tagsFor(icon.id).some(tag => regex.test(tag)));
      }

      if (this.filter && this.filter !== 'All') {
         list = list.filter(this.filterCallback);
      }
      
      return list;
   }

   @computedFrom('colsPerCategory')   
   get colSize() {
      return Math.ceil(12 / this.colsPerCategory);
   }

   get filterCallback() {
      switch (this.filter) {
         case 'Tagged':
            return icon => this.tags.tagsFor(icon.id).length > 0;
         case 'Untagged':
            return icon => this.tags.tagsFor(icon.id).length === 0;
      }
   }

   splitCategories(categories, colsPerCategory) {
      categories.forEach((icons, category) => {
         let remainder = icons.length % colsPerCategory;
         let remainderUsed = remainder;
         let colLength = Math.floor(icons.length / colsPerCategory);
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
   }

   getCategories(icons) {
      let categories = new Map();
      icons.forEach(icon => {
         icon.categories.forEach(category => {
            if (categories.has(category)) {
               categories.get(category).push(icon);
            } else {
               categories.set(category, [icon]);
            }
         })
      });
      return categories;
   }

   activate() {
      return this.icons.load().then(list => {
         list.forEach(icon => icon.tags = this.tags.tagsFor(icon.id));
         this.list = list;
      });
   }
}