(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about-us/about-us.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about-us/about-us.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4 pt-4\">\r\n  <h1 class=\"text-center text-info font-weight-bold\">About Us</h1>\r\n  <div class=\"row\">\r\n    <div class=\"mx-auto\">\r\n      <div class=\"col p-5\">\r\n        <div class=\"fa-10x fas fa-hand-holding-heart\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"mx-auto\">\r\n      <h2 class=\"text-center text-info font-weight-bold\">\r\n        The Volunteer Calendar is here to support our local community!\r\n      </h2>\r\n      <br />\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"mx-auto\">\r\n      <p class=\"text-center\">\r\n        The Volunteer Calendar was created to provide an easy way to empower\r\n        folks to support nonprofits in their local community. We aim to remove\r\n        barriers for volunteering to expand community involvement and better the\r\n        world. Please explore our site and find nonprofits to support or browse\r\n        the events calendar to find an opportunity to help that works around\r\n        your schedule.\r\n      </p>\r\n      <h3 class=\"text-center\">Together we can make a difference!</h3>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/animals-category/animals-category.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/animals-category/animals-category.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <button\r\n      type=\"button\"\r\n      class=\"close\"\r\n      aria-label=\"Close\"\r\n      (click)=\"d('Cross click')\"\r\n    >\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"container-fluid\">\r\n    <h2 class=\"text-center text-info font-weight-bold\">Animal Welfare</h2>\r\n    <ul>\r\n      <li>\r\n        <a\r\n          href=\"watermelon-mountain-ranch\"\r\n          alt=\"Watermelon Mountain Ranch\"\r\n          title=\"Watermelon Mountain Ranch\"\r\n          class=\"text-info font-weight-bold\"\r\n          >Watermelon Mountain Ranch</a\r\n        >\r\n      </li>\r\n      <li>\r\n        <a\r\n          href=\"#\"\r\n          alt=\"Animal Humane New Mexico\"\r\n          title=\"Animal Humane New Mexico\"\r\n          class=\"text-info font-weight-bold\"\r\n          >Animal Humane New Mexico</a\r\n        >\r\n      </li>\r\n      <li>\r\n        <a\r\n          href=\"#\"\r\n          alt=\"New Mexico Animal Friends\"\r\n          title=\"New Mexico Animal Friends\"\r\n          class=\"text-info font-weight-bold\"\r\n          >New Mexico Animal Friends</a\r\n        >\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn btn-outline-dark\"\r\n      (click)=\"c('Close click')\"\r\n    >\r\n      Close\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n\r\n<a (click)=\"open(content)\">ANIMALS</a>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<section>\r\n  <router-outlet></router-outlet>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/calendar/calendar.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/calendar/calendar.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4 pt-4\">\r\n  <h1 class=\"text-center text-info font-weight-bold\">Events Calendar</h1>\r\n  <!-- <div class=\"d-flex flex-row-reverse\">\r\n    <a class=\"btn btn-outline-info\" href=\"create-event\"> CREATE EVENT</a>\r\n  </div> -->\r\n  <br />\r\n  <div class=\"row text-center\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"btn-group\">\r\n        <div class=\"btn btn-info\" mwlCalendarPreviousView [view]=\"view\" [(viewDate)]=\"viewDate\"\r\n          (viewDateChange)=\"closeOpenMonthViewDay()\">\r\n          Previous\r\n        </div>\r\n        <div class=\"btn btn-outline-info\" mwlCalendarToday [(viewDate)]=\"viewDate\">\r\n          Today\r\n        </div>\r\n        <div class=\"btn btn-info\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\"\r\n          (viewDateChange)=\"closeOpenMonthViewDay()\">\r\n          Next\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <h3>{{ viewDate | calendarDate: view + \"ViewTitle\":\"en\" }}</h3>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"btn-group\">\r\n        <div class=\"btn btn-info\" (click)=\"setView(CalendarView.Month)\" [class.active]=\"view === CalendarView.Month\">\r\n          Month\r\n        </div>\r\n        <div class=\"btn btn-info\" (click)=\"setView(CalendarView.Week)\" [class.active]=\"view === CalendarView.Week\">\r\n          Week\r\n        </div>\r\n        <div class=\"btn btn-info\" (click)=\"setView(CalendarView.Day)\" [class.active]=\"view === CalendarView.Day\">\r\n          Day\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br />\r\n  <div [ngSwitch]=\"view\">\r\n    <mwl-calendar-month-view *ngSwitchCase=\"CalendarView.Month\" [viewDate]=\"viewDate\" [events]=\"events\"\r\n      [refresh]=\"refresh\" [activeDayIsOpen]=\"activeDayIsOpen\" (dayClicked)=\"dayClicked($event.day)\"\r\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\" (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n    </mwl-calendar-month-view>\r\n    <mwl-calendar-week-view *ngSwitchCase=\"CalendarView.Week\" [viewDate]=\"viewDate\" [events]=\"events\"\r\n      [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n      (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n    </mwl-calendar-week-view>\r\n    <mwl-calendar-day-view *ngSwitchCase=\"CalendarView.Day\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\"\r\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\" (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n    </mwl-calendar-day-view>\r\n  </div>\r\n\r\n  <br /><br /><br />\r\n\r\n  <h3>\r\n    Edit Events\r\n    <button class=\"btn btn-info pull-right\" (click)=\"addEvent()\">\r\n      Add New\r\n    </button>\r\n    <div class=\"clearfix\"></div>\r\n  </h3>\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th>Event Title</th>\r\n          <th>Color</th>\r\n          <th>Starts @</th>\r\n          <th>Ends @</th>\r\n          <th>Confirm</th>\r\n          <th>Remove</th>\r\n        </tr>\r\n      </thead>\r\n\r\n      <tbody>\r\n        <tr *ngFor=\"let event of events\">\r\n          <td>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"event.title\" (keyup)=\"refresh.next()\" />\r\n          </td>\r\n          <td>\r\n            <input type=\"color\" [(ngModel)]=\"event.color.primary\" (change)=\"refresh.next()\" />\r\n          </td>\r\n          <td>\r\n            <input class=\"form-control\" type=\"text\" mwlFlatpickr [(ngModel)]=\"event.start\"\r\n              (ngModelChange)=\"refresh.next()\" [altInput]=\"true\" [convertModelValue]=\"true\" [enableTime]=\"true\"\r\n              dateFormat=\"Y-m-dTH:i\" altFormat=\"F j, Y H:i\" placeholder=\"Not set\" />\r\n          </td>\r\n          <td>\r\n            <input class=\"form-control\" type=\"text\" mwlFlatpickr [(ngModel)]=\"event.end\"\r\n              (ngModelChange)=\"refresh.next()\" [altInput]=\"true\" [convertModelValue]=\"true\" [enableTime]=\"true\"\r\n              dateFormat=\"Y-m-dTH:i\" altFormat=\"F j, Y H:i\" placeholder=\"Not set\" />\r\n          </td>\r\n          <td>\r\n            <button class=\"btn btn-outline-info\" (click)=\"onSubmit(event)\">\r\n              Add Event\r\n            </button>\r\n          </td>\r\n          <td>\r\n            <button class=\"btn btn-outline-info\" (click)=\"deleteEvent(event)\">\r\n              Delete\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <ng-template #modalContent let-close=\"close\">\r\n    <div class=\"modal-header\">\r\n      <h5 class=\"modal-title\">Event action occurred</h5>\r\n      <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div>\r\n        Action:\r\n        <pre>{{ modalData?.action }}</pre>\r\n      </div>\r\n      <div>\r\n        Event:\r\n        <pre>{{ modalData?.event | json }}</pre>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\r\n        OK\r\n      </button>\r\n    </div>\r\n  </ng-template>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/categories/categories.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/categories/categories.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4 pt-4\">\r\n  <h1 class=\"text-center text-info font-weight-bold\">Categories</h1>\r\n  <br />\r\n  <br />\r\n  <div class=\"row text-center justify-content-around\">\r\n    <div class=\"col-lg-3 col-md-4 col-sm-6 col-8 p-1\">\r\n      <div class=\"fa-7x fas fa-dog\" id=\"category-icons\">\r\n        <div class=\"w-100\">\r\n          <div class=\"btn btn-info m-2\" id=\"category-button\">\r\n            <app-animals-category></app-animals-category>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-3 col-md-4 col-sm-6 col-8 p-1\">\r\n      <div class=\"fa-7x fas fa-tree\" id=\"category-icons\">\r\n        <div class=\"w-100\">\r\n          <div class=\"btn btn-info m-2\" id=\"category-button\">\r\n            ENVIRONMENT\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-3 col-md-4 col-sm-6 col-8 p-1\">\r\n      <div class=\"fa-7x fas fa-child\" id=\"category-icons\">\r\n        <div class=\"w-100\">\r\n          <div class=\"btn btn-info m-2\" id=\"category-button\">\r\n            CHILDREN\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-3 col-md-4 col-sm-6 col-8 p-1\">\r\n      <div class=\"fa-7x fas fa-bicycle\" id=\"category-icons\">\r\n        <div class=\"w-100\">\r\n          <div class=\"btn btn-info m-2\" id=\"category-button\">\r\n            TRANSPORTATION\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-3 col-md-4 col-6 p-1\">\r\n      <div class=\"fa-7x fas fa-graduation-cap\" id=\"category-icons\">\r\n        <div class=\"w-100\">\r\n          <div class=\"btn btn-info m-2\" id=\"category-button\">\r\n            EDUCATION\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-3 col-md-4 col-6 p-1\">\r\n      <div class=\"fa-7x fas fa-hospital-alt\" id=\"category-icons\">\r\n        <div class=\"w-100\">\r\n          <div class=\"btn btn-info m-2\" id=\"category-button\">\r\n            HEALTHCARE\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-3 col-md-4 col-6 p-1\">\r\n      <div class=\"fa-7x fas fa-equals\" id=\"category-icons\">\r\n        <div class=\"w-100\">\r\n          <div class=\"btn btn-info m-2\" id=\"category-button\">\r\n            EQUALITY\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-3 col-md-4 col-6 p-1\">\r\n      <div class=\"fa-7x fas fa-home\" id=\"category-icons\">\r\n        <div class=\"w-100\">\r\n          <div class=\"btn btn-info m-2\" id=\"category-button\">HOUSING</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-3 col-md-4 col-6 p-1\">\r\n      <div class=\"fa-7x fas fa-laptop-code\" id=\"category-icons\">\r\n        <div class=\"w-100\">\r\n          <div class=\"btn btn-info m-2\" id=\"category-button\">\r\n            TECHNOLOGY\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/children-category/children-category.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/children-category/children-category.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>children-category works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/create-event/create-event.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/create-event/create-event.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Create an Event</h1>\r\n\r\n<form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value)\">\r\n\r\n  <div>\r\n    <label for=\"eventName\">Event Name</label>\r\n    <input #event required minlength=\"3\" maxlength=\"140\" ngModel name=\"title\" #title=\"ngModel\" id=\"title\" type=\"text\"\r\n      class=\"form-control\" />\r\n    <div class=\"alert alert-danger\" *ngIf=\"title.touched && !title.valid\">\r\n      <div *ngIf=\"title.errors.required\">Event name is required.</div>\r\n      <div *ngIf=\"title.errors.minlength\">\r\n        Event name should be minimum\r\n        {{ title.errors.minlength.requiredLength }} characters.\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div>\r\n    <label for=\"eventTime\">\r\n      Event Time\r\n      <input ngModel name=\"time\" #event required #time=\"ngModel\" id=\"eventTime\" class=\"form-control\" [owlDateTime]=\"dt1\"\r\n        [owlDateTimeTrigger]=\"dt1\" placeholder=\" click here to enter time\" />\r\n      <owl-date-time #dt1></owl-date-time>\r\n    </label>\r\n    <div class=\"alert alert-danger\" *ngIf=\"time.touched && !time.valid\">\r\n      <div *ngIf=\"time.errors.required\">Event time is required.</div>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <label for=\"eventDetails\">Event Details</label>\r\n    <textarea ngModel required minlength=\"10\" #details=\"ngModel\" name=\"details\" id=\"details\" cols=\"30\" rows=\"10\"\r\n      class=\"form-control\"></textarea>\r\n    <div class=\"alert alert-danger\" *ngIf=\"details.touched && !details.valid\">\r\n      <div *ngIf=\"details.errors.required\">Event details are required.</div>\r\n      <div *ngIf=\"details.errors.minlength\">\r\n        Event details should be minimum\r\n        {{ details.errors.minlength.requiredLength }} characters.\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"checkbox\">\r\n    <label>\r\n      <input type=\"checkbox\" ngModel name=\"isSubscribed\" /> Handicapped friendly\r\n    </label>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <button class=\"btn btn-primary\" [disabled]=\"!f.valid\" type=\"submit\">\r\n    Submit\r\n  </button>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/donate/donate.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/donate/donate.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4 pt-4\">\r\n  <h1 class=\"text-center text-info font-weight-bold\">Donate</h1>\r\n  <br />\r\n  <br />\r\n  <h2 class=\"text-center text-info font-weight-bold\">\r\n    Thank you for supporting nonprofits in your community!\r\n  </h2>\r\n  <br />\r\n\r\n  <div class=\"row\">\r\n    <div class=\"form-group mx-auto\">\r\n      <div class=\"input-group\">\r\n        <select\r\n          class=\"custom-select\"\r\n          id=\"donation-selection\"\r\n          aria-label=\"Please select a non-profit organization to donate to.\"\r\n        >\r\n          <option selected\r\n            >Please select a non-profit organization for your donation</option\r\n          >\r\n          <option value=\"1\">Animal Humane New Mexico</option>\r\n          <option value=\"2\">Habitat For Humanity</option>\r\n          <option value=\"3\">New Mexico Animal Friends</option>\r\n          <option value=\"4\">Watermelon Mountain Ranch</option>\r\n        </select>\r\n        <div class=\"input-group-append\">\r\n          <button\r\n            class=\"btn btn-outline-light\"\r\n            id=\"donation-continue\"\r\n            type=\"button\"\r\n          >\r\n            Continue\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/education-category/education-category.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/education-category/education-category.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>education-category works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/environment-category/environment-category.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/environment-category/environment-category.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>environment-category works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/equality-category/equality-category.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/equality-category/equality-category.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>equality-category works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/faq/faq.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/faq/faq.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4 pt-4\">\r\n  <h1 class=\"text-center text-info font-weight-bold\">FAQs</h1>\r\n  <div class=\"row\">\r\n    <div class=\"mx-auto\">\r\n      <div class=\"col p-5\">\r\n        <div class=\"fa-10x fas fa-hand-holding-heart\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"mx-auto\">\r\n      <h2 class=\"text-center text-info font-weight-bold\">\r\n        Please review the information below for valuable details about The\r\n        Volunteer Calendar\r\n      </h2>\r\n      <br />\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"mx-auto\">\r\n      <h3 class=\"text-center\">\r\n        Do you have to pay to use The Volunteer Calendar?\r\n      </h3>\r\n      <p class=\"text-center\">\r\n        The Volunteer Calendar is completely free to use. You are welcome to\r\n        support your local nonprofits by donating via our\r\n        <a href=\"donate\">donate page</a>. 100% of all donations go to the\r\n        nonprofit of your choice.\r\n      </p>\r\n      <br />\r\n      <h3 class=\"text-center\">\r\n        Why was The Volunteer Calendar created?\r\n      </h3>\r\n      <p class=\"text-center\">\r\n        The Volunteer Calendar was created to provide an easy way to empower\r\n        folks to support nonprofits in their local community. We aim to remove\r\n        barriers for volunteering to expand community involvement and better the\r\n        world.\r\n      </p>\r\n      <br />\r\n      <h3 class=\"text-center\">\r\n        How can I volunteer?\r\n      </h3>\r\n      <p class=\"text-center\">\r\n        The Volunteer Calendar provides two simple ways to find volunteer\r\n        opportunities: <br />\r\n        1) Visit our <a href=\"calendar\">Calendar</a> page to find upcoming\r\n        events to join that works within your schedule. <br />\r\n        2) Visit our <a href=\"categories\">Categories</a> page to find nonprofits\r\n        that support things you care about (ex. Animals) and see events specific\r\n        to those organizations.\r\n      </p>\r\n      <br />\r\n      <h3 class=\"text-center\">\r\n        Do I need an account to use The Volunteer Calendar?\r\n      </h3>\r\n      <p class=\"text-center\">\r\n        You do not need to <a href=\"register\">create an account</a> to view\r\n        events or nonprofit details, but it will allow you to join events to\r\n        receive updates and have a profile page with your scheduled events and\r\n        favorited nonprofits.\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gallery/gallery.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gallery/gallery.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4 pt-4\">\r\n  <h1 class=\"text-center text-info font-weight-bold\">\r\n    Gallery\r\n  </h1>\r\n  <br />\r\n  <br />\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-3 col-md-4 col-6 p-1\">\r\n      <img\r\n        class=\"img-fluid\"\r\n        src=\"assets/gallery_1.jpg\"\r\n        alt=\"Volunteering Rules!\"\r\n      />\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-4 col-6 p-1\">\r\n      <img\r\n        class=\"img-fluid\"\r\n        src=\"assets/gallery_2.JPG\"\r\n        alt=\"Volunteering Rules!\"\r\n      />\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-4 col-6 p-1\">\r\n      <img\r\n        class=\"img-fluid\"\r\n        src=\"assets/gallery_3.jfif\"\r\n        alt=\"Volunteering Rules!\"\r\n      />\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-4 col-6 p-1\">\r\n      <img\r\n        class=\"img-fluid\"\r\n        src=\"assets/gallery_4.JPG\"\r\n        alt=\"Volunteering Rules!\"\r\n      />\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-4 col-6 p-1\">\r\n      <img\r\n        class=\"img-fluid\"\r\n        src=\"assets/gallery_5.JPG\"\r\n        alt=\"Volunteering Rules!\"\r\n      />\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-4 col-6 p-1\">\r\n      <img\r\n        class=\"img-fluid\"\r\n        src=\"assets/gallery_6.JPG\"\r\n        alt=\"Volunteering Rules!\"\r\n      />\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-4 col-6 p-1\">\r\n      <img\r\n        class=\"img-fluid\"\r\n        src=\"assets/gallery_7.jpg\"\r\n        alt=\"Volunteering Rules!\"\r\n      />\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-4 col-6 p-1\">\r\n      <img\r\n        class=\"img-fluid\"\r\n        src=\"assets/gallery_8.jpg\"\r\n        alt=\"Volunteering Rules!\"\r\n      />\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-4 col-6 p-1\">\r\n      <img\r\n        class=\"img-fluid\"\r\n        src=\"assets/gallery_9.jpg\"\r\n        alt=\"Volunteering Rules!\"\r\n      />\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-4 col-6 p-1\">\r\n      <img\r\n        class=\"img-fluid\"\r\n        src=\"assets/gallery_10.JPG\"\r\n        alt=\"Volunteering Rules!\"\r\n      />\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-4 col-6 p-1\">\r\n      <img\r\n        class=\"img-fluid\"\r\n        src=\"assets/gallery_11.JPG\"\r\n        alt=\"Volunteering Rules!\"\r\n      />\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-4 col-6 p-1\">\r\n      <img\r\n        class=\"img-fluid\"\r\n        src=\"assets/gallery_12.jpg\"\r\n        alt=\"Volunteering Rules!\"\r\n      />\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/healthcare-category/healthcare-category.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/healthcare-category/healthcare-category.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>healthcare-category works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/housing-category/housing-category.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/housing-category/housing-category.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>housing-category works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/join-event/join-event.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/join-event/join-event.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\r\n<ul class=\"list-group\">\r\n    <li *ngFor=\"let detail of details\" class=\"list-group-item\">\r\n        <button>Join Event</button>\r\n        {{ detail.id }}\r\n        {{ detail.title }}\r\n    </li>\r\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-group\">\r\n  <div class=\"card p-4 border-0\">\r\n    <div class=\"card-body\">\r\n      <form name=\"form\" (ngSubmit)=\"login()\" #f=\"ngForm\">\r\n        <div class=\"input-group mb-3\">\r\n          <input\r\n            type=\"text\"\r\n            name=\"Email\"\r\n            [(ngModel)]=\"model.Email\"\r\n            class=\"form-control sty1\"\r\n            placeholder=\"Email\"\r\n            required\r\n          />\r\n        </div>\r\n        <div class=\"input-group mb-4\">\r\n          <input\r\n            type=\"password\"\r\n            name=\"Password\"\r\n            [(ngModel)]=\"model.Password\"\r\n            class=\"form-control\"\r\n            placeholder=\"Password\"\r\n          />\r\n        </div>\r\n        <div>\r\n          <p\r\n            style=\"color:#E92626;font-size:20px;font-weight:normal\"\r\n            Class=\"success\"\r\n            align=\"left\"\r\n          >\r\n            {{ errorMessage }}\r\n          </p>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <button type=\"submit\" class=\"btn btn-info px-4\">\r\n              Login\r\n            </button>\r\n          </div>\r\n          <div class=\"col-6 text-right\">\r\n            <button type=\"button\" class=\"btn btn-outline-info\">\r\n              Forgot password?\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=\"container-fluid\">\r\n    <nav class=\"navbar fixed-top navbar-expand-lg navbar-light bg-info\">\r\n      <a class=\"justify-content-left nav-link text-light\" href=\"\" id=\"logo\"\r\n        ><span class=\"volunteer-calendar-logo\">\r\n          <div class=\"fa-2x fas fa-hand-holding-heart\"></div>\r\n          The Volunteer Calendar\r\n        </span>\r\n      </a>\r\n\r\n      <button\r\n        class=\"navbar-toggler btn-light mt-1\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        (click)=\"isNavbarCollapsed = !isNavbarCollapsed\"\r\n        data-target=\"#navbarNav\"\r\n        aria-controls=\"navbarNav\"\r\n        aria-expanded=\"false\"\r\n        aria-label=\"Toggle navigation\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n\r\n      <div\r\n        [ngbCollapse]=\"!isNavbarCollapsed\"\r\n        class=\"collapse navbar-collapse\"\r\n        id=\"navbarNav\"\r\n      >\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link text-light\" href=\"categories\">Categories</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link text-light\" href=\"calendar\">Calendar</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link text-light\" href=\"aboutUs\">About Us</a>\r\n          </li>\r\n          <!--Account Dropdown Menu-->\r\n\r\n          <li class=\"nav-item dropdown\" ngbDropdown>\r\n            <a\r\n              class=\"nav-link dropdown-toggle text-light\"\r\n              ngbDropdownToggle\r\n              id=\"navbarDropdownAccount\"\r\n              role=\"button\"\r\n              data-toggle=\"dropdown\"\r\n              aria-haspopup=\"true\"\r\n              aria-expanded=\"false\"\r\n              >Account</a\r\n            >\r\n            <div\r\n              class=\"dropdown-menu\"\r\n              ngbDropdownMenu\r\n              aria-labelledby=\"navbarDropdown\"\r\n            >\r\n              <a\r\n                class=\"dropdown-item\"\r\n                ngbDropdownItem\r\n                routerLink=\"profile\"\r\n                (click)=\"profile()\"\r\n                >Profile</a\r\n              >\r\n              <a\r\n                class=\"dropdown-item\"\r\n                ngbDropdownItem\r\n                routerLink=\"register\"\r\n                (click)=\"register()\"\r\n                >Sign Up</a\r\n              >\r\n              <app-sign-in></app-sign-in>\r\n              <a\r\n                class=\"dropdown-item\"\r\n                ngbDropdownItem\r\n                href=\"\"\r\n                routerLink=\"\"\r\n                (click)=\"signOut()\"\r\n                >Sign Out</a\r\n              >\r\n            </div>\r\n          </li>\r\n          <form class=\"form-inline my-2 my-lg-0\">\r\n            <input\r\n              class=\"form-control mr-sm-2\"\r\n              type=\"search\"\r\n              placeholder=\"Search\"\r\n              aria-label=\"Search\"\r\n            />\r\n            <button class=\"btn btn-outline-light my-2 my-sm-0\" type=\"submit\">\r\n              Search\r\n            </button>\r\n          </form>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nonprofit/nonprofit.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nonprofit/nonprofit.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>nonprofit works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/organization-dashboard/organization-dashboard.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/organization-dashboard/organization-dashboard.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"buttones\">\n    <button btn class=\"btn btn-primary\" routerLink=\"/create-event\">Create a New Event</button>\n    <button btn class=\"btn btn-primary\" routerLink=\"/calendar\">My Calendar</button>\n</div>\n\n\n<h2>Events I'm Hosting:</h2>\n<ul class=\"list-group\">\n    <li *ngFor=\"let detail of details\" class=\"list-group-item\">\n        <strong>Event:</strong> {{ detail.title }} <br>\n        <strong>Event details:</strong> {{ detail.body }}\n    </li>\n</ul>\n\n<app-calendar></app-calendar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page/page.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Volunteer Event(s)</h1>\r\n<ul>\r\n  <li>Volunteer for Humans</li>\r\n  <li>Volunteer for the Environment</li>\r\n  <li>Volunteer for Animals</li>\r\n</ul>\r\n\r\n<p>(Calendar)</p>\r\n<iframe\r\n  src=\"https://calendar.google.com/calendar/embed?src=anton.lo%40ruralsourcing.com&ctz=America%2FDenver\"\r\n  style=\"border: 0\"\r\n  width=\"800\"\r\n  height=\"600\"\r\n  frameborder=\"0\"\r\n  scrolling=\"no\"\r\n></iframe>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4 pt-4\">\r\n  <h1 class=\"text-center text-info font-weight-bold\">\r\n    Bruce Wayne's Profile\r\n  </h1>\r\n  <br />\r\n  <!--JUMBOTRON-->\r\n  <div class=\"container-fluid\">\r\n    <div class=\"jumbotron jumbotron-fluid rounded p-3 d-none d-md-block\">\r\n      <ngb-carousel\r\n        [showNavigationArrows]=\"showNavigationArrows\"\r\n        [showNavigationIndicators]=\"showNavigationIndicators\"\r\n      >\r\n        <ng-template ngbSlide>\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-8\">\r\n              <a href=\"calendar\" alt=\"Events Calendar\" title=\"Events Calendar\"\r\n                ><img\r\n                  src=\"assets/volunteer-banner.svg\"\r\n                  alt=\"Welcome To The Volunteer Calendar\"\r\n                  class=\"rounded img-fluid text-centered mx-auto\"\r\n              /></a>\r\n            </div>\r\n            <div class=\"col px-3 mx-auto d-none d-xl-block\">\r\n              <h3 class=\"font-weight-bold text-light\">\r\n                Welcome to the Volunteer Calendar!\r\n              </h3>\r\n              <p class=\"text-light\">\r\n                Please explore and find organizations or upcoming events to\r\n                join.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-8\">\r\n              <a href=\"calendar\" alt=\"Events Calendar\" title=\"Events Calendar\"\r\n                ><img\r\n                  src=\"assets/volunteer-banner.svg\"\r\n                  alt=\"Welcome To The Volunteer Calendar\"\r\n                  class=\"rounded img-fluid text-centered mx-auto\"\r\n              /></a>\r\n            </div>\r\n            <div class=\"col px-3 mx-auto d-none d-xl-block\">\r\n              <h3 class=\"font-weight-bold text-light\">\r\n                Welcome to the Volunteer Calendar!\r\n              </h3>\r\n              <p class=\"text-light\">\r\n                Please explore and find organizations or upcoming events to\r\n                join.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-8\">\r\n              <a href=\"calendar\" alt=\"Events Calendar\" title=\"Events Calendar\"\r\n                ><img\r\n                  src=\"assets/volunteer-banner.svg\"\r\n                  alt=\"Welcome To The Volunteer Calendar\"\r\n                  class=\"rounded img-fluid text-centered mx-auto\"\r\n              /></a>\r\n            </div>\r\n            <div class=\"col px-3 mx-auto d-none d-xl-block\">\r\n              <h3 class=\"font-weight-bold text-light\">\r\n                Welcome to the Volunteer Calendar!\r\n              </h3>\r\n              <p class=\"text-light\">\r\n                Please explore and find organizations or upcoming events to\r\n                join.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-carousel>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-calendar></app-calendar>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4 pt-4\">\r\n  <h1 class=\"text-center text-info font-weight-bold\">\r\n    Sign Up For The Volunteer Calendar\r\n  </h1>\r\n  <div class=\"row\">\r\n    <div class=\"mx-auto\">\r\n      <div class=\"col p-5\">\r\n        <div class=\"fa-10x fas fa-hand-holding-heart\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-6 col-lg-8 mx-auto\">\r\n      <form [formGroup]=\"UserForm\" (ngSubmit)=\"onFormSubmit(UserForm.value)\">\r\n        <div class=\"input-group mb-3\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName=\"UserName\" />\r\n        </div>\r\n        <div class=\"input-group mb-3\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" formControlName=\"FirstName\" />\r\n        </div>\r\n        <div class=\"input-group mb-3\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" formControlName=\"LastName\" />\r\n        </div>\r\n        <div class=\"input-group mb-4\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Email\" formControlName=\"Email\" />\r\n        </div>\r\n        <div class=\"input-group mb-3\">\r\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"Password\" />\r\n        </div>\r\n        <div class=\"input-group mb-4\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Describe Yourself\" formControlName=\"UserAboutMe\" />\r\n        </div>\r\n        <div class=\"checkbox\" style=\"margin-bottom: 1em\">\r\n          <label>\r\n            <input type=\"checkbox\" ngModel name=\"Organization\" /> I am a volunteer organization\r\n          </label>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-block btn-info\">\r\n          Submit\r\n        </button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sign-in/sign-in.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sign-in/sign-in.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title text-info font-weight-bold\">Sign In</h4>\r\n    <button\r\n      type=\"button\"\r\n      class=\"close\"\r\n      aria-label=\"Close\"\r\n      (click)=\"d('Cross click')\"\r\n    >\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"container-fluid text-info\">\r\n    <app-login></app-login>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn btn-outline-info\"\r\n      (click)=\"c('Close click')\"\r\n    >\r\n      Close\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n\r\n<a class=\"dropdown-item\" (click)=\"open(content)\">\r\n  Sign In\r\n</a>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/splash/splash.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/splash/splash.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4 pt-4\">\r\n  <h1 class=\"text-center text-info font-weight-bold\">\r\n    The Volunteer Calendar\r\n  </h1>\r\n  <br />\r\n  <!--JUMBOTRON-->\r\n  <div class=\"container-fluid\">\r\n    <div class=\"jumbotron jumbotron-fluid rounded p-3 d-none d-md-block\">\r\n      <ngb-carousel\r\n        [showNavigationArrows]=\"showNavigationArrows\"\r\n        [showNavigationIndicators]=\"showNavigationIndicators\"\r\n      >\r\n        <ng-template ngbSlide>\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-8\">\r\n              <a href=\"calendar\" alt=\"Events Calendar\" title=\"Events Calendar\"\r\n                ><img\r\n                  src=\"assets/volunteer-banner.svg\"\r\n                  alt=\"Welcome To The Volunteer Calendar\"\r\n                  class=\"rounded img-fluid text-centered mx-auto\"\r\n              /></a>\r\n            </div>\r\n            <div class=\"col px-3 mx-auto d-none d-xl-block\">\r\n              <h3 class=\"font-weight-bold text-light\">\r\n                Welcome to the Volunteer Calendar!\r\n              </h3>\r\n              <p class=\"text-light\">\r\n                Please explore and find organizations or upcoming events to\r\n                join.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-8\">\r\n              <a\r\n                href=\"watermelon-mountain-ranch\"\r\n                alt=\"Watermelon Mountain Ranch\"\r\n                title=\"Watermelon Mountain Ranch\"\r\n              >\r\n                <img\r\n                  src=\"assets/puppyadoption.svg\"\r\n                  alt=\"Watermelon Mountain Ranch\"\r\n                  class=\"rounded img-fluid mx-auto\"\r\n                />\r\n              </a>\r\n            </div>\r\n            <div class=\"col px-3 mx-auto d-none d-xl-block\">\r\n              <h3 class=\"font-weight-bold text-light\">\r\n                Watermelon Mountain Ranch\r\n              </h3>\r\n              <p class=\"text-light\">\r\n                Puppy adoption event 8/31 <br />9:00am-3:00pm @ Petsmart on\r\n                Coors Blvd\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-8\">\r\n              <img\r\n                src=\"assets/habitat-for-humanity-banner.svg\"\r\n                alt=\"Habitat For Humanity\"\r\n                class=\"col rounded img-fluid mx-auto\"\r\n              />\r\n            </div>\r\n            <div class=\"col px-3 mx-auto d-none d-xl-block\">\r\n              <h3 class=\"font-weight-bold text-light\">\r\n                Habitat For Humanity\r\n              </h3>\r\n              <p class=\"text-light\">\r\n                A world where everyone has a decent place to live.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-carousel>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- VOLUNTEER BY LINKS -->\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row text-center\">\r\n    <div class=\"col-lg-6 col-md-7 p-3 mx-auto\">\r\n      <a href=\"categories\">\r\n        <div\r\n          class=\"btn btn-info m-2 font-weight-bold\"\r\n          id=\"volunteer-by-buttons\"\r\n        >\r\n          Volunteer By Category\r\n        </div>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"col-lg-6 col-md-7 p-3 mx-auto\">\r\n      <a href=\"calendar\">\r\n        <div\r\n          class=\"btn btn-info m-2 font-weight-bold\"\r\n          id=\"volunteer-by-buttons\"\r\n        >\r\n          Volunteer By Date\r\n        </div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--SUB LINKS:-->\r\n<div class=\"container-fluid\">\r\n  <div class=\"row text-center\">\r\n    <div class=\"col-lg-4 col-md-7 p-3 mx-auto\">\r\n      <a href=\"faq\" alt=\"FAQs\" title=\"FAQs\">\r\n        <div class=\"fa-7x fas fa-question-circle\" id=\"faq-icon\"></div>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"col-lg-4 col-md-7 p-3 mx-auto\">\r\n      <a href=\"gallery\" alt=\"Gallery\" title=\"Gallery\">\r\n        <div class=\"fa-7x fas fa-images\" id=\"gallery-icon\"></div>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"col-lg-4 col-md-7 p-3 mx-auto\">\r\n      <a href=\"donate\" alt=\"Donate\" title=\"Donate\">\r\n        <div class=\"fa-7x fas fa-hand-holding-usd\" id=\"donate-icon\"></div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/technology-category/technology-category.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/technology-category/technology-category.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>technology-category works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/transportation-category/transportation-category.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/transportation-category/transportation-category.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <button\r\n      type=\"button\"\r\n      class=\"close\"\r\n      aria-label=\"Close\"\r\n      (click)=\"d('Cross click')\"\r\n    >\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"container-fluid\">\r\n    <h2 class=\"text-center text-info font-weight-bold\">Animal Welfare</h2>\r\n    <ul>\r\n      <li>\r\n        <a\r\n          href=\"#\"\r\n          alt=\"Watermelon Mountain Ranch\"\r\n          title=\"Watermelon Mountain Ranch\"\r\n          class=\"text-info font-weight-bold\"\r\n          >Watermelon Mountain Ranch</a\r\n        >\r\n      </li>\r\n      <li>\r\n        <a\r\n          href=\"#\"\r\n          alt=\"Animal Humane New Mexico\"\r\n          title=\"Animal Humane New Mexico\"\r\n          class=\"text-info font-weight-bold\"\r\n          >Animal Humane New Mexico</a\r\n        >\r\n      </li>\r\n      <li>\r\n        <a\r\n          href=\"#\"\r\n          alt=\"New Mexico Animal Friends\"\r\n          title=\"New Mexico Animal Friends\"\r\n          class=\"text-info font-weight-bold\"\r\n          >New Mexico Animal Friends</a\r\n        >\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn btn-outline-dark\"\r\n      (click)=\"c('Close click')\"\r\n    >\r\n      Close\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n\r\n<a (click)=\"open(content)\">TRANSPORTATION</a>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/volunteer-dashboard/volunteer-dashboard.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/volunteer-dashboard/volunteer-dashboard.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-calendar></app-calendar>\n\n<h2>Events I've Joined</h2>\n<ul class=\"list-group\">\n    <li *ngFor=\"let detail of details\" class=\"list-group-item\">\n        {{ detail.userId }}\n        {{ detail.id }}\n        {{ detail.title }}\n    </li>\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/watermelon-mountain-ranch/watermelon-mountain-ranch.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/watermelon-mountain-ranch/watermelon-mountain-ranch.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-4 pt-4\">\r\n  <h1 class=\"text-center text-info font-weight-bold\">\r\n    Watermelon Mountain Ranch\r\n  </h1>\r\n  <br />\r\n  <!--JUMBOTRON-->\r\n  <div class=\"container-fluid\">\r\n    <div class=\"jumbotron jumbotron-fluid rounded p-3 d-none d-md-block\">\r\n      <ngb-carousel\r\n        [showNavigationArrows]=\"showNavigationArrows\"\r\n        [showNavigationIndicators]=\"showNavigationIndicators\"\r\n      >\r\n        <ng-template ngbSlide>\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-8\">\r\n              <a\r\n                href=\"watermelon-mountain-ranch\"\r\n                alt=\"Watermelon Mountain Ranch\"\r\n                title=\"Watermelon Mountain Ranch\"\r\n              >\r\n                <img\r\n                  src=\"assets/puppyadoption.svg\"\r\n                  alt=\"Watermelon Mountain Ranch\"\r\n                  class=\"rounded img-fluid mx-auto\"\r\n                />\r\n              </a>\r\n            </div>\r\n            <div class=\"col px-3 mx-auto d-none d-xl-block\">\r\n              <h3 class=\"font-weight-bold text-light\">\r\n                Watermelon Mountain Ranch\r\n              </h3>\r\n              <p class=\"text-light\">\r\n                Puppy adoption event 8/31 <br />9:00am-3:00pm @ Petsmart on\r\n                Coors Blvd\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-8\">\r\n              <a\r\n                href=\"watermelon-mountain-ranch\"\r\n                alt=\"Watermelon Mountain Ranch\"\r\n                title=\"Watermelon Mountain Ranch\"\r\n              >\r\n                <img\r\n                  src=\"assets/puppyadoption.svg\"\r\n                  alt=\"Watermelon Mountain Ranch\"\r\n                  class=\"rounded img-fluid mx-auto\"\r\n                />\r\n              </a>\r\n            </div>\r\n            <div class=\"col px-3 mx-auto d-none d-xl-block\">\r\n              <h3 class=\"font-weight-bold text-light\">\r\n                Watermelon Mountain Ranch\r\n              </h3>\r\n              <p class=\"text-light\">\r\n                Puppy adoption event 8/31 <br />9:00am-3:00pm @ Petsmart on\r\n                Coors Blvd\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-8\">\r\n              <a\r\n                href=\"watermelon-mountain-ranch\"\r\n                alt=\"Watermelon Mountain Ranch\"\r\n                title=\"Watermelon Mountain Ranch\"\r\n              >\r\n                <img\r\n                  src=\"assets/puppyadoption.svg\"\r\n                  alt=\"Watermelon Mountain Ranch\"\r\n                  class=\"rounded img-fluid mx-auto\"\r\n                />\r\n              </a>\r\n            </div>\r\n            <div class=\"col px-3 mx-auto d-none d-xl-block\">\r\n              <h3 class=\"font-weight-bold text-light\">\r\n                Watermelon Mountain Ranch\r\n              </h3>\r\n              <p class=\"text-light\">\r\n                Puppy adoption event 8/31 <br />9:00am-3:00pm @ Petsmart on\r\n                Coors Blvd\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-carousel>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-calendar></app-calendar>\r\n<!-- </div> -->\r\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-hand-holding-heart {\r\n  color: #de795b;\r\n}\r\n\r\np {\r\n  color: #de795b;\r\n  font-weight: bold;\r\n}\r\n\r\nh3 {\r\n  color: #de795b;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEtaGFuZC1ob2xkaW5nLWhlYXJ0IHtcclxuICBjb2xvcjogI2RlNzk1YjtcclxufVxyXG5cclxucCB7XHJcbiAgY29sb3I6ICNkZTc5NWI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmgzIHtcclxuICBjb2xvcjogI2RlNzk1YjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: __webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/about-us/about-us.component.html"),
        styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutUsComponent);



