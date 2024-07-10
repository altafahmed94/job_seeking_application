export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  const options = {
    name : "altafahmedcookie",
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    secure : true, 
    httpOnly: true, // Set httpOnly to true
    sameSite : 'none' ,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
