import { Component } from '@angular/core';
import { AlertComponent } from "@coreui/angular";

@Component({
  selector: 'app-layout-coreui',
  standalone: true,
  imports: [
    AlertComponent
  ],
  templateUrl: './layout-coreui.component.html',
  styleUrl: './layout-coreui.component.css'
})
export class LayoutCoreuiComponent {

}
