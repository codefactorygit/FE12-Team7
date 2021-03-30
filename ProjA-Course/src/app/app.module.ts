import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './myHeader/header.component';
import { FooterComponent } from './myFooter/footer.component';
import { LandingComponent } from './landing/landing.component';
import { PlansComponent } from './plans/plans.component';
import { HeroComponent } from './hero/hero.component';
import { TestemonialsComponent } from './testemonials/testemonials.component';
import { InformationComponent } from './information/information.component';
import { CourseTopicComponent } from './course-topic/course-topic.component';
import { NewsUpdatesComponent } from './news-updates/news-updates.component';
import { CourseFormatesComponent } from './course-formates/course-formates.component';
import { VideoSectionComponent } from './video-section/video-section.component';
import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    PlansComponent,
    HeroComponent,
    TestemonialsComponent,
    InformationComponent,
    CourseTopicComponent,
    NewsUpdatesComponent,
    CourseFormatesComponent,
    VideoSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
