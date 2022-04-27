import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../environments/environment";

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log(request);
    const req: HttpRequest<any> = request.clone({url: 'http://localhost:3000/api/' + request.url});
    return next.handle(req);
  }
}