/***/ }),

/***/ "./src/app/animals-category/animals-category.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/animals-category/animals-category.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  border: none;\r\n  -webkit-column-break-inside: avoid;\r\n     -moz-column-break-inside: avoid;\r\n          break-inside: avoid;\r\n  page-break-inside: avoid;\r\n  padding: 0;\r\n  margin: 1px;\r\n}\r\n\r\n#category-icons {\r\n  color: #de795b;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5pbWFscy1jYXRlZ29yeS9hbmltYWxzLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0NBQW1CO0tBQW5CLCtCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYW5pbWFscy1jYXRlZ29yeS9hbmltYWxzLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAxcHg7XHJcbn1cclxuXHJcbiNjYXRlZ29yeS1pY29ucyB7XHJcbiAgY29sb3I6ICNkZTc5NWI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/animals-category/animals-category.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/animals-category/animals-category.component.ts ***!
  \****************************************************************/
/*! exports provided: AnimalsCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalsCategoryComponent", function() { return AnimalsCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let AnimalsCategoryComponent = class AnimalsCategoryComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    open(content) {
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title" })
            .result.then(result => {
            this.closeResult = `Closed with: ${result}`;
        });
    }
};
AnimalsCategoryComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
AnimalsCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-animals-category",
        template: __webpack_require__(/*! raw-loader!./animals-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/animals-category/animals-category.component.html"),
        styles: [__webpack_require__(/*! ./animals-category.component.css */ "./src/app/animals-category/animals-category.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
], AnimalsCategoryComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _create_event_create_event_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-event/create-event.component */ "./src/app/create-event/create-event.component.ts");
/* harmony import */ var _join_event_join_event_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./join-event/join-event.component */ "./src/app/join-event/join-event.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _splash_splash_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./splash/splash.component */ "./src/app/splash/splash.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _donate_donate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./donate/donate.component */ "./src/app/donate/donate.component.ts");
/* harmony import */ var _watermelon_mountain_ranch_watermelon_mountain_ranch_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./watermelon-mountain-ranch/watermelon-mountain-ranch.component */ "./src/app/watermelon-mountain-ranch/watermelon-mountain-ranch.component.ts");
/* harmony import */ var _organization_dashboard_organization_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./organization-dashboard/organization-dashboard.component */ "./src/app/organization-dashboard/organization-dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _volunteer_dashboard_volunteer_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./volunteer-dashboard/volunteer-dashboard.component */ "./src/app/volunteer-dashboard/volunteer-dashboard.component.ts");



















