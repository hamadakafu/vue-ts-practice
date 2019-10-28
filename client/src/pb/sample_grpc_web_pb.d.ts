import * as grpcWeb from 'grpc-web';

import {
  Request,
  Response} from './sample_pb';

export class HelloClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  oneHello(
    request: Request,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Response) => void
  ): grpcWeb.ClientReadableStream<Response>;

  manyHello(
    request: Request,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Response>;

}

export class HelloPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  oneHello(
    request: Request,
    metadata?: grpcWeb.Metadata
  ): Promise<Response>;

  manyHello(
    request: Request,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Response>;

}

