import {Component, ViewChild} from '@angular/core';
import {EmojiEvent} from '@ctrl/ngx-emoji-mart/ngx-emoji';
import {SnackbarComponent} from './snackbar/snackbar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  darkMode: undefined | boolean = !!(
    typeof matchMedia === 'function' &&
    matchMedia('(prefers-color-scheme: dark)').matches
  );
  darkestMode: undefined | boolean = undefined;
  set = 'native';
  native = true;

  @ViewChild(SnackbarComponent) snackbar: SnackbarComponent;

  setTheme(set: string) {
    this.native = set === 'native';
    this.set = set;
  }

  setDarkMode(mode: boolean | undefined) {
    if (mode === undefined) {
      this.darkestMode = mode;
      this.darkMode = !!(
        typeof matchMedia === 'function' &&
        matchMedia('(prefers-color-scheme: dark)').matches
      );
    } else {
      this.darkMode = mode;
      this.darkestMode = mode;
    }
  }

  handleClick($event: EmojiEvent) {
    // console.log($event.emoji);
    this.copyTextToClipboard($event.emoji.native);

    this.snackbar.show(`${$event.emoji.native} copied!`);
  }

  /**
   * @see https://stackoverflow.com/a/18455088
   */
  copyTextToClipboard(text: string) {
    // Create a textarea field where we can insert text to.
    const copyFrom = document.createElement('textarea');

    // Set the text content to be the text you wished to copy.
    copyFrom.textContent = text;

    // Append the textarea field into the body as a child.
    // "execCommand()" only works when there exists selected text, and the text is inside
    // document.body (meaning the text is part of a valid rendered HTML element).
    document.body.appendChild(copyFrom);

    // Select all the text!
    copyFrom.select();

    // Execute command
    document.execCommand('copy');

    // (Optional) De-select the text using blur().
    copyFrom.blur();

    // Remove the textbox field from the document.body, so no other JavaScript nor
    // other elements can get access to this.
    document.body.removeChild(copyFrom);
  }
}
