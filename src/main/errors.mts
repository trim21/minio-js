/*
 * MinIO Javascript Library for Amazon S3 Compatible Cloud Storage, (C) 2015 MinIO, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import ExtendableError from 'es6-error'

// AnonymousRequestError is generated for anonymous keys on specific
// APIs. NOTE: PresignedURL generation always requires access keys.
export class AnonymousRequestError extends ExtendableError {
  constructor(message?: string) {
    super(message)
  }
}

// InvalidArgumentError is generated for all invalid arguments.
export class InvalidArgumentError extends ExtendableError {
  constructor(message?: string) {
    super(message)
  }
}

// InvalidPortError is generated when a non integer value is provided
// for ports.
export class InvalidPortError extends ExtendableError {
  constructor(message?: string) {
    super(message)
  }
}

// InvalidEndpointError is generated when an invalid end point value is
// provided which does not follow domain standards.
export class InvalidEndpointError extends ExtendableError {
  constructor(message?: string) {
    super(message)
  }
}

// InvalidBucketNameError is generated when an invalid bucket name is
// provided which does not follow AWS S3 specifications.
// http://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html
export class InvalidBucketNameError extends ExtendableError {
  constructor(message?: string) {
    super(message)
  }
}

// InvalidObjectNameError is generated when an invalid object name is
// provided which does not follow AWS S3 specifications.
// http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html
export class InvalidObjectNameError extends ExtendableError {
  constructor(message?: string) {
    super(message)
  }
}

// AccessKeyRequiredError generated by signature methods when access
// key is not found.
export class AccessKeyRequiredError extends ExtendableError {
  constructor(message?: string) {
    super(message)
  }
}

// SecretKeyRequiredError generated by signature methods when secret
// key is not found.
export class SecretKeyRequiredError extends ExtendableError {
  constructor(message?: string) {
    super(message)
  }
}

// ExpiresParamError generated when expires parameter value is not
// well within stipulated limits.
export class ExpiresParamError extends ExtendableError {
  constructor(message?: string) {
    super(message)
  }
}

// InvalidDateError generated when invalid date is found.
export class InvalidDateError extends ExtendableError {
  constructor(message?: string) {
    super(message)
  }
}

// InvalidPrefixError generated when object prefix provided is invalid
// or does not conform to AWS S3 object key restrictions.
export class InvalidPrefixError extends ExtendableError {
  constructor(message?: string) {
    super(message)
  }
}

// InvalidBucketPolicyError generated when the given bucket policy is invalid.
export class InvalidBucketPolicyError extends ExtendableError {
  constructor(message?: string) {
    super(message)
  }
}

// IncorrectSizeError generated when total data read mismatches with
// the input size.
export class IncorrectSizeError extends ExtendableError {
  constructor(message?: string) {
    super(message)
  }
}

// InvalidXMLError generated when an unknown XML is found.
export class InvalidXMLError extends ExtendableError {
  constructor(message?: string) {
    super(message)
  }
}

// S3Error is generated for errors returned from S3 server.
// see getErrorTransformer for details
export class S3Error extends ExtendableError {
  constructor(message?: string) {
    super(message)
  }
}

export class IsValidBucketNameError extends ExtendableError {
  constructor(message?: string) {
    super(message)
  }
}
