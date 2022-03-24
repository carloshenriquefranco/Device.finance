const Modal = {
    toggle() {
      document.querySelector(".modal-overlay").classList.add("active");
    },
  };
  const transaction= [
      {
          id:1,
          description:'Luz',
          amount: -50000,
          date: '23/01/2022'
      },
      {
        id:2,
        description:'compra',
        amount: 500000,
        date: '23/01/2022'
    },
    {
        id:3,
        description:'Agua',
        amount: -20000,
        date: '23/01/2022'
    },
]
    for (let inicial = 0; inicial < transaction.length; inicial++) {
        console.log(transaction[inicial].description)     
    }
