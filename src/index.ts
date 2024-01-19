/**
 * Example function that returns a greeting for the given name.
 *
 * @param name - The name to greet.
 * @returns The greeting.
 */
export default function greeter(name: string): string {
  return `Hello, ${name}!`;
}

export * from './subscription';
export * from './exchange';
export * from './database';
export * from './api/webhook/moralis';
export * from './api/webhook/onramper';
export * from './api/coinMarketCap';
export * from './api/errors';
