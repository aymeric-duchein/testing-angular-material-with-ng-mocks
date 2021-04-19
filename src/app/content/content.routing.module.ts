import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export interface Content {
  title: string;
  route: RouteNames;
  children?: Content[];
}

export enum RouteNames {
  Home = 'home',
  Autocomplete = 'autocomplete',
  AutocompleteSimple = 'simple',
  AutocompleteAdvanced = 'advanced',
  Badge = 'badge',
  BottomSheet = 'bottomSheet',
  BottomSheetBase = 'base',
  BottomSheetData = 'data',
  Button = 'button',
  List = 'list',
  ListAction = 'action',
  ListBase = 'base',
  ListMultiSelect = 'multiSelect',
  ListNav = 'nav',
  ListSelect = 'select',
}

export const CONTENT_LIST: Content[] = [
  {
    title: 'Home',
    route: RouteNames.Home,
  },
  {
    title: 'Autocomplete',
    route: RouteNames.Autocomplete,
    children: [
      {
        title: 'Simple',
        route: RouteNames.AutocompleteSimple,
      }, {
        title: 'Advanced',
        route: RouteNames.AutocompleteAdvanced,
      },
    ]
  },
  {
    title: 'Badge',
    route: RouteNames.Badge,
    children: []
  },
  {
    title: 'Bottom Sheet',
    route: RouteNames.BottomSheet,
    children: [
      {
        title: 'Base Bottom Sheet',
        route: RouteNames.BottomSheetBase,
      }, {
        title: 'With data',
        route: RouteNames.BottomSheetData,
      },
    ]
  },
  {
    title: 'Button',
    route: RouteNames.Button,
    children: []
  },
  {
    title: 'List',
    route: RouteNames.List,
    children: [
      {
        title: 'Base List',
        route: RouteNames.ListBase,
      }, {
        title: 'Action List',
        route: RouteNames.ListAction,
      }, {
        title: 'Nav List',
        route: RouteNames.ListNav,
      }, {
        title: 'Selection List',
        route: RouteNames.ListSelect,
      }, {
        title: 'Multiple Selection List',
        route: RouteNames.ListMultiSelect,
      }
    ],
  },
];

const ROUTES = [
  {
    path: RouteNames.Home,
    loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule),
  },
  {
    path: RouteNames.Autocomplete,
    loadChildren: () => import(`./autocomplete/autocomplete.module`).then(m => m.AutocompleteModule)
  },
  {
    path: RouteNames.Badge,
    loadChildren: () => import(`./badge/badge.module`).then(m => m.BadgeModule)
  },
  {
    path: RouteNames.BottomSheet,
    loadChildren: () => import(`./bottom-sheet/bottom-sheet.module`).then(m => m.BottomSheetModule),
  },
  {
    path: RouteNames.Button,
    loadChildren: () => import(`./button/button.module`).then(m => m.ButtonModule)
  },
  {
    path: RouteNames.List,
    loadChildren: () => import(`./list/list.module`).then(m => m.ListModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
  ],
  exports: [ RouterModule ],
  providers: [],
  declarations: []
})
export class ContentRoutingModule {
}
