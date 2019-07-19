import { Component } from '@angular/core';
import { CheckForUpdateService } from './services/check-for-update.service';
import { LogUpdateService } from './services/log-update.service';
import { PromptUpdateService } from './services/prompt-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica';

  constructor(
    checkForUpdate:CheckForUpdateService,
    logUpdateService: LogUpdateService,
    prompt:PromptUpdateService
    ){

  }

}