const routes = [
    { path: "", component: _splash_splash_component__WEBPACK_IMPORTED_MODULE_5__["SplashComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"] },
    { path: "register", component: _register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"] },
    { path: "categories", component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__["CategoriesComponent"] },
    { path: "calendar", component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_8__["CalendarComponent"] },
    { path: "join-event", component: _join_event_join_event_component__WEBPACK_IMPORTED_MODULE_2__["JoinEventComponent"] },
    { path: "profile", component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"] },
    { path: "aboutUs", component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"] },
    { path: "create-event", component: _create_event_create_event_component__WEBPACK_IMPORTED_MODULE_1__["CreateEventComponent"] },
    { path: "gallery", component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_11__["GalleryComponent"] },
    { path: "faq", component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_12__["FaqComponent"] },
    { path: "donate", component: _donate_donate_component__WEBPACK_IMPORTED_MODULE_13__["DonateComponent"] },
    {
        path: "watermelon-mountain-ranch",
        component: _watermelon_mountain_ranch_watermelon_mountain_ranch_component__WEBPACK_IMPORTED_MODULE_14__["WatermelonMountainRanchComponent"]
    },
    { path: "organization-dashboard", component: _organization_dashboard_organization_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["OrganizationDashboardComponent"] },
    { path: "volunteer-dashboard", component: _volunteer_dashboard_volunteer_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["VolunteerDashboardComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");




let AppComponent = class AppComponent {
    constructor(modalService, cookieService) {
        this.modalService = modalService;
        this.cookieService = cookieService;
        this.cookieValue = "Volunteer";
        this.title = "vol-army-app";
    }
    ngOnInit() {
        this.cookieService.set("Volunteer Calendar", "Cookies! Nom! Nom!", 1);
        this.cookieValue = this.cookieService.get("Volunteer Calendar");
    }
};
AppComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _join_event_join_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./join-event/join-event.service */ "./src/app/join-event/join-event.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm2015/angularx-flatpickr.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _create_event_create_event_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./create-event/create-event.component */ "./src/app/create-event/create-event.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _nonprofit_nonprofit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./nonprofit/nonprofit.component */ "./src/app/nonprofit/nonprofit.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _splash_splash_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./splash/splash.component */ "./src/app/splash/splash.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _animals_category_animals_category_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./animals-category/animals-category.component */ "./src/app/animals-category/animals-category.component.ts");
/* harmony import */ var _transportation_category_transportation_category_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./transportation-category/transportation-category.component */ "./src/app/transportation-category/transportation-category.component.ts");
/* harmony import */ var _equality_category_equality_category_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./equality-category/equality-category.component */ "./src/app/equality-category/equality-category.component.ts");
/* harmony import */ var _environment_category_environment_category_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./environment-category/environment-category.component */ "./src/app/environment-category/environment-category.component.ts");
/* harmony import */ var _education_category_education_category_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./education-category/education-category.component */ "./src/app/education-category/education-category.component.ts");
/* harmony import */ var _housing_category_housing_category_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./housing-category/housing-category.component */ "./src/app/housing-category/housing-category.component.ts");
/* harmony import */ var _children_category_children_category_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./children-category/children-category.component */ "./src/app/children-category/children-category.component.ts");
/* harmony import */ var _healthcare_category_healthcare_category_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./healthcare-category/healthcare-category.component */ "./src/app/healthcare-category/healthcare-category.component.ts");
/* harmony import */ var _technology_category_technology_category_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./technology-category/technology-category.component */ "./src/app/technology-category/technology-category.component.ts");
/* harmony import */ var _join_event_join_event_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./join-event/join-event.component */ "./src/app/join-event/join-event.component.ts");
/* harmony import */ var _watermelon_mountain_ranch_watermelon_mountain_ranch_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./watermelon-mountain-ranch/watermelon-mountain-ranch.component */ "./src/app/watermelon-mountain-ranch/watermelon-mountain-ranch.component.ts");
/* harmony import */ var _donate_donate_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./donate/donate.component */ "./src/app/donate/donate.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _organization_dashboard_organization_dashboard_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./organization-dashboard/organization-dashboard.component */ "./src/app/organization-dashboard/organization-dashboard.component.ts");
/* harmony import */ var _volunteer_dashboard_volunteer_dashboard_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./volunteer-dashboard/volunteer-dashboard.component */ "./src/app/volunteer-dashboard/volunteer-dashboard.component.ts");












































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
            _page_page_component__WEBPACK_IMPORTED_MODULE_14__["PageComponent"],
            _create_event_create_event_component__WEBPACK_IMPORTED_MODULE_15__["CreateEventComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__["NavbarComponent"],
            _categories_categories_component__WEBPACK_IMPORTED_MODULE_20__["CategoriesComponent"],
            _nonprofit_nonprofit_component__WEBPACK_IMPORTED_MODULE_21__["NonprofitComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"],
            _splash_splash_component__WEBPACK_IMPORTED_MODULE_23__["SplashComponent"],
            _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_24__["CalendarComponent"],
            _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_25__["AboutUsComponent"],
            _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_17__["SignInComponent"],
            _animals_category_animals_category_component__WEBPACK_IMPORTED_MODULE_26__["AnimalsCategoryComponent"],
            _transportation_category_transportation_category_component__WEBPACK_IMPORTED_MODULE_27__["TransportationCategoryComponent"],
            _equality_category_equality_category_component__WEBPACK_IMPORTED_MODULE_28__["EqualityCategoryComponent"],
            _environment_category_environment_category_component__WEBPACK_IMPORTED_MODULE_29__["EnvironmentCategoryComponent"],
            _education_category_education_category_component__WEBPACK_IMPORTED_MODULE_30__["EducationCategoryComponent"],
            _housing_category_housing_category_component__WEBPACK_IMPORTED_MODULE_31__["HousingCategoryComponent"],
            _children_category_children_category_component__WEBPACK_IMPORTED_MODULE_32__["ChildrenCategoryComponent"],
            _healthcare_category_healthcare_category_component__WEBPACK_IMPORTED_MODULE_33__["HealthcareCategoryComponent"],
            _technology_category_technology_category_component__WEBPACK_IMPORTED_MODULE_34__["TechnologyCategoryComponent"],
            _watermelon_mountain_ranch_watermelon_mountain_ranch_component__WEBPACK_IMPORTED_MODULE_36__["WatermelonMountainRanchComponent"],
            _donate_donate_component__WEBPACK_IMPORTED_MODULE_37__["DonateComponent"],
            _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_38__["GalleryComponent"],
            _faq_faq_component__WEBPACK_IMPORTED_MODULE_39__["FaqComponent"],
            _join_event_join_event_component__WEBPACK_IMPORTED_MODULE_35__["JoinEventComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_40__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_41__["RegisterComponent"],
            _organization_dashboard_organization_dashboard_component__WEBPACK_IMPORTED_MODULE_42__["OrganizationDashboardComponent"],
            _volunteer_dashboard_volunteer_dashboard_component__WEBPACK_IMPORTED_MODULE_43__["VolunteerDashboardComponent"]
        ],
        imports: [
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_12__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_12__["OwlNativeDateTimeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_8__["FlatpickrModule"].forRoot(),
            angular_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"].forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"],
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_10__["adapterFactory"]
            })
        ],
        providers: [_join_event_join_event_service__WEBPACK_IMPORTED_MODULE_1__["JoinEventService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/calendar.service.ts":
/*!*************************************!*\
  !*** ./src/app/calendar.service.ts ***!
  \*************************************/
/*! exports provided: CalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let CalendarService = class CalendarService {
    constructor(http) {
        this.http = http;
        this.url = "http://jsonplaceholder.typicode.com/posts";
    }
    onSubmit() {
        this.http.post(this.url, this.posts).subscribe(r => {
            this.posts.push(r);
        });
    }
};
CalendarService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CalendarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], CalendarService);



/***/ }),

