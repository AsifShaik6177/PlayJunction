export class routes {
  private static base = '';
  static navigate: string;

  public static get baseUrl(): string {
    return this.base;
  }
  // auth routes
  public static get auth(): string {
    return this.baseUrl + '/auth';
  }
  public static get login(): string {
    return this.baseUrl + '/auth/login';
  }
  public static get register(): string {
    return this.baseUrl + '/auth/register';
  }
  public static get forgotPassword(): string {
    return this.baseUrl + '/auth/forgot-password';
  }
  public static get changepassword(): string {
    return this.baseUrl + '/auth/change-password';
  }

  public static get user(): string {
    return this.baseUrl + '/user';
  }
  // auth routes *ends*

  // error pages routes

  public static get errorPages(): string {
    return this.baseUrl + '/errorpages';
  }
  public static get error404(): string {
    return this.baseUrl + 'error/error404';
  }

  // error pages routes *ends*

  // core pages routes

  public static get core(): string {
    return this.baseUrl;
  }
  public static get home(): string {
    return this.core + '/home';
  }

  // core pages routes *ends*

  public static get comingSoon(): string {
    return this.baseUrl + '/pages/coming-soon';
  }

  // core pages child routes

  //blog pages route //

  public static get blog(): string {
    return this.baseUrl + '/blog';
  }
  public static get blogcarousel(): string {
    return this.blog + '/blog-carousel';
  }
  public static get blogdetails(): string {
    return this.blog + '/blog-details';
  }
  public static get blogdetailssidebarleft(): string {
    return this.blog + '/blogdetailssidebar/blog-details-sidebar-left';
  }
  public static get blogdetailssidebarright(): string {
    return this.blog + '/blogdetailssidebar/blog-details-sidebar-right';
  }
  public static get bloggrid(): string {
    return this.blog + '/blog-grid';
  }
  public static get bloggridsidebarleft(): string {
    return this.blog + '/bloggridsidebar/blog-grid-sidebar-left';
  }
  public static get bloggridsidebarright(): string {
    return this.blog + '/bloggridsidebar/blog-grid-sidebar-right';
  }
  public static get bloglist(): string {
    return this.blog + '/blog-list';
  }
  public static get bloglistsidebarleft(): string {
    return this.blog + '/bloglistsidebar/blog-list-sidebar-left';
  }
  public static get bloglistsidebarright(): string {
    return this.blog + '/bloglistsidebar/blog-list-sidebar-right';
  }
  public static get listings(): string {
    return this.baseUrl + '/listings';
  }
  public static get listingsgrid(): string {
    return this.listings + '/listing-grid';
  }
  public static get listinggridsidebar(): string {
    return this.listings + '/listing-grid-sidebar';
  }
  public static get listinglist(): string {
    return this.listings + '/listing-list';
  }
  public static get listinglistsidebar(): string {
    return this.listings + '/listing-list-sidebar';
  }
  public static get listingmap(): string {
    return this.listings + '/listing-map';
  }
  public static get listingmapsidebar(): string {
    return this.listings + '/listing-map-sidebar';
  }

  //pages routes//
  public static get pages(): string {
    return this.baseUrl + '/pages';
  }
  public static get aboutus(): string {
    return this.baseUrl + '/pages/about-us';
  }
  public static get ourteams(): string {
    return this.baseUrl + '/pages/our-teams';
  }
  public static get services(): string {
    return this.baseUrl + '/pages/services';
  }
  public static get servicedetail(): string {
    return this.baseUrl + '/pages/service-detail';
  }
  public static get events(): string {
    return this.baseUrl + '/pages/events';
  }
  public static get eventdetails(): string {
    return this.baseUrl + '/pages/event-details';
  }
  public static get pricing(): string {
    return this.baseUrl + '/pages/pricing';
  }
  public static get faq(): string {
    return this.baseUrl + '/pages/faq';
  }
  public static get gallery(): string {
    return this.baseUrl + '/pages/gallery';
  }
  public static get testimonials(): string {
    return this.baseUrl + '/pages/testimonial/testimonials-grid';
  }
  public static get testimonialscarousel(): string {
    return this.baseUrl + '/pages/testimonial/testimonials-carousel';
  }
  public static get maintenance(): string {
    return this.baseUrl + '/pages/maintenance';
  }
  public static get privacyPolicy(): string {
    return this.baseUrl + '/pages/privacy-policy';
  }
  public static get termsCondition(): string {
    return this.baseUrl + '/pages/terms';
  }

  public static get contactUs(): string {
    return this.baseUrl + '/pages/contact-us';
  }
  //pages routes *end*//


  //User routes *start*//
  public static get userDashboard(): string {
    return this.user + '/user-dashboard';
  }
  public static get userBookings(): string {
    return this.user + '/user-bookings/bookings';
  }
  public static get userCompleted(): string {
    return this.user + '/user-bookings/completed';
  }
  public static get userOngoing(): string {
    return this.user + '/user-bookings/ongoing';
  }
  public static get userCancelled(): string {
    return this.user + '/user-bookings/cancelled';
  }
  public static get userChat(): string {
    return this.user + '/chat';
  }
  public static get userInvoice(): string {
    return this.user + '/invoice';
  }
  public static get userCoaches(): string {
    return this.user + '/coaches';
  }
  public static get userWallet(): string {
    return this.user + '/wallet';
  }
  public static get userProfile(): string {
    return this.user + '/user-profile';
  }
  public static get userChangepassword(): string {
    return this.user + '/change-password';
  }
  public static get userOthersettings(): string {
    return this.user + '/user-profile-setting';
  }

  // coaches routes start
  public static get coach(): string {
    return this.baseUrl + '/coaches/';
  }
  public static get coach_profile_appointment_details(): string {
    return this.coach + 'pages/profile-settings/appointment-details';
  }
  public static get coach_profile_edit(): string {
    return this.coach + 'pages/profile-settings/coach-profile';
  }
  public static get coach_profile(): string {
    return this.coach + 'pages/profile-settings/myprofile';
  }
  public static get coach_other_setting(): string {
    return this.coach + 'pages/profile-settings/othersetting';
  }
  public static get coach_setting_availability(): string {
    return this.coach + 'pages/profile-settings/availability';
  }
  public static get coach_setting_lesson(): string {
    return this.coach + 'pages/profile-settings/setting-lesson';
  }
  public static get coach_setting_password(): string {
    return this.coach + 'pages/profile-settings/setting-password';
  }
  public static get coachBooking(): string {
    return this.coach + 'pages/booking/coach-booking';
  }
  public static get coachCompleted(): string {
    return this.coach + 'pages/booking/completed';
  }
  public static get coachCanceled(): string {
    return this.coach + 'pages/booking/canceled';
  }
  public static get coachChat(): string {
    return this.coach + 'pages/chat';
  }
  public static get coachDashboard(): string {
    return this.coach + 'pages/dashboard';
  }
  public static get coachDetail(): string {
    return this.coach + 'coach-detail';
  }
  public static get coachDetails(): string {
    return this.coach + 'booking-steps/coach-details';
  }
  public static get coachEarning(): string {
    return this.coach + 'pages/earnings';
  }
  public static get coachOrderConfirm(): string {
    return this.coach + 'booking-steps/coach-order-confirm';
  }
  public static get coachPayment(): string {
    return this.coach + 'booking-steps/coach-payment';
  }
  public static get coachPersonalInfo(): string {
    return this.coach + 'booking-steps/coach-personalinfo';
  }
  public static get coachProfile(): string {
    return this.coach + 'pages/profile-settings/coach-profile';
  }
  public static get coachRequest(): string {
    return this.coach + 'pages/requests';
  }
  public static get coachTimeDate(): string {
    return this.coach + 'booking-steps/coach-timedate';
  }
  public static get coachWallet(): string {
    return this.coach + 'pages/wallet';
  }
  public static get coachesGrid(): string {
    return this.coach + 'pages/coaches-grid';
  }
  public static get coachesGridSidebar(): string {
    return this.coach + 'pages/coaches-grid-sidebar';
  }
  public static get coachesList(): string {
    return this.coach + 'pages/coaches-list-without-sidebar';
  }
  public static get coachesListSidebar(): string {
    return this.coach + 'pages/coaches-list-sidebar';
  }
  public static get coachesMap(): string {
    return this.coach + 'pages/coaches-map';
  }
  public static get coachesInvoice(): string {
    return this.coach + 'pages/invoice';
  }
  public static get coachesMapSidebar(): string {
    return this.coach + 'pages/coaches-map-sidebar';
  }
  public static get earningCoaching(): string {
    return this.coach + 'earning-coaching';
  }
  public static get bookCourt(): string {
    return this.coach + 'court-booking/book-court';
  }
  public static get bookCourtConfirm(): string {
    return this.coach + 'court-booking/book-confirm';
  }
  public static get bookCourtPersonalInfo(): string {
    return this.coach + 'court-booking/personal-info';
  }
  public static get bookCourtCheckout(): string {
    return this.coach + 'court-booking/checkout';
  }
  public static get coachCourts(): string {
    return this.coach + 'pages/courts/all-courts';
  }
  public static get coachactivecourts(): string {
    return this.coach + 'pages/courts/court-active';
  }
  public static get coachinactivecourts(): string {
    return this.coach + 'pages/courts/court-inactive';
  }
  public static get lessonType(): string {
    return this.coach + 'lesson/lesson-type';
  }
  public static get lessonPayment(): string {
    return this.coach + 'lesson/lesson-payment';
  }
  public static get lessonOrderConfirm(): string {
    return this.coach + 'lesson/lesson-order-confirm';
  }
  public static get lessonTypes(): string {
    return this.coach + 'lesson/lesson-type';
  }
  public static get lessonTimedate(): string {
    return this.coach + 'lesson/lesson-timedate';
  }
  public static get lessonPersonalInfo(): string {
    return this.coach + 'lesson/lesson-personalinfo';
  }
  public static get venueDetails(): string {
    return this.coach + 'venue-details';
  }
  public static get addCourt(): string {
    return this.coach + 'add-court';
  }
  public static get cachCheckout(): string {
    return this.coach + 'cage/cage-checkout';
  }
  public static get cachOrder(): string {
    return this.coach + 'cage/cage-order-confirm';
  }
  public static get cachPersonal(): string {
    return this.coach + 'cage/cage-personal-info';
  }
  public static get cachDetails(): string {
    return this.coach + 'cage/cage-details';
  }
  
  // coaches routes end
}
