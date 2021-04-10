import { NavListInfoService } from './nav-list.info.service';

describe('NavListInfoService', () => {
  let service: NavListInfoService;

  beforeEach(() => {
    service = new NavListInfoService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return content info', () => {
    expect(service.getInfo('test')).toEqual('test Info');
  });
});
