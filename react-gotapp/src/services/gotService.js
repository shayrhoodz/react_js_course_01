export default class GotSevrice {

  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api'   // _ это статичные данные
  }

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
          
    if (!res.ok) { // ok - ответ от сервера если хоть что то получили
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    
    return await res.json();
  };
  getAllCharacters() {
    return this.getResource('/characters?page=5&pageSize=10');
  }
  getCharacter(id) {
    return this.getResource(`/characters/${id}`);
  }
  getAllHouses() {
    return this.getResource('/houses');
  }
  getHouse(id) {
    return this.getResource(`/houses/${id}`);
  }
  getAllBooks() {
    return this.getResource('/books');
  }
  getBook(id) {
    return this.getResource(`/books/${id}`);
  }
}

const got = new GotSevrice();

got.getAllCharacters()
  .then(res => {
    res.forEach( item => console.log(item.name));
  });
  
got.getCharacter(130)
  .then(res => console.log(res));

got.getAllHouses()
.then(res => {
  res.forEach( item => console.log(item.name));
});

got.getHouse(1)
.then(res => console.log(res));

got.getAllBooks()
.then(res => {
  res.forEach( item => console.log(item.name));
});

got.getBook(1)
.then(res => console.log(res));


