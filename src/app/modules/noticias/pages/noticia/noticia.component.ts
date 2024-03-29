import {Component, Inject, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DOCUMENT} from '@angular/common';
import {blogCollectionName} from '../../../../secrets';
import {NewsItem} from '../../../../shared/models/news-item/news-item';
import {BlogService} from '../../../../core/services/blog/blog.service';
import {ActivatedRoute} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {map, Observable, switchMap, tap} from 'rxjs';

@Component({
    selector: 'app-noticia',
    templateUrl: './noticia.component.html',
    styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
    newsData$: Observable<NewsItem>;
    isVisible = false;
    emojisVisible: boolean = !this.isVisible;
    cookieValue: string;
    cookieName: string;
    emojisList: string[] = ['thumbsdown', 'confused', 'grin', 'joy', 'heart_eyes'];
    recommendedNews$: Observable<NewsItem[]>;

    constructor(private route: ActivatedRoute,
              @Inject(DOCUMENT) private document: any, public translate: TranslateService,
              private blogService: BlogService, private cookieService: CookieService) {
        translate.addLangs(['es']);
        // esta página esta solo en español
        // translate.setDefaultLang('es');
        // const browserLang = translate.getBrowserLang();
        /*translate.use(browserLang.match(/es|en/)? browserLang:'es');*/
        this.useLanguage('en');

        this.blogService.setCollectionName(blogCollectionName);

        this.blogService.retrieveListedDocsSize();
    }

    useLanguage(language: string) {
        this.translate.use(language);
    }

    ngOnInit(): void {
        this.useLanguage('en');
        this.newsData$ = this.route.paramMap
            .pipe(
                tap(
                    (paramMap) => {
                        this.cookieName = `${paramMap.get('id')}-vote`;
                        this.cookieValue = this.cookieService.get(this.cookieName);
                        if (this.cookieValue !== '') {
                            this.isVisible = true;
                            this.emojisVisible = false;
                        }
                    }
                ),
                map((param) => (param.get('id'))),
                switchMap((id) => this.blogService.getDoc(id))
            );
        this.newsData$.subscribe(news => {
            if (news && news.date) this.recommendedNews$ = this.blogService.getRecommendedNews(news.date);
        })
        
    }

    rateNews(emoji: string, rating: number) {
        this.newsData$.subscribe(news => {
            if (this.cookieValue === '') {
                const expirationDate = new Date();
                expirationDate.setDate( expirationDate.getDate() + 365);
                this.cookieService.set(this.cookieName, emoji, expirationDate);
                this.isVisible = true;
                this.emojisVisible = false;
                this.cookieValue = emoji;
                this.newsData$ = this.blogService.incrementRating(news, rating);
            }
        });
    }

    isSelected(i: number) {
        return this.cookieValue === this.emojisList[i];
    }
}
