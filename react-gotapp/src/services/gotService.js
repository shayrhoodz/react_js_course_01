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
  async getAllCharacters() {
    const res = await this.getResource('/characters?page=5&pageSize=10');
    return res.map(this._transformCharacter);
  }
  async getCharacter(id) {
    const character = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(character);
  }
  async getAllHouses() {
    const res = await this.getResource('/houses');
    return res.map(this._transformHouse);
  }
  async getHouse(id) {
    const house = await this.getResource(`/houses/${id}`);
    return this._transformHouse(house);
  }
  async getAllBooks() {
    const res = await this.getResource('/books');
    return res.map(this._transformHouse);
  }
  async getBook(id) {
    const book = await this.getResource(`/books/${id}`);
    return this._transformBook(book);
  }
  _transformCharacter(char) {
    return {
      name: char.name,
      gender: char.gender,
      born: char.born,
      died: char.died,
      culture: char.culture,
      id: char.url.replace(/https:\/\/www.anapioficeandfire.com\/api\/characters\//,"")
    }
  }

  _transformHouse(house) {
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
      overlord: house.overlord,
      ancestralWeapons: house.ancestralWeapons
    }
  }

  _transformBook(book) {
    return {
      name: book.name,
      numberOfPages: book.numberOfPages,
      publiser: book.publiser,
      released: book.released
    }
  }
}

// const got = new s));