/***/ "./src/app/calendar/calendar.component.css":
/*!*************************************************!*\
  !*** ./src/app/calendar/calendar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\r\n  margin: 0 0 10px;\r\n  color: #de795b;\r\n}\r\n\r\npre {\r\n  background-color: #f5f5f5;\r\n  padding: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XHJcbiAgbWFyZ2luOiAwIDAgMTBweDtcclxuICBjb2xvcjogI2RlNzk1YjtcclxufVxyXG5cclxucHJlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var _custom_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-event-title-formatter.provider */ "./src/app/calendar/custom-event-title-formatter.provider.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../calendar.service */ "./src/app/calendar.service.ts");









const colors = {
    red: {
        primary: "#ad2121",
        secondary: "#FAE3E3"
    },
    blue: {
        primary: "#1e90ff",
        secondary: "#D1E8FF"
    },
    yellow: {
        primary: "#e3bc08",
        secondary: "#FDF1BA"
    },
    example: {
        primary: "#de795b",
        secondary: "#17a2b8"
    },
    default: {
        primary: "#17a2b8",
        secondary: "#de795b"
    }
};
let CalendarComponent = class CalendarComponent {
    constructor(modal, http, service) {
        this.modal = modal;
        this.http = http;
        this.service = service;
        this.url = "http://jsonplaceholder.typicode.com/posts";
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: ({ event }) => {
                    this.handleEvent("Edited", event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: ({ event }) => {
                    this.events = this.events.filter(iEvent => iEvent !== event);
                    this.handleEvent("Deleted", event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: ({ event }) => {
                    this.handleEvent("Edited", event);
                }
            }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.events = [
            // this.service.onSubmit().subscribe(r => {
            //   return this.CalendarEvent = r;
            // });
            //Example Events
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(new Date(), 1),
                title: "Booyah",
                color: colors.blue,
                actions: this.actions,
                allDay: false,
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(new Date(), 1),
                title: "A 3 day event",
                color: colors.red,
                actions: this.actions,
                allDay: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()),
                title: "An event with no end date",
                color: colors.yellow,
                actions: this.actions
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfMonth"])(new Date()), 3),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfMonth"])(new Date()), 3),
                title: "A long event that spans 2 months",
                color: colors.blue,
                allDay: true
            },
            {
                title: "Watermelon Mountain Ranch Adoptathon",
                start: new Date(),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()), 2),
                color: colors.example
            },
            {
                title: "RSI Blood Donation Event",
                start: new Date(),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()), 4),
                color: colors.example
            }
        ];
        this.activeDayIsOpen = false;
    }
    dayClicked({ date, events }) {
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    }
    eventTimesChanged({ event, newStart, newEnd }) {
        this.events = this.events.map(iEvent => {
            if (iEvent === event) {
                return Object.assign({}, event, { start: newStart, end: newEnd });
            }
            return iEvent;
        });
        this.handleEvent("Dropped or resized", event);
    }
    handleEvent(action, event) {
        this.modalData = { event, action };
        this.modal.open(this.modalContent, { size: "lg" });
    }
    addEvent() {
        this.events = [
            ...this.events,
            {
                title: "New event",
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date()),
                color: colors.default,
                draggable: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                }
            }
        ];
    }
    deleteEvent(eventToDelete) {
        this.events = this.events.filter(event => event !== eventToDelete);
    }
    setView(view) {
        this.view = view;
    }
    closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
    }
};
CalendarComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _calendar_service__WEBPACK_IMPORTED_MODULE_8__["CalendarService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("modalContent", { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], CalendarComponent.prototype, "modalContent", void 0);
CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-calendar",
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: __webpack_require__(/*! raw-loader!./calendar.component.html */ "./node_modules/raw-loader/index.js!./src/app/calendar/calendar.component.html"),
        providers: [
            {
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarEventTitleFormatter"],
                useClass: _custom_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_6__["CustomEventTitleFormatter"]
            }
        ],
        styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/calendar/calendar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _calendar_service__WEBPACK_IMPORTED_MODULE_8__["CalendarService"]])
], CalendarComponent);



