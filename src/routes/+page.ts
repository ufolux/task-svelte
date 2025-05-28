/**
 * Page load function that redirects to the projects page.
 * When this route is accessed, it automatically redirects the user
 * to the '/projects' route using a 307 (Temporary Redirect) status code.
 *
 * @returns {never} This function never returns as it always throws a redirect
 * @throws {import('@sveltejs/kit').Redirect} Redirects to '/projects' with a 307 status code
 */
import { redirect } from "@sveltejs/kit";

export function load() {
  throw redirect(307, "/projects");
}
