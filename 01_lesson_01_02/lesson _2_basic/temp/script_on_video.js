function button() {
  return 'button';
}


// export default class Slider { // если экспорт только 1 класса
class Slider { // класс указывается с большой буквы
  constructor(width, height, count) {
    this.width = width;
    this.height = height;
    this.count = count;
  }
  nextSlider() { // метод
    console.log('Moving forward')
  }
  prevSlider() {
    console.log('Moving back')
  }
  whoAmI() {
    console.log(this.width, this.height, this.count);
  }
}


class AutoSlider extends Slider { // наследование другого класса extends
  constructor(width, height, count, auto) {
    super(width, height, count); // обязательный элемент super будет браться от родителя
    this.auto = auto;
  }
  play() {
    console.log(`Autoplay: ${this.auto}`);
  }
}

// const slider = new AutoSlider(500, 500, 4, true);
// slider.whoAmI(); // этот метод пришел из родительского класса Slider
// slider.play();

// экпортируем из файла, ";" обязательная
// export {button, Slider};
// export {button as btn, Slider}; // можно задать другое имя с помощью as
export {button};

export default Slider; // экспорт по умолчанию, должен быть только один в файле


// const slider = new Slider(600, 400, 5),
//       someSlider = new Slider(300, 450, 10);
// slider.whoAmI();
// someSlider.whoAmI();