const authPage = (valid) => {
  return (req, res, next) => {
    const userRole = req.body.role;
    if (!valid.includes(userRole)) {
      return res.status(401).json('You do not have the permission');
    }
    next();
  };
};

const authCourse = (req, res, next) => {
  const courseNumber = 1 * req.params.number;
  if (!req.body.courses.includes(courseNumber)) {
    return res.status(401).json('You do not have this course!!');
  }
  next();
};

module.exports = { authPage, authCourse };
