import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '@app/main/header/header.service';
import { FoldersTplService } from '@app/main/folders/folders-tpl.service';
import { IFile } from '@app/core/services/node/folder/helpers/types';
import { FolderService } from '@app/core/services/node';
import { FoldersCheckService } from '@app/main/folders/template/list/folders-check/folders-check.service';
import { Subscription } from 'rxjs';

@Component({
  template:  '',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor(
    public folder: FolderService,
    public search: FoldersTplService,
    public header: HeaderService,
    public check: FoldersCheckService
  ) {
    this.subscription = new Subscription()
  }

  ngOnInit(): void {
  }

  scanFile(file: IFile) {
    const {absolutePath, type} = file;
    switch (type) {
      case 'folder':
        this.folder.scan(absolutePath);
        return;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
