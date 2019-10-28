/**
 * @fileoverview gRPC-Web generated client stub for vue_ts_practice
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.vue_ts_practice = require('./sample_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.vue_ts_practice.HelloClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.vue_ts_practice.HelloPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.vue_ts_practice.Request,
 *   !proto.vue_ts_practice.Response>}
 */
const methodDescriptor_Hello_OneHello = new grpc.web.MethodDescriptor(
  '/vue_ts_practice.Hello/OneHello',
  grpc.web.MethodType.UNARY,
  proto.vue_ts_practice.Request,
  proto.vue_ts_practice.Response,
  /** @param {!proto.vue_ts_practice.Request} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.vue_ts_practice.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.vue_ts_practice.Request,
 *   !proto.vue_ts_practice.Response>}
 */
const methodInfo_Hello_OneHello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.vue_ts_practice.Response,
  /** @param {!proto.vue_ts_practice.Request} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.vue_ts_practice.Response.deserializeBinary
);


/**
 * @param {!proto.vue_ts_practice.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.vue_ts_practice.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.vue_ts_practice.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.vue_ts_practice.HelloClient.prototype.oneHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/vue_ts_practice.Hello/OneHello',
      request,
      metadata || {},
      methodDescriptor_Hello_OneHello,
      callback);
};


/**
 * @param {!proto.vue_ts_practice.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.vue_ts_practice.Response>}
 *     A native promise that resolves to the response
 */
proto.vue_ts_practice.HelloPromiseClient.prototype.oneHello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/vue_ts_practice.Hello/OneHello',
      request,
      metadata || {},
      methodDescriptor_Hello_OneHello);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.vue_ts_practice.Request,
 *   !proto.vue_ts_practice.Response>}
 */
const methodDescriptor_Hello_ManyHello = new grpc.web.MethodDescriptor(
  '/vue_ts_practice.Hello/ManyHello',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.vue_ts_practice.Request,
  proto.vue_ts_practice.Response,
  /** @param {!proto.vue_ts_practice.Request} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.vue_ts_practice.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.vue_ts_practice.Request,
 *   !proto.vue_ts_practice.Response>}
 */
const methodInfo_Hello_ManyHello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.vue_ts_practice.Response,
  /** @param {!proto.vue_ts_practice.Request} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.vue_ts_practice.Response.deserializeBinary
);


/**
 * @param {!proto.vue_ts_practice.Request} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.vue_ts_practice.Response>}
 *     The XHR Node Readable Stream
 */
proto.vue_ts_practice.HelloClient.prototype.manyHello =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/vue_ts_practice.Hello/ManyHello',
      request,
      metadata || {},
      methodDescriptor_Hello_ManyHello);
};


/**
 * @param {!proto.vue_ts_practice.Request} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.vue_ts_practice.Response>}
 *     The XHR Node Readable Stream
 */
proto.vue_ts_practice.HelloPromiseClient.prototype.manyHello =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/vue_ts_practice.Hello/ManyHello',
      request,
      metadata || {},
      methodDescriptor_Hello_ManyHello);
};


module.exports = proto.vue_ts_practice;

