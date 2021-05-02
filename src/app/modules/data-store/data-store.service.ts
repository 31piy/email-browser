import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import Archive from './email.json';
import { Email } from './models/email';

/**
 * Interface for specifying parameters for the getAll method.
 */
export interface GetAllParams {
  /**
   * The token to search the emails with. Emails' subject and body are matched
   * against this token, and only the matching results are returned.
   */
  searchToken?: string;

  /**
   * The page size of the result. This can be used to limit the results to
   * some extent. This is useful in combination with the pageNumber parameter.
   * The default value is 10.
   */
  pageSize?: number;

  /**
   * The page number for the next set of results. This is useful in combination
   * with the pageSize parameter. The default value is 1.
   */
  pageNumber?: number;
}

/**
 * The response interface of the getAll method.
 */
export interface GetAllResponse {
  /**
   * The list of emails matching the specified criteria.
   */
  emails: Email[];

  /**
   * The summary of the response.
   */
  summary: {
    /**
     * The total number of results existing in the system.
     */
    totalResults: number;

    /**
     * The page number for this set of results.
     */
    pageNumber: number;

    /**
     * The number of results this page contains.
     */
    pageSize: number;

    /**
     * The number of total pages.
     */
    totalPages: number;
  };
}

/**
 * A shared service for retrieving archives.
 */
export class DataStoreService {
  /**
   * The collection of emails in the archive (sorted reverse chronologically).
   */
  private readonly emails: Email[] = Archive.sort(
    (a: Email, b: Email) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  /**
   * Returns a list of all the emails matching specified criteria.
   *
   * @param params The parameters for retrieving emails.
   * @returns An observable of the response object.
   */
  getAll(params: GetAllParams): Observable<GetAllResponse> {
    return of(this.emails).pipe(
      map((emails) => {
        let result = emails;

        if (params.searchToken) {
          const normalizedToken = params.searchToken.toLocaleLowerCase();

          result = result.filter(
            (email) =>
              email.subject.toLocaleLowerCase().includes(normalizedToken) ||
              email.body.toLocaleLowerCase().includes(normalizedToken)
          );
        }

        const pageSize = params.pageSize || 10;
        const pageNumber = params.pageNumber || 1;
        const totalPages = Math.ceil(result.length / pageSize);
        const startIndex = pageSize * (pageNumber - 1);

        result = result.slice(startIndex, startIndex + pageSize);

        return {
          emails: result,
          summary: {
            totalResults: this.emails.length,
            pageNumber,
            pageSize,
            totalPages,
          },
        };
      })
    );
  }
}
