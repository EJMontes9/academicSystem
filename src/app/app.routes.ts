import { Routes } from '@angular/router';
import {MainComponent} from "./templates/main/main.component";
import {SecretaryComponent} from "./pages/secretary/secretary.component";
import { ViewDataGuessComponent } from './pages/view-data-guess/view-data-guess.component';



export const routes: Routes = [
    { path: '', component: MainComponent,  children: [
            {path: '', redirectTo: 'secretary', pathMatch: 'full'},
            {path: 'secretary', component: SecretaryComponent},
            {path: 'view-data-guess', component: ViewDataGuessComponent},
        ]
    }
];
