import {PLATFORM} from 'aurelia-pal';

export class TagsService {

   constructor() {
      if (PLATFORM.global.localStorage) {
         this.storage = PLATFORM.global.localStorage;
      } else {
         this.storage = new FallbackStorage();
      }
   }

   setTag(id, tag) {
      const array = this.getArray(tag);
      if (array && array.indexOf(id) === -1) {
         array.push(id);
         this.setArray(tag, array);
      }
   }

   unsetTag(id, tag) {
      const array = this.getArray(tag);
      if (array) {
         let i = array.indexOf(id);
         if (i !== -1) {
            array.splice(i, 1);
            this.setArray(tag, array);
         }
      }
   }

   del(tag) {
      const key = 'tag-' + tag;
      this.storage.removeItem(key);
   }

   tagsFor(id) {
      return this.lookup()
         .filter(tag => tag.ids.indexOf(id) !== -1)
         .map(tag => tag.tag)
         .sort();
   }

   idsFor(tag) {
      return this.getArray(tag).sort();
   }


   lookup() {
      const regex = /^tag-(.*)$/;

      // iterate through entries starting with the tag- prefix
      return Array.apply(0, new Array(this.storage.length))
         .map((e, i) => this.storage.key(i))
         .map(key => ({ key, match: key.match(regex) }))
         .filter(key => key.match && key.match.length === 2)
         .map(key => ({
            tag: key.match[1],
            ids: JSON.parse(this.storage.getItem(key.key)) || []
         }))
         .sort((x, y) => x.tag.localeCompare(y.tag));
   }

   getArray(tag) {
      const key = 'tag-' + tag;
      const json = this.storage.getItem(key);

      if (json) {
         const array = JSON.parse(json);
         if (Array.isArray(array)) {
            return array;
         }
      }

      return [];
   }

   setArray(tag, array) {
      const key = 'tag-' + tag;
      this.storage.setItem(key, JSON.stringify(array));
   }
}

class FallbackStorage {

   storage = {};

   key(n) {
      return Object.keys(this.storage)[n];
   }

   getItem(key) {
      return this.storage[key];
   }

   setItem(key, value) {
      this.storage[key] = value;
   }

   removeItem(key) {
      delete this.storage[key];
   }

   clear() {
      this.storage = {};
   }

   get length() {
      return Object.keys(this.storage).length;
   }
}