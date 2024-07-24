import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "../environments/environment";
import { catchError } from "rxjs/internal/operators/catchError";
import { inject } from "@angular/core";
import { MessageService } from "primeng/api";

export function requestInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {

	req = req.clone({
		url: `${environment.apiRootUrl}${req.url}`,
		params: req.params.set("apikey", environment.apiKey)
	});

	const messageService = inject(MessageService);

	return next(req).pipe(
		catchError((httpError: HttpErrorResponse) => {

			let message: string;

			if (httpError && [0, 504].includes(httpError.status)) {
				message = "It was not possible to connect to the server. Please check your internet connection.";

			} else if (httpError?.error || httpError?.error?.error) {
				const errorObj = httpError.error.error || httpError.error;
				message = errorObj?.message;

			} else {
				message = "Unidentified network error" || httpError?.message;
			}

			messageService.add({ severity: "error", summary: "Erro", detail: message });
			throw httpError;
		})
	);
}