/***/ }),

/***/ "./src/app/calendar/custom-event-title-formatter.provider.ts":
/*!*******************************************************************!*\
  !*** ./src/app/calendar/custom-event-title-formatter.provider.ts ***!
  \*******************************************************************/
/*! exports provided: CustomEventTitleFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEventTitleFormatter", function() { return CustomEventTitleFormatter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let CustomEventTitleFormatter = class CustomEventTitleFormatter extends angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarEventTitleFormatter"] {
    constructor(locale) {
        super();
        this.locale = locale;
    }
    month(event) {
        return `
    <b>${new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"](this.locale).transform(event.start, "h:mm a", this.locale)}</b> -
    <b>${new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"](this.locale).transform(event.end, "h:mm a", this.locale)}</b>
    ${event.title}
    `;
    }
    week(event) {
        return `<b>${new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"](this.locale).transform(event.start, "h:mm a", this.locale)}</b> ${event.title}`;
    }
    day(event) {
        return `<b>${new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"](this.locale).transform(event.start, "h:mm a", this.locale)}</b> ${event.title}`;
    }
};
CustomEventTitleFormatter.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] }
];
CustomEventTitleFormatter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
], CustomEventTitleFormatter);



/***/ }),

/***/ "./src/app/categories/categories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/categories/categories.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  border: none;\r\n  -webkit-column-break-inside: avoid;\r\n     -moz-column-break-inside: avoid;\r\n          break-inside: avoid;\r\n  page-break-inside: avoid;\r\n  padding: 0;\r\n  margin: 1px;\r\n}\r\n\r\n#category-icons {\r\n  color: #de795b;\r\n}\r\n\r\n#category-button {\r\n  width: 10em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0NBQW1CO0tBQW5CLCtCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAxcHg7XHJcbn1cclxuXHJcbiNjYXRlZ29yeS1pY29ucyB7XHJcbiAgY29sb3I6ICNkZTc5NWI7XHJcbn1cclxuXHJcbiNjYXRlZ29yeS1idXR0b24ge1xyXG4gIHdpZHRoOiAxMGVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");




