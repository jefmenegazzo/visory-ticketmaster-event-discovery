import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "../environments/environment";

export function requestInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {

	req = req.clone({
		url: `${environment.apiRootUrl}/${req.url}`,
		params: req.params.set("apikey", environment.apiKey)
	});

	return next(req);
}
