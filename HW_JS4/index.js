let shoppingList = [
  { name: "Orange", quantity: "5", purchased: true },
  { name: "potato", quantity: "25", purchased: false },
  { name: "milk", quantity: "1", purchased: true },
  { name: "bread", quantity: "1", purchased: false },
];

//1. Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
function showList() {
  console.log("NeKuplenniye");
  shoppingList.forEach((item) => {
    if (!item.purchased) {
      console.log(`${item.name} - quantity: ${item.quantity}`);
    }
  });
  console.log("Kuplenniye");
  shoppingList.forEach((item) => {
    if (item.purchased) {
      console.log(`${item.name} - quantity: ${item.quantity}`);
    }
  });
}

// 2. Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке,а не добавлять новую.
function addItem() {
  let item = shoppingList.find((item) => item.name === name);
  if (item) {
    item.quantity += quantity;
  } else {
    shoppingList.push({ name: name, quantity: quantity, purchased: false });
  }
}

// 3. Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
function purchaseProduct(productName) {
  let item = shoppingList.find((item) => item.name === productName);

  if (item) {
    product.purchased = true;
    console.log(`Produkt "${productName}" otmrecen kak kuplenniy.`);
  } else {
    console.log(`Produkt "${productName}" ne nayden v spiske.`);
  }
}

showList();
addItem("bread", 2);
addItem("tomato", 1);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let receipt = [
  { product: "Apple", quantity: 5, pricePerUnit: 20 },
  { product: "bread", quantity: 2, pricePerUnit: 15 },
  { product: "milk", quantity: 1, pricePerUnit: 50 },
  { product: "cheese", quantity: 1, pricePerUnit: 100 },
];

// 1. Функция для распечатки чека на экран
function printReceipt() {
  console.log("cek:");
  receipt.forEach((item) => {
    console.log(
      `${item.product} (Kol-vo: ${item.quantity}, cena za edinicu: ${item.pricePerUnit})`
    );
  });
}

// 2. Функция для подсчета общей суммы покупки
function calculateTotal() {
  let total = 0;
  receipt.forEach((item) => {
    total += item.quantity * item.pricePerUnit;
  });
  return total;
}

// 3. Функция для получения самой дорогой покупки
function getMostExpensivePurchase() {
  let mostExpensive = receipt[0];

  receipt.forEach((item) => {
    if (
      item.quantity * item.pricePerUnit >
      mostExpensive.quantity * mostExpensive.pricePerUnit
    ) {
      mostExpensive = item;
    }
  });

  return mostExpensive;
}

// 4. Функция для подсчета средней стоимости одного товара
function calculateAveragePrice() {
  let totalPrice = 0;
  let totalQuantity = 0;

  receipt.forEach((item) => {
    totalPrice += item.quantity * item.pricePerUnit;
    totalQuantity += item.quantity;
  });

  return totalPrice / totalQuantity;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
let styles = [
  { name: "color", value: "red" },
  { name: "font-size", value: "20px" },
  { name: "text-align", value: "center" },
  { name: "text-decoration", value: "underline" },
];

function applyStyles(stylesArray, text) {
  let styleString = "";
  for (let i = 0; i < stylesArray.length; i++) {
    styleString += `${stylesArray[i].name}: ${stylesArray[i].value};`;
  }

  document.write(`<p style="${styleString}">${text}</p>`);
}

applyStyles(styles, "Hello, world!");

////////////////////////////////////////////////////////////////////////////////////////////////////

const auditoriums = [
  { name: "Auditoriya 101", seats: 15, faculty: "Fizika" },
  { name: "Auditoriya 102", seats: 20, faculty: "Ximiya" },
  { name: "Auditoriya 103", seats: 10, faculty: "Math" },
  { name: "Auditoriya 104", seats: 18, faculty: "fizika" },
  { name: "Auditoriya 105", seats: 12, faculty: "Inforrmatika" },
];

// 1. Вывод всех аудиторий
function showAllAuditoriums(auditoriums) {
  auditoriums.forEach((aud) =>
    console.log(`${aud.name} - ${aud.seats} seats, fakultet: ${aud.faculty}`)
  );
}

// 2. Вывод аудиторий для указанного факультета
function showAuditoriumsByFaculty(auditoriums, faculty) {
  auditoriums
    .filter((aud) => aud.faculty === faculty)
    .forEach((aud) =>
      console.log(`${aud.name} - ${aud.seats} mest, fakultet: ${aud.faculty}`)
    );
}

// 3. Вывод аудиторий, подходящих для группы
function showAuditoriumsForGroup(auditoriums, group) {
  auditoriums
    .filter(
      (aud) => aud.faculty === group.faculty && aud.seats >= group.students
    )
    .forEach((aud) =>
      console.log(`${aud.name} - ${aud.seats} mest, fakultet: ${aud.faculty}`)
    );
}

// 4. Сортировка аудиторий по количеству мест
function sortAuditoriumsBySeats(auditoriums) {
  auditoriums.sort((a, b) => a.seats - b.seats);
  showAllAuditoriums(auditoriums);
}

// 5. Сортировка аудиторий по названию
function sortAuditoriumsByName(auditoriums) {
  auditoriums.sort((a, b) => a.name.localeCompare(b.name));
  showAllAuditoriums(auditoriums);
}

// Пример группы
const group = { name: "Qruppa 1", students: 12, faculty: "Fizika" };

// Вызов функций
console.log("Vse auditorii:");
showAllAuditoriums(auditoriums);

console.log("\nAuditorii dla fakulteta 'Fizika':");
showAuditoriumsByFaculty(auditoriums, "Fizika");

AshowAuditoriumsForGroup(auditoriums, group);

console.log("\nSortirovka auditorii po kol-vo mest:");
sortAuditoriumsBySeats(auditoriums);

console.log("\nSortirovka auditoriy po nazvaniyu:");
sortAuditoriumsByName(auditoriums);
