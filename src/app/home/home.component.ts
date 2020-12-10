import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myList: any;
  current: number;


  constructor() {
    this.myList = [
      {
        title: 'Discover innovative ways to decorate',
        body: 'We provide unmatched quality, comfort, and style for property owners across the country. \
        Our experts combine form and function in bringing your vision to life.Create a room in your \
        own style with our collection and make your property a reflection of you and what you love.',
        img: '../../assets/images/desktop-image-hero-1.jpg'
      }
      ,
      {
        title: 'We are available all across the globe',
        body: 'With stores all over the world, its easy for you to find furniture for your home or place of business. \
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our \
        store locator. Any questions? Dont hesitate to contact us today.',
        img: '../../assets/images/desktop-image-hero-2.jpg'
      }
      ,
      {
        title: 'Manufactured with the best materials',
        body: ' Our modern furniture store provide a high level of quality. Our company has invested in advanced technology  \
        to ensure that every product is made as perfect and as consistent as possible. With three decades of  \
        experience in this industry, we understand what customers want for their home and office.',
        img: '../../assets/images/desktop-image-hero-3.jpg'
      }

    ]

  }

  ngOnInit(): void {
    this.current = 0
  }

  fetchNext() {
    if (this.current <= 1) {
      this.current++;
    } else {
      this.current = 0;
    }
    console.log(this.current);
  }

  fetchPrev() {
    if (this.current > 0) {
      this.current--;
    } else {
      this.current = 2;
    }
    console.log(this.current);
  }

}
