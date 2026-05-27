import { Component } from '@angular/core';

import { GradientCtaBannerComponent } from '../components/gradient-cta-banner';
import { GlassStatCardComponent } from '../components/glass-stat-card';
import { FeatureChipListComponent } from '../components/feature-chip-list';

@Component({
  selector: 'app-ui-components-page',

  standalone: true,

  imports: [
    GradientCtaBannerComponent,
    GlassStatCardComponent,
    FeatureChipListComponent,
  ],

  templateUrl: './ui-components-page.html',
})
export default class UiComponentsPage {

  readonly quickChips = [
    'Glass Surface',
    'Gradient CTA',
    'Responsive Grid',
    'Standalone Components',
    'Tailwind + DaisyUI',
  ];

}