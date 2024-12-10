export interface IKruza {
  /**
   * Logs messages to the console with caller information.
   * Accepts multiple arguments, similar to `console.log`.
   * @param messages - The messages to log, which can be of any type.
   */
  log(...messages: any[]): void;
}
