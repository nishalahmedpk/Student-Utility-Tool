
import {Routes} from '@angular/router';
import { Notes } from './notes/notes';
import { Onenote } from './onenote/onenote';

const routeConfig: Routes = [
  {
    path: '',
    component: Notes,
    title: 'Home page',
  },
  {
    path: 'note/:id',
    component: Onenote,
    // title: (route) => fetchTitleById(route.params['id']),
    title: 'Note Details',
  },
];
export default routeConfig;