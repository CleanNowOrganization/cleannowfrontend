import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [FooterComponent] // Esto permite que otros módulos que importen FooterModule usen el componente Footer
})
export class FooterModule { }