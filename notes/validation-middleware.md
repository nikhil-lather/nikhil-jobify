This pattern is a higher-order middleware function. It creates reusable validation middleware for Express.

Let's strip away the comments first:

const withValidationErrors = (validateValues) => {
return [
validateValues,
(req, res, next) => {
const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        throw new BadRequestError(errorMessages);
      }

      next();
    },

];
};
What is validateValues?

Suppose you write:

const validateJobInput = withValidationErrors([
body("company").notEmpty().withMessage("company is required"),
body("position").notEmpty().withMessage("position is required"),
]);

Then inside the function:

validateValues

becomes

[
body("company").notEmpty().withMessage("company is required"),
body("position").notEmpty().withMessage("position is required"),
]

So the function receives your validation rules.

What does the function return?

It returns an array:

[
validateValues,
(req, res, next) => { ... }
]

Which becomes:

[
[
body("company").notEmpty(),
body("position").notEmpty(),
],

(req, res, next) => {
...
}
]

So Express gets:

Validation rules middleware
Error-checking middleware

executed in order.

Why is validationResult(req) needed?

The validation rules don't throw errors themselves.

They only store validation results inside req.

Example:

body("company").notEmpty()

checks the field and saves the result internally.

Then later:

const errors = validationResult(req);

collects all validation failures from req.

Example

Request body:

{
"company": "",
"position": ""
}

Validation rules fail.

Then:

const errors = validationResult(req);

might contain:

[
{
msg: "company is required"
},
{
msg: "position is required"
}
]
Why errors.array()?

Because validationResult(req) returns a special object, not a normal array.

To get the actual errors:

errors.array()

Result:

[
{
msg: "company is required"
},
{
msg: "position is required"
}
]
Why .map((error) => error.msg)?

You only want the messages.

Before:

[
{ msg: "company is required" },
{ msg: "position is required" }
]

After:

[
"company is required",
"position is required"
]
Why throw BadRequestError?
throw new BadRequestError(errorMessages);

Instead of manually sending:

res.status(400).json(...)

the project uses custom error classes and a global error handler.

So this:

throw new BadRequestError([
"company is required",
"position is required"
]);

gets caught by the error middleware and sent as a 400 response.

Flow of execution
POST /jobs
|
▼
Validation Rules
(body().notEmpty())
|
▼
validationResult(req)
|
▼
Errors found?
/ \
 Yes No
| |
▼ ▼
throw next()
BadRequestError

The most important thing to understand is:

withValidationErrors(...)

does not perform validation itself.

The validation is done by:

body(...)
param(...)
query(...)

middlewares.

withValidationErrors() simply:

Runs those validation middlewares.
Collects their results using validationResult(req).
Throws an error if any validation failed.
Calls next() if everything is valid.
