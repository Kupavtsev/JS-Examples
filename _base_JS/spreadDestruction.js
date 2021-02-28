//https://learn.javascript.ru/destructuring
'use strict';

let options = {
  title: "Меню",
  width: 100,
  height: 200
};

let {title, width, height} = options;

alert(title);  // Меню
alert(width);  // 100
alert(height); // 200


'use strict';

let options = {
  title: "Меню",
  width: 100,
  height: 200
};

let {width: w, height: h, title} = options;

alert(title);  // Меню
alert(w);      // 100
alert(h);      // 200


'use strict';

let options = {
  title: "Меню"
};

let {width=100, height=200, title} = options;

alert(title);  // Меню
alert(width);  // 100
alert(height); // 200


'use strict';

let options = {
  title: "Меню"
};

let {width:w=100, height:h=200, title} = options;

alert(title);  // Меню
alert(w);      // 100
alert(h);      // 200

'use strict';

let block = {
  width: 170,
  height: 90,
  price: 290,
  type: 'solid'
}

let {width, height, ...rest} = block;


'use strict';
let block = {
  width: 170,
  height: {
    value: 50,
    unit: 'cm'
  }
}

let {
  width,
  height: {value, unit}
} = block;


'use strict';
let person = {
  name: 'Sam',
  years: 25
}

let { name, years: age, height=null } = person;