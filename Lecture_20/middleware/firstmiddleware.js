function m1(req, res, next) {
  console.log('running middleware 1..........');
  req.userId="4";
  next();
  console.log('after next 1');
}

function m2(req, res, next) {
  console.log('running middleware 2..........');
  console.log(req.userId);
  req.isAdmin = true;
  return next();
  console.log('after next 2');
}

module.exports.m1=m1;
module.exports.m2=m2;   