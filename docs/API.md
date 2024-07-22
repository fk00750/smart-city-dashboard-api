## Classes

<dl>
<dt><a href="#AuthManager">AuthManager</a></dt>
<dd></dd>
<dt><a href="#NewsManager">NewsManager</a></dt>
<dd></dd>
<dt><a href="#PrimaryErrorHandler">PrimaryErrorHandler</a> ⇐ <code>Error</code></dt>
<dd></dd>
<dt><a href="#PrimaryErrorHandler">PrimaryErrorHandler</a></dt>
<dd></dd>
<dt><a href="#ProfileManager">ProfileManager</a></dt>
<dd></dd>
<dt><a href="#TokenManager">TokenManager</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#passportStrategy - configure jwt authentication using passport">passportStrategy - configure jwt authentication using passport(passport, usageName, KEY)</a></dt>
<dd></dd>
<dt><a href="#passportConfig - jwt strategies for access and refresh tokens with passport.">passportConfig - jwt strategies for access and refresh tokens with passport.(passport)</a></dt>
<dd></dd>
<dt><a href="#validateName">validateName(req, res, next)</a></dt>
<dd><p>Validate the name in the request body.</p>
</dd>
<dt><a href="#validateEmail">validateEmail(req, res, next)</a></dt>
<dd><p>Validate the email in the request body.</p>
</dd>
<dt><a href="#validateTempMail">validateTempMail(req, res, next)</a></dt>
<dd><p>Validate the email domain in the request body against a list of allowed providers.</p>
</dd>
<dt><a href="#createUser">createUser(name, email, password)</a> ⇒ <code>undefined</code> | <code>boolean</code> | <code>Array</code></dt>
<dd><p>Create user with name, email and password</p>
</dd>
<dt><a href="#hashedPassword">hashedPassword(password)</a> ⇒ <code>string</code></dt>
<dd><p>salt and hash the password</p>
</dd>
<dt><a href="#verifyPassword">verifyPassword(enteredPassword, storedPassword)</a> ⇒ <code>boolean</code></dt>
<dd><p>Verify salted and hashed the password</p>
</dd>
<dt><a href="#createUniqueId">createUniqueId(type)</a> ⇒ <code>string</code></dt>
<dd><p>Create unique id for different purpose</p>
</dd>
<dt><a href="#validateUserId">validateUserId(id)</a> ⇒ <code>boolean</code></dt>
<dd><p>validates unique or user id format</p>
</dd>
<dt><a href="#saveNews">saveNews(userId, title, description, urlToImage, url)</a> ⇒ <code>object</code> | <code>null</code> | <code>undefined</code></dt>
<dd><p>Save a news item to the database.</p>
</dd>
<dt><a href="#viewSaveNews">viewSaveNews(userId)</a> ⇒ <code>Array.&lt;object&gt;</code> | <code>null</code> | <code>undefined</code></dt>
<dd><p>Retrieve saved news items for a specific user.</p>
</dd>
<dt><a href="#updateEmail">updateEmail(email, userId)</a> ⇒ <code>Promise.&lt;(Array|null|undefined)&gt;</code></dt>
<dd><p>Update the email address of the user with the given userId.</p>
</dd>
<dt><a href="#updateName">updateName(name, userId)</a> ⇒ <code>Promise.&lt;(Array|null|undefined)&gt;</code></dt>
<dd><p>Update the name of the user with the given userId.</p>
</dd>
<dt><a href="#decodeToken">decodeToken(token)</a> ⇒ <code>object</code> | <code>null</code> | <code>undefined</code></dt>
<dd><p>Decode a JWT token to retrieve its payload.</p>
</dd>
<dt><a href="#storeRefreshToken">storeRefreshToken(refreshToken, userId, expiresAt)</a> ⇒ <code>object</code> | <code>null</code> | <code>undefined</code></dt>
<dd><p>Store a new refresh token in the database.</p>
</dd>
<dt><a href="#findRefreshToken">findRefreshToken(refreshToken)</a> ⇒ <code>object</code> | <code>boolean</code> | <code>undefined</code></dt>
<dd><p>Find an existing refresh token by its value.</p>
</dd>
<dt><a href="#findRefreshTokenById">findRefreshTokenById(userId)</a> ⇒ <code>object</code> | <code>boolean</code> | <code>undefined</code></dt>
<dd><p>Find an existing refresh token by user ID.</p>
</dd>
<dt><a href="#updateRefreshToken">updateRefreshToken(refreshToken, userId)</a> ⇒ <code>number</code> | <code>null</code> | <code>undefined</code></dt>
<dd><p>Update the status of a refresh token.</p>
</dd>
<dt><a href="#deleteExistingRefreshTokens">deleteExistingRefreshTokens(userId)</a> ⇒ <code>number</code> | <code>null</code> | <code>undefined</code></dt>
<dd><p>Delete all existing refresh tokens associated with a user.</p>
</dd>
</dl>

