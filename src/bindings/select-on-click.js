import {inject, customAttribute} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

@customAttribute('select-on-click')
@inject(PLATFORM, Element)
export class SelectOnClick {
   
   constructor(platform, element) {
      this.platform = platform;
      this.element = element;
   }
         
   bind() {
      this.element.addEventListener('click', event => {
         if (this.platform.global.document.body.createTextRange) {
            let range = this.platform.body.createTextRange();
            range.moveToElementText(this.element);
            range.select();
         } else if (this.platform.global.getSelection) {
            let selection = this.platform.global.getSelection();        
            let range = this.platform.global.document.createRange();
            range.selectNodeContents(this.element);
            selection.removeAllRanges();
            selection.addRange(range);
         }
      });
   }
}