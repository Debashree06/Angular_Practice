import { Routes } from '@angular/router';
import { SignIn } from './sign-in/sign-in';
import { Blog } from './blog/blog';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { User } from './user/user';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'signIn', component: SignIn },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'blog', component: Blog },
  { path: 'user/:id/:name', component: User },
  { path: '**', component: PageNotFound },
];
