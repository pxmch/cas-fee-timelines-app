import {Component} from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: '/about.component.html',
    styles: [
      'i { text-transform: uppercase; font-style: normal; font-weight: 300; letter-spacing: 4px }',
      'p { margin: 0 0 6px 0; font: 16px/22px }',
      'li { font: 16px/22px }'
    ]
})

export class AboutComponent {
}
