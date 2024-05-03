import { Component } from '@angular/core';
import { routes } from '../../../../core/helpers/routes';
import { OwlOptions } from 'ngx-owl-carousel-o';
interface TestimonialCarousel{
  id:number;
  img:string;
  name:string;
  badge:string;
  para:string;
}
@Component({
  selector: 'app-testimonials-carousel',
  templateUrl: './testimonials-carousel.component.html',
  styleUrls: ['./testimonials-carousel.component.scss']
})
export class TestimonialsCarouselComponent {
  public routes=routes
  public testimonialCarouselOwlOptions: OwlOptions = {
    margin: 24,
    nav: true,
    loop: true,
    dots:false,
    smartSpeed: 2000,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
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
  public TestimonialCarousel:TestimonialCarousel []=[
    {
      id:1,
      img:'assets/img/profiles/avatar-01.jpg',
      name:'Ariyan Rusov',
      badge:'Badminton',
      para:'DreamSports coaching services enhanced my badminton skills. Personalized attention from knowledgeable coaches propelled my game to new heights'
    },
    {
      id:2,
      img:'assets/img/profiles/avatar-05.jpg',
      name:'Darren Valdez',
      badge:'Badminton',
      para:'DreamSports advanced badminton equipment has greatly improved my performance on the court. Their quality range of rackets and shoes made a significant impact.'
    },
    {
      id:3,
      img:'assets/img/profiles/avatar-06.jpg',
      name:'Elinor Dunn',
      badge:'Badminton',
      para:'DreamSports unmatched professionalism and service excellence left a positive experience. Highly recommended for court rentals and equipment purchases.'
    },
    {
      id:4,
      img:'assets/img/profiles/avatar-01.jpg',
      name:'Ariyan Rusov',
      badge:'Badminton',
      para:'DreamSports unmatched professionalism and service excellence left a positive experience. Highly recommended for court rentals and equipment purchases.'
    },
    {
      id:5,
      img:'assets/img/profiles/avatar-05.jpg',
      name:'Darren Valdez',
      badge:'Badminton',
      para:'DreamSports unmatched professionalism and service excellence left a positive experience. Highly recommended for court rentals and equipment purchases.'
    },
    {
      id:6,
      img:'assets/img/profiles/avatar-06.jpg',
      name:'Elinor Dunn',
      badge:'Badminton',
      para:'DreamSports unmatched professionalism and service excellence left a positive experience. Highly recommended for court rentals and equipment purchases.'
    },
    {
      id:7,
      img:'assets/img/profiles/avatar-01.jpg',
      name:'Ariyan Rusov',
      badge:'Badminton',
      para:'DreamSports unmatched professionalism and service excellence left a positive experience. Highly recommended for court rentals and equipment purchases.'
    },
    {
      id:8,
      img:'assets/img/profiles/avatar-05.jpg',
      name:'Darren Valdez',
      badge:'Badminton',
      para:'DreamSports unmatched professionalism and service excellence left a positive experience. Highly recommended for court rentals and equipment purchases.'
    },
    {
      id:9,
      img:'assets/img/profiles/avatar-06.jpg',
      name:'Elinor Dunn',
      badge:'Badminton',
      para:'DreamSports unmatched professionalism and service excellence left a positive experience. Highly recommended for court rentals and equipment purchases.'
    },
   
  ]
}
