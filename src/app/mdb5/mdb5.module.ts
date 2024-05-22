import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MdbCollapseModule
  ],
  exports:[
    MdbCollapseModule,
  ]
})
export class Mdb5Module { }
