import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IFile } from '@app/core/services/node/folder/helpers/types';
import { FolderService } from '@app/core/services/node';

@Injectable({
  providedIn: 'root'
})
export class FoldersCheckService {

  checkedItems: BehaviorSubject<IFile[]> = new BehaviorSubject<IFile[]>([]);

  constructor(private folders: FolderService) {
  }

  clearAndUpdate() {
    this.reset();
    this.folders.update();
  }

  reset() {
    this.checkedItems.next([]);
  }
}
