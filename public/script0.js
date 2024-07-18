console.log(0);

// Создаем новый скрипт
const script = document.createElement('script');
script.src = './script1.js';
script.async = false; // Выполняется в порядке загрузки

// Событие завершения загрузки скрипта
script.onload = () => {
  console.log('script1.js loaded');
  // Здесь можно добавить логику, которая должна выполниться после загрузки script1.js
  const event = new Event('script1Loaded');
  window.dispatchEvent(event);
};

// Вставляем скрипт в начало <head>
document.head.insertBefore(script, document.head.firstChild);

// Ждем завершения загрузки script1.js
window.addEventListener('script1Loaded', () => {
  console.log('Continuing execution after script1.js loaded');
  // Логика для выполнения после script1.js
});