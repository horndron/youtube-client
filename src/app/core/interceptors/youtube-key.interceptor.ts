import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export default class YoutubeKeyInterceptor implements HttpInterceptor {
  private keyAPI = 'AIzaSyBrYkhzix-9EXovYyRviW4o36MlE-JZM5c';

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const requestMod = request.clone({
      url: `${request.url}&key=${this.keyAPI}`,
    });
    return next.handle(requestMod);
  }
}
