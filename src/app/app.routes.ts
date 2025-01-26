import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: "", loadComponent: (() => import('./pages/login-page/login-page.component').then(m => m.LoginPageComponent)) },
    { path: "ofislerimiz-page", loadComponent: (() => import('./pages/ofislerimiz-page/ofislerimiz-page.component').then(m => m.OfislerimizPageComponent)) },
    { path: "ofislerimiz-page/:title", loadComponent: (() => import('./pages/ofislerimiz-detail-page/ofislerimiz-detail-page.component').then(m => m.OfislerimizDetailPageComponent)) },
    { path: "danismanlarimiz-page", loadComponent: (() => import('./pages/danismanlarimiz-page/danismanlarimiz-page.component').then(m => m.DanismanlarimizPageComponent)) },
    { path: "danismanlarimiz-page/:id", loadComponent: () => import('./pages/danisman-detail-page/danisman-detail-page.component').then(m => m.DanismanDetailPageComponent) },

];
