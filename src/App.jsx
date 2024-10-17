import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  const books = [
    {
      id: 1,
      title: "Il Signore degli Anelli",
      description:
        "Una saga epica ambientata nella Terra di Mezzo, dove la lotta tra il bene e il male si gioca su una scala mitica.",
      price: 19.99,
      coverImage:
        "https://m.media-amazon.com/images/I/71gjt76M3xL._AC_UF1000,1000_QL80_.jpg",
      details:
        "Scritto da J.R.R. Tolkien, 'Il Signore degli Anelli' è un'opera che segue la missione di Frodo Baggins e dei suoi compagni per distruggere l'Unico Anello e salvare il mondo dalla tirannia di Sauron.",
    },
    {
      id: 2,
      title: "1984",
      description:
        "Un classico distopico che esplora i temi del controllo totalitario e della sorveglianza.",
      price: 14.99,
      coverImage:
        "https://img.chiarelettere.it/images/9788832962680_0_0_600_0.jpg",
      details:
        "'1984', di George Orwell, racconta la storia di Winston Smith in un mondo governato dal Partito, dove ogni aspetto della vita è monitorato e la libertà di pensiero è repressa.",
    },
    {
      id: 3,
      title: "Il Codice Da Vinci",
      description:
        "Un thriller che combina mistero, arte e storia con una caccia al tesoro a livello mondiale.",
      price: 12.99,
      coverImage:
        "https://m.media-amazon.com/images/I/719CeDchSsL._AC_UF1000,1000_QL80_.jpg",
      details:
        "Scritto da Dan Brown, 'Il Codice Da Vinci' segue il simbologo Robert Langdon mentre tenta di svelare un antico mistero nascosto nelle opere d'arte di Leonardo da Vinci.",
    },
    {
      id: 4,
      title: "Orgoglio e Pregiudizio",
      description:
        "Un romanzo classico che esplora l'amore e le classi sociali nella società inglese del XVIII secolo.",
      price: 9.99,
      coverImage:
        "https://m.media-amazon.com/images/I/715yzkt2tLL._AC_UF1000,1000_QL80_.jpg",
      details:
        "Scritto da Jane Austen, 'Orgoglio e Pregiudizio' racconta la storia di Elizabeth Bennet e della sua complessa relazione con il riservato e ricco Mr. Darcy.",
    },
    {
      id: 5,
      title: "Harry Potter e la Pietra Filosofale",
      description:
        "Il primo libro della saga di Harry Potter, in cui un giovane scopre di essere un mago.",
      price: 15.99,
      coverImage:
        "https://m.media-amazon.com/images/I/718kKmxQBWL._AC_UF1000,1000_QL80_.jpg",
      details:
        "Scritto da J.K. Rowling, questo libro introduce il mondo magico di Hogwarts e segue Harry Potter mentre scopre la sua identità magica e affronta le prime sfide della sua nuova vita.",
    },
  ];

  return (
    <>
      <Header />
      <Main books={books} />
      <Footer />
    </>
  );
}

export default App;