let CategoriesComponent = class CategoriesComponent {
    constructor(router, modalService) {
        this.router = router;
        this.modalService = modalService;
    }
    ngOnInit() { }
};
CategoriesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-categories",
        template: __webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/index.js!./src/app/categories/categories.component.html"),
        styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
], CategoriesComponent);



/***/ }),

/***/ "./src/app/children-category/children-category.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/children-category/children-category.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoaWxkcmVuLWNhdGVnb3J5L2NoaWxkcmVuLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/children-category/children-category.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/children-category/children-category.component.ts ***!
  \******************************************************************/
/*! exports provided: ChildrenCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildrenCategoryComponent", function() { return ChildrenCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChildrenCategoryComponent = class ChildrenCategoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
ChildrenCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-children-category',
        template: __webpack_require__(/*! raw-loader!./children-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/children-category/children-category.component.html"),
        styles: [__webpack_require__(/*! ./children-category.component.css */ "./src/app/children-category/children-category.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChildrenCategoryComponent);



/***/ }),

/***/ "./src/app/create-event/create-event.component.css":
/*!*********************************************************!*\
  !*** ./src/app/create-event/create-event.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n  font-family: Montserrat;\r\n}\r\nh1 {\r\n  text-align: center;\r\n  margin-top: 2em;\r\n  margin-bottom: 1em;\r\n}\r\nlabel {\r\n  font-size: 1em;\r\n  margin-left: 1em;\r\n  margin-bottom: 1em;\r\n}\r\ninput,\r\ntextarea {\r\n  margin-left: 1em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWV2ZW50L2NyZWF0ZS1ldmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtZXZlbnQvY3JlYXRlLWV2ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxufVxyXG5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuaW5wdXQsXHJcbnRleHRhcmVhIHtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/create-event/create-event.component.ts":
/*!********************************************************!*\
  !*** ./src/app/create-event/create-event.component.ts ***!
  \********************************************************/
/*! exports provided: CreateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return CreateEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let CreateEventComponent = class CreateEventComponent {
    constructor(http) {
        this.http = http;
        this.url = "http://jsonplaceholder.typicode.com/posts";
    }
    ngOnInit() {
        this.posts = [];
    }
    onSubmit(f) {
        let post = { event: f };
        this.http.post(this.url, post).subscribe(response => {
            this.posts.push(response);
            this.eventForm.resetForm();
        });
    }
    ;
};
CreateEventComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
], CreateEventComponent.prototype, "eventForm", void 0);
CreateEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "create-event",
        template: __webpack_require__(/*! raw-loader!./create-event.component.html */ "./node_modules/raw-loader/index.js!./src/app/create-event/create-event.component.html"),
        styles: [__webpack_require__(/*! ./create-event.component.css */ "./src/app/create-event/create-event.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CreateEventComponent);



/***/ }),

/***/ "./src/app/donate/donate.component.css":
/*!*********************************************!*\
  !*** ./src/app/donate/donate.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#donation-selection {\r\n  color: #de795b;\r\n  font-weight: bold;\r\n}\r\n\r\n#donation-continue {\r\n  background-color: #de795b;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uYXRlL2RvbmF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kb25hdGUvZG9uYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZG9uYXRpb24tc2VsZWN0aW9uIHtcclxuICBjb2xvcjogI2RlNzk1YjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI2RvbmF0aW9uLWNvbnRpbnVlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGU3OTViO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/donate/donate.component.ts":
/*!********************************************!*\
  !*** ./src/app/donate/donate.component.ts ***!
  \********************************************/
/*! exports provided: DonateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateComponent", function() { return DonateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DonateComponent = class DonateComponent {
    constructor() { }
    ngOnInit() {
    }
};
DonateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-donate',
        template: __webpack_require__(/*! raw-loader!./donate.component.html */ "./node_modules/raw-loader/index.js!./src/app/donate/donate.component.html"),
        styles: [__webpack_require__(/*! ./donate.component.css */ "./src/app/donate/donate.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DonateComponent);



/***/ }),

/***/ "./src/app/education-category/education-category.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/education-category/education-category.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkdWNhdGlvbi1jYXRlZ29yeS9lZHVjYXRpb24tY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/education-category/education-category.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/education-category/education-category.component.ts ***!
  \********************************************************************/
/*! exports provided: EducationCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationCategoryComponent", function() { return EducationCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EducationCategoryComponent = class EducationCategoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
EducationCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-education-category',
        template: __webpack_require__(/*! raw-loader!./education-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/education-category/education-category.component.html"),
        styles: [__webpack_require__(/*! ./education-category.component.css */ "./src/app/education-category/education-category.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EducationCategoryComponent);



/***/ }),

/***/ "./src/app/environment-category/environment-category.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/environment-category/environment-category.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vudmlyb25tZW50LWNhdGVnb3J5L2Vudmlyb25tZW50LWNhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/environment-category/environment-category.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/environment-category/environment-category.component.ts ***!
  \************************************************************************/
/*! exports provided: EnvironmentCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentCategoryComponent", function() { return EnvironmentCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EnvironmentCategoryComponent = class EnvironmentCategoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
EnvironmentCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-environment-category',
        template: __webpack_require__(/*! raw-loader!./environment-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/environment-category/environment-category.component.html"),
        styles: [__webpack_require__(/*! ./environment-category.component.css */ "./src/app/environment-category/environment-category.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EnvironmentCategoryComponent);



