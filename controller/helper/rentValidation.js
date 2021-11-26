const { body, param, query, validationResult }=require ('express-validator')
const { Response, Request, NextFunction } =require ('express');
const dotenv =require ('dotenv');
dotenv.config();

const titleMinLength = parseInt(process.env.titleMinLength);
const titleMaxLength = parseInt(process.env.titleMaxLength);

const descripMinLength = parseInt(process.env.descripMinLength);
const descripMaxLength = parseInt(process.env.descripMaxLength);


const dailyMinLength = parseInt(process.env.dailyMinLength);
const dailyMaxLength = parseInt(process.env.dailyMaxLength);

const weeklyMinLength = parseInt(process.env.weeklyMinLength);
const weeklyMaxLength = parseInt(process.env.weeklyMaxLength);

const monthlyMinLength = parseInt(process.env.monthlyMinLength);
const monthlyMaxLength = parseInt(process.env.monthlyMaxLength);


const seatMin = parseInt(process.env.seatMin);
const seatMax = parseInt(process.env.seatMax);


exports.rentPostValidationSchema = () => {
    return [
      body("rentCar_id", "Rent id is required").exists().isString(),
      body("title", `Title must be string and ${titleMinLength} to ${titleMaxLength} characters long!`).isString().isLength({ min: titleMinLength, max: titleMaxLength }),
      body("weeklyPrice", `Weekly price must be between ${weeklyMinLength} to ${weeklyMaxLength}`).notEmpty().isInt({ min: weeklyMinLength , max: weeklyMaxLength }),
      body("monthlyPrice", `Monthly pricemust be between ${monthlyMinLength} to ${monthlyMaxLength}`).notEmpty().isInt({ min: monthlyMinLength , max: monthlyMaxLength }),
      body("dailyPrice", `Daily price must be between ${dailyMinLength} to ${dailyMaxLength}`).notEmpty().isInt({ min: dailyMinLength , max: dailyMaxLength }),
      body("mileage", "Mileage is required").exists().isString(),
      body("gas", "Feul is required").exists().isString(),
      body("description", `Description must be string and ${descripMinLength} to ${descripMaxLength} characters long!`).isString().isLength({ min: descripMinLength, max: descripMaxLength }),
      body("gearType", "Gear type is required").exists().isString(),
      body("content", "Content is required").exists().isString(),
      body("company", "Company name is required").exists().isString(),
      body("seats", `Seats are required and must be between ${seatMin} to ${seatMax}`).notEmpty().isInt({ min: seatMin , max: seatMax }),

    ]
  }

  exports.validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
    return res.status(422).json({
      errors: extractedErrors,
    })
  }
  