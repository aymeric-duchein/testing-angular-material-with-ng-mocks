import { Injectable } from '@angular/core';

@Injectable()
export class NavListInfoService {

  getInfo(content: string): string {
    return content + ' Info';
  }
}
