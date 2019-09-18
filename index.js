// Import stylesheets
import './style.scss';



const tooltip = document.querySelector('.tooltip');


setInterval(() => {
  let d = new Date();
  tooltip.innerHTML = `${d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes()}:${d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds()}`;

}, 499)