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
  BottomSheet = 'bottom-sheet',
  BottomSheetBase = 'base',
  BottomSheetData = 'data',
  Button = 'button',
  ButtonToggle = 'button-toggle',
  ButtonToggleSimple = 'simple',
  ButtonToggleNgModel = 'ngmodel',
  ButtonToggleForm = 'form',
  ButtonToggleMultiple = 'multiple',
  Card = 'card',
  Dialog = 'dialog',
  DialogBase = 'base',
  DialogData = 'data',
  DialogTemplate = 'template',
  Divider = 'divider',
  GridList = 'grid-list',
  Icon = 'icon',
  IconBase = 'simple',
  IconRegistry = 'registry',
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
    title: 'Button Toggle',
    route: RouteNames.ButtonToggle,
    children: [
      {
        title: 'Basic',
        route: RouteNames.ButtonToggleSimple,
      },
      {
        title: 'Form',
        route: RouteNames.ButtonToggleForm,
      },
      {
        title: 'NgModel',
        route: RouteNames.ButtonToggleNgModel,
      },
      {
        title: 'Multiple',
        route: RouteNames.ButtonToggleMultiple,
      },
    ]
  },
  {
    title: 'Card',
    route: RouteNames.Card,
    children: []
  },
  {
    title: 'Dialog',
    route: RouteNames.Dialog,
    children: [
      {
        title: 'Base Dialog',
        route: RouteNames.DialogBase,
      }, {
        title: 'With data',
        route: RouteNames.DialogData,
      }, {
        title: 'Dialog Template',
        route: RouteNames.DialogTemplate,
      },
    ]
  },
  {
    title: 'Divider',
    route: RouteNames.Divider,
    children: []
  },
  {
    title: 'Grid List',
    route: RouteNames.GridList,
    children: []
  },
  {
    title: 'Icon',
    route: RouteNames.Icon,
    children: [
      {
        title: 'Base Icon',
        route: RouteNames.IconBase,
      }, {
        title: 'SVG Icon',
        route: RouteNames.IconRegistry,
      },
    ]
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
    path: RouteNames.ButtonToggle,
    loadChildren: () => import(`./button-toggle/button-toggle.module`).then(m => m.ButtonToggleModule)
  },
  {
    path: RouteNames.Card,
    loadChildren: () => import(`./card/card.module`).then(m => m.CardModule)
  },
  {
    path: RouteNames.Dialog,
    loadChildren: () => import(`./dialog/dialog.module`).then(m => m.DialogModule)
  },
  {
    path: RouteNames.Divider,
    loadChildren: () => import(`./divider/divider.module`).then(m => m.DividerModule)
  },
  {
    path: RouteNames.GridList,
    loadChildren: () => import(`./grid-list/grid-list.module`).then(m => m.GridListModule)
  },
  {
    path: RouteNames.Icon,
    loadChildren: () => import(`./icon/icon.module`).then(m => m.IconModule)
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
