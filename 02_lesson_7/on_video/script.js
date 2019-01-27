class GotSevrice {

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
}

const got = new GotSevrice();

got.getAllCharacters()
  .then(res => {
    res.forEach( item => console.log(item.name));
  });
  
got.getCharacter(130)
  .then(res => console.log(res));




// getResource('https://jsonplaceholder.typicode.com/todos/10000')
//   .then((res) => console.log('Success', res))
//   .catch(error => console.error(error));


// let url = 'https://jsonplaceholder.typicode.com/posts/',
//     data = {username: 'example'};

// fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type':'aplication/json'
//     }
//   }) // запрос
//   .then((response) => response.json())
//   .then((myJson) => console.log('Success', myJson))
//   .catch(error => console.error('Eror', error));