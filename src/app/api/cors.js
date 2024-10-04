import Cors from 'cors';
import { NextResponse } from 'next/server';

const cors = Cors({
  methods: ['GET', 'HEAD', 'POST', 'OPTIONS'],
});

export function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export async function applyCors(request, handler) {
  await runMiddleware(request, NextResponse, cors);
  return handler(request);
}