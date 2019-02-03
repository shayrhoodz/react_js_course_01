export default class GotSevrice {

  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api'   // _ это статичные данные
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
          
    if (!res.ok) { // ok - ответ от сервера если хоть что то получили
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    
    return await res.json();
  };
  getAllCharacters = async () => {
    const res = await this.getResource('/characters?page=5&pageSize=10');
    return res.map(this._transformCharacter);
  }
  getCharacter = async (id) => {
    const character = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(character);
  }
  getAllHouses = async () => {
    const res = await this.getResource('/houses');
    return res.map(this._transformHouse);
  }
  getHouse = async (id) => {
    const house = await this.getResource(`/houses/${id}`);
    return this._transformHouse(house);
  }
  getAllBooks = async () => {
    const res = await this.getResource('/books');
    return res.map(this._transformBook);
  }
  getBook = async (id) => {
    const book = await this.getResource(`/books/${id}`);
    return this._transformBook(book);
  }
  _transformCharacter(char) {
    return {
      name: char.name || "no data",
      gender: char.gender || "no data",
      born: char.born || "no data",
      died: char.died || "no data",
      culture: char.culture || "no data",
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
      ancestralWeapons: house.ancestralWeapons,
      id: house.url.replace(/https:\/\/www.anapioficeandfire.com\/api\/houses\//,"")
    }
  }

  _transformBook(book) {
    return {
      name: book.name,
      numberOfPages: book.numberOfPages,
      publisher: book.publisher,
      released: book.released,
      id: book.url.replace(/https:\/\/www.anapioficeandfire.com\/api\/books\//,"")
    }
  }
}

// const got = new s));