/***/ }),

/***/ "./src/app/equality-category/equality-category.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/equality-category/equality-category.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VxdWFsaXR5LWNhdGVnb3J5L2VxdWFsaXR5LWNhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/equality-category/equality-category.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/equality-category/equality-category.component.ts ***!
  \******************************************************************/
/*! exports provided: EqualityCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqualityCategoryComponent", function() { return EqualityCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EqualityCategoryComponent = class EqualityCategoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
EqualityCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-equality-category',
        template: __webpack_require__(/*! raw-loader!./equality-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/equality-category/equality-category.component.html"),
        styles: [__webpack_require__(/*! ./equality-category.component.css */ "./src/app/equality-category/equality-category.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EqualityCategoryComponent);



/***/ }),

/***/ "./src/app/faq/faq.component.css":
/*!***************************************!*\
  !*** ./src/app/faq/faq.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-hand-holding-heart {\r\n  color: #de795b;\r\n}\r\n\r\np {\r\n  color: #de795b;\r\n  font-weight: bold;\r\n}\r\n\r\na {\r\n  color: #17a2b8;\r\n  font-weight: bold;\r\n}\r\n\r\nh3 {\r\n  color: #de795b;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFxL2ZhcS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2ZhcS9mYXEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS1oYW5kLWhvbGRpbmctaGVhcnQge1xyXG4gIGNvbG9yOiAjZGU3OTViO1xyXG59XHJcblxyXG5wIHtcclxuICBjb2xvcjogI2RlNzk1YjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICMxN2EyYjg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmgzIHtcclxuICBjb2xvcjogI2RlNzk1YjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FaqComponent = class FaqComponent {
    constructor() { }
    ngOnInit() {
    }
};
FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faq',
        template: __webpack_require__(/*! raw-loader!./faq.component.html */ "./node_modules/raw-loader/index.js!./src/app/faq/faq.component.html"),
        styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/faq/faq.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FaqComponent);



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  border: none;\r\n  -webkit-column-break-inside: avoid;\r\n     -moz-column-break-inside: avoid;\r\n          break-inside: avoid;\r\n  page-break-inside: avoid;\r\n  padding: 0;\r\n  margin: 1px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0NBQW1CO0tBQW5CLCtCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLFVBQVU7RUFDVixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYnJlYWstaW5zaWRlOiBhdm9pZDtcclxuICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDFweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GalleryComponent = class GalleryComponent {
    constructor() { }
    ngOnInit() {
    }
};
GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gallery',
        template: __webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/index.js!./src/app/gallery/gallery.component.html"),
        styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GalleryComponent);



/***/ }),

/***/ "./src/app/healthcare-category/healthcare-category.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/healthcare-category/healthcare-category.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWx0aGNhcmUtY2F0ZWdvcnkvaGVhbHRoY2FyZS1jYXRlZ29yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/healthcare-category/healthcare-category.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/healthcare-category/healthcare-category.component.ts ***!
  \**********************************************************************/
/*! exports provided: HealthcareCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthcareCategoryComponent", function() { return HealthcareCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HealthcareCategoryComponent = class HealthcareCategoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
HealthcareCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-healthcare-category',
        template: __webpack_require__(/*! raw-loader!./healthcare-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/healthcare-category/healthcare-category.component.html"),
        styles: [__webpack_require__(/*! ./healthcare-category.component.css */ "./src/app/healthcare-category/healthcare-category.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HealthcareCategoryComponent);



/***/ }),

/***/ "./src/app/housing-category/housing-category.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/housing-category/housing-category.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdXNpbmctY2F0ZWdvcnkvaG91c2luZy1jYXRlZ29yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/housing-category/housing-category.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/housing-category/housing-category.component.ts ***!
  \****************************************************************/
/*! exports provided: HousingCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousingCategoryComponent", function() { return HousingCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HousingCategoryComponent = class HousingCategoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
HousingCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-housing-category',
        template: __webpack_require__(/*! raw-loader!./housing-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/housing-category/housing-category.component.html"),
        styles: [__webpack_require__(/*! ./housing-category.component.css */ "./src/app/housing-category/housing-category.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HousingCategoryComponent);



/***/ }),

/***/ "./src/app/join-event/join-event.component.css":
/*!*****************************************************!*\
  !*** ./src/app/join-event/join-event.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin-top: 2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9pbi1ldmVudC9qb2luLWV2ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvam9pbi1ldmVudC9qb2luLWV2ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/join-event/join-event.component.ts":
/*!****************************************************!*\
  !*** ./src/app/join-event/join-event.component.ts ***!
  \****************************************************/
/*! exports provided: JoinEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinEventComponent", function() { return JoinEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _join_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./join-event.service */ "./src/app/join-event/join-event.service.ts");



let JoinEventComponent = class JoinEventComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getDetails().subscribe(response => {
            this.details = response;
        });
    }
};
JoinEventComponent.ctorParameters = () => [
    { type: _join_event_service__WEBPACK_IMPORTED_MODULE_2__["JoinEventService"] }
];
JoinEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "join-event",
        template: __webpack_require__(/*! raw-loader!./join-event.component.html */ "./node_modules/raw-loader/index.js!./src/app/join-event/join-event.component.html"),
        styles: [__webpack_require__(/*! ./join-event.component.css */ "./src/app/join-event/join-event.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_join_event_service__WEBPACK_IMPORTED_MODULE_2__["JoinEventService"]])
], JoinEventComponent);



/***/ }),

/***/ "./src/app/join-event/join-event.service.ts":
/*!**************************************************!*\
  !*** ./src/app/join-event/join-event.service.ts ***!
  \**************************************************/
/*! exports provided: JoinEventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinEventService", function() { return JoinEventService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");

class JoinEventService {
    constructor(http) {
        this.http = http;
        this.url = "http://jsonplaceholder.typicode.com/posts";
    }
    getDetails() {
        return this.http.get(this.url);
    }
}
JoinEventService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
];


/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        // this.Url = "http://localhost:14812/api/Login/"; // Test environment on local machine... Replace with AWS info
        this.Url = "http://jsonplaceholder.typicode.com/posts";
        const headerSettings = {};
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerSettings);
    }
    Login(model) {
        var a = this.Url + "UserLogin";
        return this.http.post(this.Url + "UserLogin", model, {
            headers: this.header
        });
    }
    CreateUser(register) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json" })
        };
        return this.http.post(this.Url + "/createcontact/", register, httpOptions);
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LoginService);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");





let LoginComponent = class LoginComponent {
    constructor(router, LoginService, cookie) {
        this.router = router;
        this.LoginService = LoginService;
        this.cookie = cookie;
        this.model = {};
    }
    ngOnInit() {
        sessionStorage.removeItem("UserName");
        sessionStorage.clear();
    }
    login() {
        // Once response returned from backend, save that info in a cookie:
        this.cookie.set("userId", "1");
        this.cookie.set("userType", "Org");
        this.LoginService.Login(this.model).subscribe(response => {
            this.model = response.filter(u => u.userType === "Org"); //  instead of userId of 2, pass in dynamic variable which will be userId of logged in user.  
        });
        // routeUser(userType) {
        //   this.userType = "Org" ? this.router.navigate(["organization-dashboard"]) : this.router.navigate(["volunteer-dashboard"]);
        // }
        // this.LoginService.Login(this.model).subscribe(
        //   data => {
        //     if (this.cookie.get("userType") === "Organization") {
        //       this.router.navigate(["/organization-dashboard"]);
        //     } else {
        //       if (this.cookie.get("userType") === "Volunteer")
        //         this.router.navigate(["/organization-dashboard"]);
        //     }
        //     return
        //     this.errorMessage = data.Message;
        //   },
        //   error => {
        //     this.errorMessage = error.message;
        //   }
        // );
        // this.LoginService.Login(this.model).subscribe(
        //   data => {
        //     if (data.Status == "Success") {
        //       this.router.navigate(["profile"]);
        //     } else {
        //       this.errorMessage = data.Message;
        //     }
        //   },
        //   error => {
        //     this.errorMessage = error.message;
        //   }
        // );
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");




let NavbarComponent = class NavbarComponent {
    constructor(router, modalService) {
        this.router = router;
        this.modalService = modalService;
        this.appTitle = "myapp";
    }
    ngOnInit() { }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-navbar",
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/nonprofit/nonprofit.component.css":
/*!***************************************************!*\
  !*** ./src/app/nonprofit/nonprofit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vbnByb2ZpdC9ub25wcm9maXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/nonprofit/nonprofit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/nonprofit/nonprofit.component.ts ***!
  \**************************************************/
/*! exports provided: NonprofitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonprofitComponent", function() { return NonprofitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NonprofitComponent = class NonprofitComponent {
    constructor() { }
    ngOnInit() {
    }
};
NonprofitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nonprofit',
        template: __webpack_require__(/*! raw-loader!./nonprofit.component.html */ "./node_modules/raw-loader/index.js!./src/app/nonprofit/nonprofit.component.html"),
        styles: [__webpack_require__(/*! ./nonprofit.component.css */ "./src/app/nonprofit/nonprofit.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NonprofitComponent);



/***/ }),

/***/ "./src/app/organization-dashboard/organization-dashboard.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/organization-dashboard/organization-dashboard.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttones button {\r\n    margin-top: 4em;\r\n    margin-right: 2em;\r\n    margin-bottom: 2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JnYW5pemF0aW9uLWRhc2hib2FyZC9vcmdhbml6YXRpb24tZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL29yZ2FuaXphdGlvbi1kYXNoYm9hcmQvb3JnYW5pemF0aW9uLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbmVzIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA0ZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/organization-dashboard/organization-dashboard.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/organization-dashboard/organization-dashboard.component.ts ***!
  \****************************************************************************/
