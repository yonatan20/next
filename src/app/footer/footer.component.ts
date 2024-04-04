import {Component} from '@angular/core';
import {SocialLogo} from "./social-logo.typings";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  socialLogos: SocialLogo[] = [
    {
      name: 'facebook',
      url: 'https://www.facebook.com'
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com'
    },
    {
      name: 'twitter',
      url: 'https://www.twitter.com'
    },
    {
      name: 'instagram',
      url: 'https://www.instagram.com'
    },
    {
      name: 'youtube',
      url: 'https://www.youtube.com'
    }
  ]

  goToLink(url: string){
    window.open(url);
  }
}