<a name="AuthManager"></a>

## AuthManager
**Kind**: global class  
<a name="new_AuthManager_new"></a>

### new AuthManager()
manages authentication

<a name="NewsManager"></a>

## NewsManager
**Kind**: global class  
<a name="new_NewsManager_new"></a>

### new NewsManager()
Class responsible for managing news data, including saving and viewing saved news.

<a name="PrimaryErrorHandler"></a>

## PrimaryErrorHandler ⇐ <code>Error</code>
**Kind**: global class  
**Extends**: <code>Error</code>  

* [PrimaryErrorHandler](#PrimaryErrorHandler) ⇐ <code>Error</code>
    * [new PrimaryErrorHandler()](#new_PrimaryErrorHandler_new)
    * [new PrimaryErrorHandler(status, message)](#new_PrimaryErrorHandler_new)

<a name="new_PrimaryErrorHandler_new"></a>

### new PrimaryErrorHandler()
Custom error class for handling various types of errors with HTTP status codes.

<a name="new_PrimaryErrorHandler_new"></a>

### new PrimaryErrorHandler(status, message)

| Param | Type | Description |
| --- | --- | --- |
| status | <code>number</code> | The HTTP status code associated with the error. |
| message | <code>string</code> | The error message. |

<a name="PrimaryErrorHandler"></a>

## PrimaryErrorHandler
**Kind**: global class  

* [PrimaryErrorHandler](#PrimaryErrorHandler)
    * [new PrimaryErrorHandler()](#new_PrimaryErrorHandler_new)
    * [new PrimaryErrorHandler(status, message)](#new_PrimaryErrorHandler_new)

<a name="new_PrimaryErrorHandler_new"></a>

### new PrimaryErrorHandler()
Custom error class for handling various types of errors with HTTP status codes.

<a name="new_PrimaryErrorHandler_new"></a>

### new PrimaryErrorHandler(status, message)

| Param | Type | Description |
| --- | --- | --- |
| status | <code>number</code> | The HTTP status code associated with the error. |
| message | <code>string</code> | The error message. |

<a name="ProfileManager"></a>

## ProfileManager
**Kind**: global class  
<a name="new_ProfileManager_new"></a>

### new ProfileManager()
Class responsible for managing user profile updates such as email, phone, name, and password.

<a name="TokenManager"></a>

## TokenManager
**Kind**: global class  
<a name="new_TokenManager_new"></a>

### new TokenManager()
Class responsible for managing JWT tokens such as refresh tokens.

<a name="passportStrategy - configure jwt authentication using passport"></a>

## passportStrategy - configure jwt authentication using passport(passport, usageName, KEY)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| passport | <code>Object</code> | passport instance |
| usageName | <code>string</code> | name of the strategy (ex: jwt-access) |
| KEY | <code>string</code> | public key to verify jwt |

<a name="passportConfig - jwt strategies for access and refresh tokens with passport."></a>

## passportConfig - jwt strategies for access and refresh tokens with passport.(passport)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| passport | <code>Object</code> | passport instance |

<a name="validateName"></a>

## validateName(req, res, next)
Validate the name in the request body.

**Kind**: global function  
**Throws**:

- [<code>PrimaryErrorHandler</code>](#PrimaryErrorHandler) If the name is invalid.


| Param | Type | Description |
| --- | --- | --- |
| req | <code>Request</code> | The request object. |
| res | <code>Response</code> | The response object. |
| next | <code>function</code> | The next middleware function. |

<a name="validateEmail"></a>

## validateEmail(req, res, next)
Validate the email in the request body.

**Kind**: global function  
**Throws**:

- [<code>PrimaryErrorHandler</code>](#PrimaryErrorHandler) If the email is invalid.


| Param | Type | Description |
| --- | --- | --- |
| req | <code>Request</code> | The request object. |
| res | <code>Response</code> | The response object. |
| next | <code>function</code> | The next middleware function. |

<a name="validateTempMail"></a>

## validateTempMail(req, res, next)
Validate the email domain in the request body against a list of allowed providers.

**Kind**: global function  
**Throws**:

- [<code>PrimaryErrorHandler</code>](#PrimaryErrorHandler) If the email domain is invalid.


| Param | Type | Description |
| --- | --- | --- |
| req | <code>Request</code> | The request object. |
| res | <code>Response</code> | The response object. |
| next | <code>function</code> | The next middleware function. |

<a name="createUser"></a>

## createUser(name, email, password) ⇒ <code>undefined</code> \| <code>boolean</code> \| <code>Array</code>
Create user with name, email and password

**Kind**: global function  
**Returns**: <code>undefined</code> \| <code>boolean</code> \| <code>Array</code> - - undefined if name,phone and password not provided, and if user created, returns user object  
**Throws**:

- <code>Error</code> trows error in case of any failure


| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| email | <code>string</code> | 
| password | <code>string</code> | 

<a name="hashedPassword"></a>

## hashedPassword(password) ⇒ <code>string</code>
salt and hash the password

**Kind**: global function  
**Returns**: <code>string</code> - salted and hashed password  
**Throws**:

- <code>Error</code> trows error in case of any failure


| Param | Type |
| --- | --- |
| password | <code>string</code> | 

<a name="verifyPassword"></a>

## verifyPassword(enteredPassword, storedPassword) ⇒ <code>boolean</code>
Verify salted and hashed the password

**Kind**: global function  
**Returns**: <code>boolean</code> - True if password is correct  
**Throws**:

- <code>Error</code> trows error in case of any failure


| Param | Type | Description |
| --- | --- | --- |
| enteredPassword | <code>string</code> | entered password |
| storedPassword | <code>string</code> | stored password |

<a name="createUniqueId"></a>

## createUniqueId(type) ⇒ <code>string</code>
Create unique id for different purpose

**Kind**: global function  
**Returns**: <code>string</code> - unique id  
**Throws**:

- <code>Error</code> trows error in case of any failure


| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | unique id type |

<a name="validateUserId"></a>

## validateUserId(id) ⇒ <code>boolean</code>
validates unique or user id format

**Kind**: global function  
**Returns**: <code>boolean</code> - True if id format is correct  
**Throws**:

- <code>Error</code> trows error in case of any failure


| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | unique id |

<a name="saveNews"></a>

## saveNews(userId, title, description, urlToImage, url) ⇒ <code>object</code> \| <code>null</code> \| <code>undefined</code>
Save a news item to the database.

**Kind**: global function  
**Returns**: <code>object</code> \| <code>null</code> \| <code>undefined</code> - Returns the saved news object, null if saving fails, or undefined if parameters are invalid.  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>string</code> | The ID of the user saving the news. |
| title | <code>string</code> | The title of the news item. |
| description | <code>string</code> | The description of the news item. |
| urlToImage | <code>string</code> | The URL of the image associated with the news item. |
| url | <code>string</code> | The URL of the news item. |

<a name="viewSaveNews"></a>

## viewSaveNews(userId) ⇒ <code>Array.&lt;object&gt;</code> \| <code>null</code> \| <code>undefined</code>
Retrieve saved news items for a specific user.

**Kind**: global function  
**Returns**: <code>Array.&lt;object&gt;</code> \| <code>null</code> \| <code>undefined</code> - Returns an array of saved news items, null if no news items found, or undefined if no user ID provided.  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>string</code> | The ID of the user whose saved news items are to be retrieved. |

<a name="updateEmail"></a>

## updateEmail(email, userId) ⇒ <code>Promise.&lt;(Array\|null\|undefined)&gt;</code>
Update the email address of the user with the given userId.

**Kind**: global function  
**Returns**: <code>Promise.&lt;(Array\|null\|undefined)&gt;</code> - Returns the result Array || null if update fails, || undefined if parameters are invalid.  
**Throws**:

- <code>Error</code> In case of any error during email update process.


| Param | Type | Description |
| --- | --- | --- |
| email | <code>string</code> | The new email address. |
| userId | <code>string</code> | The ID of the user whose email is to be updated. |

<a name="updateName"></a>

## updateName(name, userId) ⇒ <code>Promise.&lt;(Array\|null\|undefined)&gt;</code>
Update the name of the user with the given userId.

**Kind**: global function  
**Returns**: <code>Promise.&lt;(Array\|null\|undefined)&gt;</code> - Returns the result Array || null if update fails, || undefined if parameters are invalid.  
**Throws**:

- <code>Error</code> In case of any error during name update process.


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The new name. |
| userId | <code>string</code> | The ID of the user whose name is to be updated. |

<a name="decodeToken"></a>

## decodeToken(token) ⇒ <code>object</code> \| <code>null</code> \| <code>undefined</code>
Decode a JWT token to retrieve its payload.

**Kind**: global function  
**Returns**: <code>object</code> \| <code>null</code> \| <code>undefined</code> - Returns the decoded token payload, null if decoding fails, or undefined if no token provided.  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | The JWT token to decode. |

<a name="storeRefreshToken"></a>

## storeRefreshToken(refreshToken, userId, expiresAt) ⇒ <code>object</code> \| <code>null</code> \| <code>undefined</code>
Store a new refresh token in the database.

**Kind**: global function  
**Returns**: <code>object</code> \| <code>null</code> \| <code>undefined</code> - Returns the stored refresh token object, null if storage fails, or undefined if parameters are invalid.  

| Param | Type | Description |
| --- | --- | --- |
| refreshToken | <code>string</code> | The refresh token value. |
| userId | <code>string</code> | The ID of the user associated with the refresh token. |
| expiresAt | <code>Date</code> | The expiration date of the token. |

<a name="findRefreshToken"></a>

## findRefreshToken(refreshToken) ⇒ <code>object</code> \| <code>boolean</code> \| <code>undefined</code>
Find an existing refresh token by its value.

**Kind**: global function  
**Returns**: <code>object</code> \| <code>boolean</code> \| <code>undefined</code> - Returns the existing refresh token object, false if not found, or undefined if no token provided.  

| Param | Type | Description |
| --- | --- | --- |
| refreshToken | <code>string</code> | The refresh token value. |

<a name="findRefreshTokenById"></a>

## findRefreshTokenById(userId) ⇒ <code>object</code> \| <code>boolean</code> \| <code>undefined</code>
Find an existing refresh token by user ID.

**Kind**: global function  
**Returns**: <code>object</code> \| <code>boolean</code> \| <code>undefined</code> - Returns the existing refresh token object, false if not found, or undefined if no user ID provided.  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>string</code> | The ID of the user associated with the refresh token. |

<a name="updateRefreshToken"></a>

## updateRefreshToken(refreshToken, userId) ⇒ <code>number</code> \| <code>null</code> \| <code>undefined</code>
Update the status of a refresh token.

**Kind**: global function  
**Returns**: <code>number</code> \| <code>null</code> \| <code>undefined</code> - Returns the number of affected rows, null if update fails, or undefined if parameters are invalid.  

| Param | Type | Description |
| --- | --- | --- |
| refreshToken | <code>string</code> | The refresh token value. |
| userId | <code>string</code> | The ID of the user associated with the refresh token. |

<a name="deleteExistingRefreshTokens"></a>

## deleteExistingRefreshTokens(userId) ⇒ <code>number</code> \| <code>null</code> \| <code>undefined</code>
Delete all existing refresh tokens associated with a user.

**Kind**: global function  
**Returns**: <code>number</code> \| <code>null</code> \| <code>undefined</code> - Returns the number of deleted tokens, null if deletion fails, or undefined if no user ID provided.  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>string</code> | The ID of the user whose refresh tokens are to be deleted. |

<a name="alreadyExist"></a>

## .alreadyExist(message) ⇒ [<code>PrimaryErrorHandler</code>](#PrimaryErrorHandler)
Creates an error indicating that a resource already exists.

**Kind**: static function  
**Returns**: [<code>PrimaryErrorHandler</code>](#PrimaryErrorHandler) - A PrimaryErrorHandler instance with status code 409.  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | The error message. |

<a name="wrongCredentials"></a>

## .wrongCredentials([message]) ⇒ [<code>PrimaryErrorHandler</code>](#PrimaryErrorHandler)
Creates an error indicating incorrect credentials.

**Kind**: static function  
**Returns**: [<code>PrimaryErrorHandler</code>](#PrimaryErrorHandler) - A PrimaryErrorHandler instance with status code 401.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [message] | <code>string</code> | <code>&quot;\&quot;username and password are wrong\&quot;&quot;</code> | The error message. |

<a name="notFound"></a>

## .notFound([message]) ⇒ [<code>PrimaryErrorHandler</code>](#PrimaryErrorHandler)
Creates an error indicating that the resource was not found.

**Kind**: static function  
**Returns**: [<code>PrimaryErrorHandler</code>](#PrimaryErrorHandler) - A PrimaryErrorHandler instance with status code 404.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [message] | <code>string</code> | <code>&quot;\&quot;404 User Not Found\&quot;&quot;</code> | The error message. |

<a name="unAuthorized"></a>

## .unAuthorized([message]) ⇒ [<code>PrimaryErrorHandler</code>](#PrimaryErrorHandler)
Creates an error indicating unauthorized access.

**Kind**: static function  
**Returns**: [<code>PrimaryErrorHandler</code>](#PrimaryErrorHandler) - A PrimaryErrorHandler instance with status code 401.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [message] | <code>string</code> | <code>&quot;\&quot;unAuthorized\&quot;&quot;</code> | The error message. |

<a name="somethingWentWrong"></a>

## .somethingWentWrong([message]) ⇒ [<code>PrimaryErrorHandler</code>](#PrimaryErrorHandler)
Creates an error indicating a generic failure.

**Kind**: static function  
**Returns**: [<code>PrimaryErrorHandler</code>](#PrimaryErrorHandler) - A PrimaryErrorHandler instance with status code 400.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [message] | <code>string</code> | <code>&quot;\&quot;Something Went Wrong\&quot;&quot;</code> | The error message. |

<a name="serverError"></a>

## .serverError([message]) ⇒ [<code>PrimaryErrorHandler</code>](#PrimaryErrorHandler)
Creates an error indicating an internal server error.

**Kind**: static function  
**Returns**: [<code>PrimaryErrorHandler</code>](#PrimaryErrorHandler) - A PrimaryErrorHandler instance with status code 505.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [message] | <code>string</code> | <code>&quot;\&quot;Internal Server Error\&quot;&quot;</code> | The error message. |

