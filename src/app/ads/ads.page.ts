import { Component, OnInit } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
@Component({
  selector: 'app-ads',
  templateUrl: './ads.page.html',
  styleUrls: ['./ads.page.scss'],
})
export class AdsPage implements OnInit {

  // adsConfig: AdMobFreeBannerConfig = {
  //   id: 'ca-app-pub-9872549001998140/8019223762',
  //   autoShow: true
  // };
  constructor(
    // private admobFree: AdMobFree
  ) { }

  ngOnInit() {
    // this.admobFree.interstitial.config(this.adsConfig);
    // this.admobFree.interstitial.prepare().catch(e => console.log(e));
  }

}
