import { Directive, Output, EventEmitter, HostListener } from "@angular/core";


@Directive({
  selector: '[fileReader]',  
})
export class FileReaderDirective {
  constructor() { }

  @Output() fileRead = new EventEmitter<string>();

  @HostListener('change', ['$event']) onChange(event){
    this.readFile(event.srcElement.files);
  }

  private readFile(files: FileList) : void {
    if (files.length) {
      var r = new FileReader();
      let self = this;
      r.onload = function() {
        self.fileRead.emit(r.result);
      };
      r.readAsText(files[0]);

    }
  }
}
