

/**
 * Created by vladimir on 12/6/13.
 */
/**
 *
 * @param {number} num Число, которое возводим в степень
 * @param {number} pow number Показатель степени
 */
function power(num, pow) {
  if (typeof(num) === 'number' && typeof(pow) === 'number') {
    var res = 1;
    if (pow < 0) {
      num = 1 / num;
      pow = -pow;
    }
    while (pow > 0) {
      if (pow % 2 === 0)
      {
        pow = pow / 2;
        num = num * num;
      }
      else {
        res = res * num;
        pow--;
      }
    }
    console.log(res);
  }
  else {
    console.error('Несоответствие типов');
  }
}

power(2, 4);
