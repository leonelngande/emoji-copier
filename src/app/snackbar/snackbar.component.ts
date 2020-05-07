import {Component, ElementRef, ViewChild} from '@angular/core';

/** @see https://www.w3schools.com/howto/howto_js_snackbar.asp */

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent {

  // Get a reference to the snackbar div
  @ViewChild('snackbar') snackbar: ElementRef;

  show(message: string) {
    // Set the message as the innerText
    this.snackbar.nativeElement.innerText = message;

    // Add the "show" class to DIV
    this.snackbar.nativeElement.className = 'show';

    // After 3 seconds, remove the show class from the snackbar div
    setTimeout(() => {
        this.snackbar.nativeElement.className = this.snackbar.nativeElement.className.replace('show', '');
        this.snackbar.nativeElement.innerText = '';
      },
      1000);
  }

}
