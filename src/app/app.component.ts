import { Component, OnInit } from '@angular/core';
import { IonicStorageManagerService } from '../managers/ionic-storage.manager.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private ionicStorageManagerService: IonicStorageManagerService) {}

  ngOnInit(): void {
    this.testIonictorage();

  }

  async testIonictorage(): Promise<boolean> {
    const result = true;

    this.ionicStorageManagerService.set('accessToken', 'AccessTokenExample');
    const accessToken = await this.ionicStorageManagerService.get('accessToken');
    console.log('testIonictorage - accessToken', accessToken);

    return result;
  }
}
