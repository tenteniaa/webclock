import $ from 'jquery';
import moment from 'moment';
import './style/style.css';

const displayTime = () => {
    moment.locale('id');
    $('.time').text(moment().format('LTS'));
    $('.date').text(moment().format('LL'));
};
   
const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000);
};
   
updateTime();