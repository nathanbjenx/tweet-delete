import { FileReaderDirective } from './file-reader.directive';
import { ElementRef } from '@angular/core';
import { BindingScope } from '@angular/compiler/src/render3/view/template';

describe('FileReaderDirective', () => {
  it('should create an instance', () => {
    const directive = new FileReaderDirective();
    expect(directive).toBeTruthy();
  });
});
