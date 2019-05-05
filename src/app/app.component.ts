import { Component } from '@angular/core';
import { GithubComponent } from "./github/github.component";
import { GithubApiService } from "./github-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubApiService],

})
export class AppComponent {
  title = 'gitsearch';
}
