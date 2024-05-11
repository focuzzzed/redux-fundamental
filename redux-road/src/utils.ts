export function isError(value: unknown): asserts value is Error {
  if(!(value instanceof Error)) {
    throw new Error('value is not a Error instance');
  }
} 