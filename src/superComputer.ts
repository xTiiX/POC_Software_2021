enum signType {
  plus = '+',
  minus = '-',
  multi = '*',
  div = '/',
  mod = '%'
}

type Callback = {
  (err: Error, result?: undefined): Error,
  (err: null, result: number): number
};

function callback(err: Error, result?: undefined): Error;
function callback(err: null, result: number): number;

function callback(err: Error | null, result: number): Error | number {
  if (err) {
    console.log(err.message);
    return err;
  }
  console.log(`Result: ${result}`);
  return result;
}

function superComputer(nb1: number, sign: string, nb2: number, cb) {
  let res: number;
  let err;
  switch (sign) {
    case signType.plus: {
      try { res = nb1 + nb2; } catch (e) { err = e; }
      break;
    }
    case signType.minus: {
      try { res = nb1 - nb2; } catch (e) { err = e; }
      break;
    }
    case signType.multi: {
      try { res = nb1 * nb2; } catch (e) { err = e; }
      break;
    }
    case signType.div: {
      try { res = nb1 / nb2; } catch (e) { err = e; }
      break;
    }
    case signType.mod: {
      try { res = nb1 % nb2; } catch (e) { err = e; }
      break;
    }
    default:
      err = 0;
  }
  return cb(err, res);
}

superComputer(12, '+', 3, callback);
superComputer(100, '/', 0, callback);
