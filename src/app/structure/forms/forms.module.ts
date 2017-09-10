import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';

import { FormsAutocomplete } from './autocomplete.page';
import { FormsBasicFormElements } from './basic-form-elements.page';
import { FormsButtons } from './buttons.page';
import { FormsCheckboxesRadio } from './checkboxes-radio.page';
import { FormsDropdowns } from './dropdowns.page';
import { FormsExtras } from './extras.page';
import { FormsFileUploads } from './file-uploads.page';
import { FormsFormValidation } from './form-validation.page';
import { FormsFormWizard } from './form-wizard.page';
import { FormsInputMask } from './input-mask.page';
import { FormsSelectboxes } from './selectboxes.page';

export const routes: Routes = [
  { path: 'forms/autocomplete', component: FormsAutocomplete },
  { path: 'forms/basic-form-elements', component: FormsBasicFormElements },
  { path: 'forms/buttons', component: FormsButtons },
  { path: 'forms/checkboxes-radio', component: FormsCheckboxesRadio },
  { path: 'forms/dropdowns', component: FormsDropdowns },
  { path: 'forms/extras', component: FormsExtras },
  { path: 'forms/file-uploads', component: FormsFileUploads },
  { path: 'forms/form-validation', component: FormsFormValidation },
  { path: 'forms/form-wizard', component: FormsFormWizard },
  { path: 'forms/input-mask', component: FormsInputMask },
  { path: 'forms/selectboxes', component: FormsSelectboxes },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    FormsAutocomplete,
    FormsBasicFormElements,
    FormsButtons,
    FormsCheckboxesRadio,
    FormsDropdowns,
    FormsExtras,
    FormsFileUploads,
    FormsFormValidation,
    FormsFormWizard,
    FormsInputMask,
    FormsSelectboxes
  ]

})

export class FormsModule { }
