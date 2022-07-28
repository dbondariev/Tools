import { createLogger } from '../logger.js';

it('should return stored logs', () => {
  const logger = createLogger('logger name');

  expect(logger.getLogs()).toEqual([]);
});

it('should save log message', () => {
  const logger = createLogger('logger name');
  logger.log('login success');

  expect(logger.getLogs()).toEqual(['log - logger name - login success']);
});

it('should save errors', () => {
  const logger = createLogger('logger name');
  logger.error('error text');

  expect(logger.getLogs()).toEqual(['error - logger name - error text']);
});
