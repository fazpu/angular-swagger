/* eslint-disable max-len */
/**
 * Test Swagger
 * v1
 * example.com/api-base-path
 */

export interface TicketDetailOutput {
  status: string;
  /** format: date-time */
  created_date: string;
  created_by_user: boolean;
  issue__origin: string;
}
