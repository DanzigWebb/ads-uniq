import { Component, OnInit } from '@angular/core';
import { SidebarService } from '@app/core/services';
import { FoldersCheckService } from '@app/main/folders/template/list/folders-check/folders-check.service';
import { IFile } from '@app/core/services/node/folder/helpers/types';
import { FolderService } from '@app/core/services/node';
import { Subscription } from 'rxjs';

@Component({
  selector:    'app-folders-check',
  templateUrl: './folders-check.component.html',
  styleUrls:   ['./folders-check.component.scss']
})
export class FoldersCheckComponent implements OnInit {

  checked: IFile[] = [];
  subscription: Subscription;

  constructor(
    public sidebar: SidebarService,
    public check: FoldersCheckService,
    private folders: FolderService
  ) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    const checkUpdate$ = this.check.checkedItems.subscribe(
      files => this.checked = files
    );

    const dirChange$ = this.folders.dirFiles.subscribe(
      () => this.check.reset()
    );

    this.subscription.add(dirChange$);
    this.subscription.add(checkUpdate$);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
