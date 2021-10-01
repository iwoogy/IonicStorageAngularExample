/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class IonicStorageManagerService {
  //------------------------ accessors ------------------------
  private localStorage: Storage | null = null;

  //------------------------ end of accessors -----------------

  constructor(
    private storage: Storage,
  ) {
    this.init();
  } // ------- end of constructor -------

  //------------------------ methods ------------------------

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    this.localStorage = await this.storage.create();
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this.localStorage?.set(key, value);
  }

  public get(key: string) {
    this.localStorage?.get(key);
  }

  //------------------------ end of methods -----------------
}
