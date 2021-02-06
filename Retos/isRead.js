const myCollection = {
  books: [
    {
      title: 'Cien Años de Soledad',
      author: 'Gabriel García Márquez',
      read: true
    },
    {
      title: 'Do Androids Dream of Electric Sheep',
      author: 'Phillip K. Dick',
      read: false
    }]
};


/**
 * check if the book has been read
 *
 * @param {object} book (object with the title, author and read attributes)
 * 
 * @returns {string} indicates if the book has been read
 */
const isRead = (book) => {
  if (book.read) return `Ya has leido el ${book.title} de ${book.author}`
  return `Aun necesitas leer ${book.title} de ${book.author}`
}