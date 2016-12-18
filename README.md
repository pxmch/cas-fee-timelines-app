# Timelines App
HSR CAS Front End Engineering 2016<br>
Project assignment 2<br>
"Team" 9, Patrick Bonetti

_TIMELINES_ is a simple single page application (SPA) for the creation and presentation of basic timelines.
The application has been developed as an exercise to learn how to program a SPA with Angular 2 and Firebase
and is currently in a very early stage; it's not meant to be used in production.

There's a demo of this application hosted at https://timelines-9771d.firebaseapp.com

##Instructions

### Installation
1. Clone the project via git: `git clone https://github.com/pxmch/cas-fee-timelines-app.git`
2. Run an npm install in the cloned project folder: `npm install`
3. Start the development server: `ng serve`
4. Navigate to `http://localhost:4200/` in a web browser

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Deployment to production (Firebase)
Prerequisites: The firebase cli must be installed and you must be logged in to firebase.

1. Run `ng build --prod`
2. When successfully built, run `firebase deploy` to deploy the app to firebase.

Firebase cli will show the production url in its output.


## Credits
This project was generated with [angular-cli](https://github.com/angular/angular-cli).

It uses
- [Angular 2](https://angular.io)
- [Firebase](https://www.firebase.com)
- [angular-cli](https://cli.angular.io)
- [angularfire 2](https://github.com/angular/angularfire2)
- [Material Design Light](https://getmdl.io)
- [angular2-linky](https://github.com/dzonatan/angular2-linky)
- and various other npm packages.

The image on the start page of the app was made by Federico Beccari and is available on [unsplash.com](https://unsplash.com/photos/ahi73ZN5P0Y).
The webfont used in this app is Open Sans (included via [Google Fonts](https://fonts.google.com/specimen/Open+Sans)).


