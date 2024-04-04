import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { TranslocoService } from "@jsverse/transloco";

@Component({
  selector: 'app-change-language',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './change-language.component.html',
  styleUrl: './change-language.component.css'
})
export class ChangeLanguageComponent {

  public currentLanguage = 'en';

  constructor(private TranslocoService: TranslocoService) {
  }

  public onChangedLanguage(langugage: string) {
    this.TranslocoService.setActiveLang(langugage);
  }

}
