import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from '../../../core/helpers/routes';
import { bloggrid, ourteams } from '../../../core/models/models';
import { DataService } from '../../../core/service/data/data.service';
interface companyCarousel{
  image:string;
}
interface TestimonialCarousel{
    id:number;
    img:string;
    name:string;
    badge:string;
    head:string;
    para:string;
}
interface latestnews{
  title: string;
  img1: string;
  img2: string;
  name: string;
  year: string;
  para: string;
  feedback: string;
  command: string;
  img3: string;
  time: string;
  fav: boolean;
  content: string;
  favourite?: boolean;
  
} 
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  public routes=routes
  public ourteams: ourteams[] = [];
  constructor (private dataservice:DataService){
    this.ourteams = this.dataservice.ourteams
  }

  public ourTeamsOwlOptions: OwlOptions = {
    items: 4,
    loop:true,
    margin:24,
    nav:true,
    dots: false,
    autoplay:false,
    smartSpeed: 2000,
    navText : ["<i class='feather icon-chevron-left'></i>","<i class='feather icon-chevron-right'></i>"],
    responsive:{
      0:{
        items:1
      },
      500:{
        items:1
      },
      768:{
        items:2
      },
      1000:{
        items:4
      }
  }
  }
  public testimonialOwlOptions: OwlOptions = {
    margin: 24,
    nav: true,
    loop: true,
    dots:false,
    navText: ['<i class="feather icon-chevron-left"></i>', '<i class="feather icon-chevron-right"></i>'],
    smartSpeed: 2000,
    responsive: {
     0:{
					items:1
				},
				500:{
					items:1
				},
				768:{
					items:2
				},
				991:{
					items:2
				},
				1000:{
					items:3
				}
    },
  };
  public CompaniesOwlOptions: OwlOptions = {
    margin: 24,
  nav: false,
  loop: true,
  dots:false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 5,
    },
    1170: {
      items: 5,
    },
  },
  };
  public latestnewsOwlOptions: OwlOptions = {
    margin: 24,
    nav: true,
    loop: true,
    dots:false,
    smartSpeed: 2000,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 3,
      },
    },
  };
 
  public companyCarousel:companyCarousel[] =[
    {
    image:'assets/img/testimonial-icon-01.svg'
    },
    {
      image:'assets/img/testimonial-icon-01.svg'
    },
    {
      image:'assets/img/testimonial-icon-01.svg'
    },
    {
      image:'assets/img/testimonial-icon-01.svg'
    },
    {
      image:'assets/img/testimonial-icon-01.svg'
    },
    {
      image:'assets/img/testimonial-icon-01.svg'
    },
    {
      image:'assets/img/testimonial-icon-01.svg'
    },
]
public TestimonialCarousel:TestimonialCarousel []=[
  {
    id:1,
    img:'assets/img/profiles/avatar-01.jpg',
    name:'Ariyan Rusov',
    badge:'Badminton',
    head:'Personalized Attention',
    para:'DreamSports coaching services enhanced my badminton skills. Personalized attention from knowledgeable coaches propelled my game to new heights.'
  },
  {
    id:2,
    img:'assets/img/profiles/avatar-04.jpg',
    name:'Darren Valdez',
    badge:'Badminton',
    head:'Quality Matters ',
    para:'DreamSports advanced badminton equipment has greatly improved my performance on the court. Their quality range of rackets and shoes made a significant impact'
  },
  {
    id:3,
    img:'assets/img/profiles/avatar-03.jpg',
    name:'Elinor Dunn',
    badge:'Badminton',
    head:'Excellent Professionalism  ',
    para:'DreamSports unmatched professionalism and service excellence left a positive experience. Highly recommended for court rentals and equipment purchases',
  },
  {
    id:4,
    img:'assets/img/profiles/avatar-04.jpg',
    name:'Darren Valdez',
    badge:'Badminton',
    head:'Quality Matters',
    para:'DreamSports advanced badminton equipment has greatly improved my performance on the court. Their quality range of rackets and shoes made a significant impact.',
  },
]
    
public latestnews: latestnews []= [
  {
    title: 'Badminton',
    img1: 'assets/img/venues/venues-07.jpg',
    img2: 'assets/img/profiles/avatar-01.jpg',
    name: 'OrlandoWaters',
    year: '15 May 2023',
    content: 'Badminton Gear Guide: Must-Have Equipment for Every Player',
    para: 'Lorem Ipsum is simply dummy text of the printing',
    feedback: '45',
    command: '45',
    img3: 'assets/img/icons/clock.svg',
    time: '10 Min To Read',
    fav:false
  },
  {
    title: 'Sports Activites',
    img1: 'assets/img/venues/venues-08.jpg',
    img2: 'assets/img/profiles/avatar-06.jpg',
    name: 'ClaireNichols',
    year: '16 Jun 2023',
    content: 'Badminton Techniques: Mastering the Smash, Drop Shot, and Clear',
    para: 'Lorem Ipsum is simply dummy text of the printing',
    feedback: '35',
    command: '35',
    img3: 'assets/img/icons/clock.svg',
    time: '5 Min To Read',
    fav:false
  },
  {
    title: 'Rules of Game',
    img1: 'assets/img/venues/venues-09.jpg',
    img2: 'assets/img/profiles/avatar-06.jpg',
    name: 'JoannaLe',
    year: '17 May 2023',
    content: 'The Evolution of Badminton:From Backyard Fun to Olympic Sport',
    para: 'Lorem Ipsum is simply dummy text of the printing',
    feedback: '25',
    command: '25',
    img3: 'assets/img/icons/clock.svg',
    time: '4 Min To Read',
    fav:false
  },
 
  {
    title: 'Sports Activites',
    img1: 'assets/img/venues/venues-08.jpg',
    img2: 'assets/img/profiles/avatar-01.jpg',
    name: 'Mart Sublin',
    year: '12 May 2023',
    content: 'Sports Make Us A Lot Stronger And Healthier Than We Think',
    para: 'Lorem Ipsum is simply dummy text of the printing',
    feedback: '35',
    command: '35',
    img3: 'assets/img/icons/clock.svg',
    time: '12 Min To Read',
    fav:false
  },
];
fav(slide:latestnews){
  slide.favourite = !slide.favourite
}
}
