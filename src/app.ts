import { MainScreen } from './MainScreen';
import { characterAssetsStorage } from './components/storage/CharacterAssetsStorage';

characterAssetsStorage.initStorage();
setTimeout(() => {
    new MainScreen();
}, 3000);