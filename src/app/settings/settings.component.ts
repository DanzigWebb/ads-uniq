import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector:    'app-settings',
  templateUrl: './settings.component.html',
  styleUrls:   ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<SettingsComponent>
  ) {
  }

  ngOnInit(): void {
  }

  close() {
    this._bottomSheetRef.dismiss();
  }
}
