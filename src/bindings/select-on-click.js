import {inject, customAttribute} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

@customAttribute('select-on-click')
@inject(Element)
export class SelectOnClick {
   
   constructor(element) {
      this.element = element;
   }
         
   bind() {
      this.element.addEventListener('click', event => {
         if (PLATFORM.global.document) {
            // Internet Explorer
            if (PLATFORM.global.document.body && PLATFORM.global.document.body.createTextRange) {
               let range = PLATFORM.global.document.body.createTextRange();
               range.moveToElementText(this.element);
               range.select();
            } else if (PLATFORM.global.getSelection) {
               let selection = PLATFORM.global.getSelection();        
               let range = PLATFORM.global.document.createRange();
               range.selectNodeContents(this.element);
               selection.removeAllRanges();
               selection.addRange(range);
            }
         }
      });
   }
}