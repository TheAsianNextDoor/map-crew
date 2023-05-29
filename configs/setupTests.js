/* eslint-disable import/no-extraneous-dependencies */
import 'dotenv/config';
import { TextDecoder, TextEncoder } from 'util';

import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import fetch, { Headers, Request, Response } from 'node-fetch';
import { afterEach } from 'vitest';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

afterEach(() => {
  cleanup();
});
