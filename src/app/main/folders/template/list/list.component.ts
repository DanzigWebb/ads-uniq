import { Component, OnInit } from '@angular/core';
import { TemplateComponent } from '@app/main/folders/template/template.component';

@Component({
  selector:    'folders-list',
  templateUrl: './list.component.html',
  styleUrls:   ['./list.component.scss']
})
export class ListComponent extends TemplateComponent implements OnInit {
  checkFiles() {
    const checkedFiles = this.folder.dirFiles.getValue().filter(file => file.checked);
    this.check.checkedItems.next(checkedFiles);
  }
}
