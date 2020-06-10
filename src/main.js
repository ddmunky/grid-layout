import './scss/app.scss';
import App from './app';
import animate from './utilities/Animations';

const app = () => {
    document.getElementById('app').appendChild(App());
    animate();
};
// Load app
app();
