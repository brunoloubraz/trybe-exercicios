let order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

function customerInfo(order) {
  // Adicione abaixo as informações necessárias.
  console.log('Olá, ' + order.order.delivery.deliveryPerson + ', enterga para: ' + order.name + ' Telefone: ' + order.phoneNumber + ', ' + order.address.street + ', Nº' + order.address.number + ', AP: ' + order.address.apartment ); 
}

customerInfo(order);

function orderModifier(order) {
  // Adicione abaixo as informações necessárias.
order.name = 'Luiz Silva';
order.payment  = 50;

console.log('Olá, ' + order.name + ' o valor total do seu pedido de '+ Object.keys(order.order.pizza) + ' e '+ order.order.drinks.coke.type + ' é R$' + order.payment);
}

// Outro modo de fazer tbm de uma maneiras mais "clean"

// let newBuyer = order.name = 'Luiz Silva';
// let newTotal = order.payment.total = '50';
// let pizzas = Object.keys(order.order.pizza);
// let drinks = order.order.drinks.coke.type;

// console.log('Olá ' + newBuyer + ', o total do seu pedido de ' + pizzas[0] + ', ' + pizzas[1] + ' e ' + drinks + ' é R$ ' + newTotal + ',00.'); // Exiba a mensagem desejada


orderModifier(order);