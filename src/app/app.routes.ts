import { Routes } from '@angular/router';
import { SignIn } from './sign-in/sign-in';
import { Blog } from './blog/blog';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Home } from './home/home';

export const routes: Routes = [
  { path: 'signIn', component: SignIn },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'blog', component: Blog },
  { path: '', component: Home },
];
