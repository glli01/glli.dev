import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * A utility function used to safely await asynchronous functions.
 *
 * @param promise: Promise to await
 * @returns [result] if successful, [undefined, error] if not.
 *
 * @example <caption>This function follows go-like syntax, where it handles any errors that occur and safely surfaces them</caption>
 * const [data, err] = await safely(response.json());
 * if (err) {
 *   console.log(err);
 * }
 * @example <caption>If you use this function, you do NOT have to check for errors</caption>
 * const [data] = await safely(response.json());
 * // discards error
 * // data is now `undefined` or the type returned by `response.json()`
 */
async function safely<T>(
  promise: T extends null | undefined | PromiseLike<unknown> ? T : never,
): Promise<[data: Awaited<T>, error: undefined] | [data: null, error: Error]> {
  try {
    const result = await promise;
    return [result, undefined];
  } catch (error) {
    return [null, error as Error];
  }
}

/**
 * A utility type used to validate whether a value is a certain type
 *
 * Done completely at the type level.
 *
 * @example <caption>If you wanted to test if `deck` conformed to the type `Deck`:</caption>
 * type test = validate<Deck, typeof deck>; // would show error if does not conform
 */
type validate<Type, Value extends Type> = Value extends Type ? true : never;
export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export { safely, cn };
export type { validate };