/*! exports provided: OrganizationDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationDashboardComponent", function() { return OrganizationDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _join_event_join_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../join-event/join-event.service */ "./src/app/join-event/join-event.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let OrganizationDashboardComponent = class OrganizationDashboardComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getDetails().subscribe(response => {
            this.details = response.filter(p => p.userId === 3); //  instead of userId of 2, pass in dynamic variable which will be userId of logged in user.  
        });
    }
    updateFilter(id) {
        this.filteredResults = id ? this.details.filter(p => p.userId === id) : this.details;
    }
};
OrganizationDashboardComponent.ctorParameters = () => [
    { type: _join_event_join_event_service__WEBPACK_IMPORTED_MODULE_1__["JoinEventService"] }
];
OrganizationDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'organization-dashboard',
        template: __webpack_require__(/*! raw-loader!./organization-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/organization-dashboard/organization-dashboard.component.html"),
        styles: [__webpack_require__(/*! ./organization-dashboard.component.css */ "./src/app/organization-dashboard/organization-dashboard.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_join_event_join_event_service__WEBPACK_IMPORTED_MODULE_1__["JoinEventService"]])
], OrganizationDashboardComponent);



/***/ }),

/***/ "./src/app/page/page.component.css":
/*!*****************************************!*\
  !*** ./src/app/page/page.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/page/page.component.ts":
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageComponent = class PageComponent {
    constructor() { }
    ngOnInit() { }
};
PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "page",
        template: __webpack_require__(/*! raw-loader!./page.component.html */ "./node_modules/raw-loader/index.js!./src/app/page/page.component.html"),
        styles: [__webpack_require__(/*! ./page.component.css */ "./src/app/page/page.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n  background-color: #de795b;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZTc5NWI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProfileComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-hand-holding-heart {\r\n  color: #de795b;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLWhhbmQtaG9sZGluZy1oZWFydCB7XHJcbiAgY29sb3I6ICNkZTc5NWI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let RegisterComponent = class RegisterComponent {
    constructor(formbulider, loginService) {
        this.formbulider = formbulider;
        this.loginService = loginService;
        this.data = false;
    }
    ngOnInit() {
        this.UserForm = this.formbulider.group({
            UserName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            FirstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            LastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            Email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            Password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            UserAboutMe: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    }
    onFormSubmit() {
        const user = this.UserForm.value;
        this.CreateNewUser(user);
    }
    CreateNewUser(register) {
        this.loginService.CreateUser(register).subscribe(() => {
            this.data = true;
            this.massage = "Data saved Successfully";
            this.UserForm.reset();
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-register",
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let SignInComponent = class SignInComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    open(content) {
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title" })
            .result.then(result => {
            this.closeResult = `Closed with: ${result}`;
        });
    }
};
SignInComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sign-in",
        template: __webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/sign-in/sign-in.component.html"),
        styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
], SignInComponent);



/***/ }),

/***/ "./src/app/splash/splash.component.css":
/*!*********************************************!*\
  !*** ./src/app/splash/splash.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#faq-icon {\r\n  color: #de795b;\r\n}\r\n\r\n#gallery-icon {\r\n  color: #de795b;\r\n}\r\n\r\n#donate-icon {\r\n  color: #de795b;\r\n}\r\n\r\n#volunteer-by-buttons {\r\n  width: 12em;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.jumbotron {\r\n  background-color: #de795b;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BsYXNoL3NwbGFzaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3NwbGFzaC9zcGxhc2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmYXEtaWNvbiB7XHJcbiAgY29sb3I6ICNkZTc5NWI7XHJcbn1cclxuXHJcbiNnYWxsZXJ5LWljb24ge1xyXG4gIGNvbG9yOiAjZGU3OTViO1xyXG59XHJcblxyXG4jZG9uYXRlLWljb24ge1xyXG4gIGNvbG9yOiAjZGU3OTViO1xyXG59XHJcblxyXG4jdm9sdW50ZWVyLWJ5LWJ1dHRvbnMge1xyXG4gIHdpZHRoOiAxMmVtO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZTc5NWI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/splash/splash.component.ts":
/*!********************************************!*\
  !*** ./src/app/splash/splash.component.ts ***!
  \********************************************/
/*! exports provided: SplashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashComponent", function() { return SplashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");




let SplashComponent = class SplashComponent {
    constructor(router, modalService) {
        this.router = router;
        this.modalService = modalService;
    }
    ngOnInit() { }
};
SplashComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
SplashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-splash",
        template: __webpack_require__(/*! raw-loader!./splash.component.html */ "./node_modules/raw-loader/index.js!./src/app/splash/splash.component.html"),
        styles: [__webpack_require__(/*! ./splash.component.css */ "./src/app/splash/splash.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
], SplashComponent);



/***/ }),

/***/ "./src/app/technology-category/technology-category.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/technology-category/technology-category.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlY2hub2xvZ3ktY2F0ZWdvcnkvdGVjaG5vbG9neS1jYXRlZ29yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/technology-category/technology-category.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/technology-category/technology-category.component.ts ***!
  \**********************************************************************/
/*! exports provided: TechnologyCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyCategoryComponent", function() { return TechnologyCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TechnologyCategoryComponent = class TechnologyCategoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
TechnologyCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-technology-category',
        template: __webpack_require__(/*! raw-loader!./technology-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/technology-category/technology-category.component.html"),
        styles: [__webpack_require__(/*! ./technology-category.component.css */ "./src/app/technology-category/technology-category.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TechnologyCategoryComponent);



/***/ }),

/***/ "./src/app/transportation-category/transportation-category.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/transportation-category/transportation-category.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  border: none;\r\n  -webkit-column-break-inside: avoid;\r\n     -moz-column-break-inside: avoid;\r\n          break-inside: avoid;\r\n  page-break-inside: avoid;\r\n  padding: 0;\r\n  margin: 1px;\r\n}\r\n\r\n#category-icons {\r\n  color: #de795b;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNwb3J0YXRpb24tY2F0ZWdvcnkvdHJhbnNwb3J0YXRpb24tY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixrQ0FBbUI7S0FBbkIsK0JBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC90cmFuc3BvcnRhdGlvbi1jYXRlZ29yeS90cmFuc3BvcnRhdGlvbi1jYXRlZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBicmVhay1pbnNpZGU6IGF2b2lkO1xyXG4gIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMXB4O1xyXG59XHJcblxyXG4jY2F0ZWdvcnktaWNvbnMge1xyXG4gIGNvbG9yOiAjZGU3OTViO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/transportation-category/transportation-category.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/transportation-category/transportation-category.component.ts ***!
  \******************************************************************************/
/*! exports provided: TransportationCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportationCategoryComponent", function() { return TransportationCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let TransportationCategoryComponent = class TransportationCategoryComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    open(content) {
        this.modalService
            .open(content, { ariaLabelledBy: "modal-basic-title" })
            .result.then(result => {
            this.closeResult = `Closed with: ${result}`;
        });
    }
};
TransportationCategoryComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
TransportationCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-transportation-category",
        template: __webpack_require__(/*! raw-loader!./transportation-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/transportation-category/transportation-category.component.html"),
        styles: [__webpack_require__(/*! ./transportation-category.component.css */ "./src/app/transportation-category/transportation-category.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
], TransportationCategoryComponent);



/***/ }),

/***/ "./src/app/volunteer-dashboard/volunteer-dashboard.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/volunteer-dashboard/volunteer-dashboard.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZvbHVudGVlci1kYXNoYm9hcmQvdm9sdW50ZWVyLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/volunteer-dashboard/volunteer-dashboard.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/volunteer-dashboard/volunteer-dashboard.component.ts ***!
  \**********************************************************************/
/*! exports provided: VolunteerDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteerDashboardComponent", function() { return VolunteerDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _join_event_join_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../join-event/join-event.service */ "./src/app/join-event/join-event.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let VolunteerDashboardComponent = class VolunteerDashboardComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getDetails().subscribe(response => {
            this.details = response.filter(p => p.userId === 2); //  instead of userId of 2, pass in dynamic variable which will be userId of logged in user.  
        });
    }
    updateFilter(id) {
        this.filteredResults = id ? this.details.filter(p => p.userId === id) : this.details;
    }
};
VolunteerDashboardComponent.ctorParameters = () => [
    { type: _join_event_join_event_service__WEBPACK_IMPORTED_MODULE_1__["JoinEventService"] }
];
VolunteerDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'volunteer-dashboard',
        template: __webpack_require__(/*! raw-loader!./volunteer-dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/volunteer-dashboard/volunteer-dashboard.component.html"),
        styles: [__webpack_require__(/*! ./volunteer-dashboard.component.css */ "./src/app/volunteer-dashboard/volunteer-dashboard.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_join_event_join_event_service__WEBPACK_IMPORTED_MODULE_1__["JoinEventService"]])
], VolunteerDashboardComponent);



/***/ }),

/***/ "./src/app/watermelon-mountain-ranch/watermelon-mountain-ranch.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/watermelon-mountain-ranch/watermelon-mountain-ranch.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-caption {\r\n  position: relative;\r\n  text-align: center;\r\n  text-shadow: 0 0 15px rgba(255, 255, 255, 0.5),\r\n    0 0 10px rgba(255, 255, 255, 0.5), 2px 2px 16px rgba(0, 0, 0, 0);\r\n}\r\n\r\n.jumbotron {\r\n  background-color: #de795b;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2F0ZXJtZWxvbi1tb3VudGFpbi1yYW5jaC93YXRlcm1lbG9uLW1vdW50YWluLXJhbmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCO29FQUNrRTtBQUNwRTs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3dhdGVybWVsb24tbW91bnRhaW4tcmFuY2gvd2F0ZXJtZWxvbi1tb3VudGFpbi1yYW5jaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgIDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgMnB4IDJweCAxNnB4IHJnYmEoMCwgMCwgMCwgMCk7XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZTc5NWI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/watermelon-mountain-ranch/watermelon-mountain-ranch.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/watermelon-mountain-ranch/watermelon-mountain-ranch.component.ts ***!
  \**********************************************************************************/
/*! exports provided: WatermelonMountainRanchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatermelonMountainRanchComponent", function() { return WatermelonMountainRanchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WatermelonMountainRanchComponent = class WatermelonMountainRanchComponent {
    constructor() { }
    ngOnInit() {
    }
};
WatermelonMountainRanchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-watermelon-mountain-ranch',
        template: __webpack_require__(/*! raw-loader!./watermelon-mountain-ranch.component.html */ "./node_modules/raw-loader/index.js!./src/app/watermelon-mountain-ranch/watermelon-mountain-ranch.component.html"),
        styles: [__webpack_require__(/*! ./watermelon-mountain-ranch.component.css */ "./src/app/watermelon-mountain-ranch/watermelon-mountain-ranch.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WatermelonMountainRanchComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\myng\vol-army-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map