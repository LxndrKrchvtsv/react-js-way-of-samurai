import dialogsReducer from "./dialogs-reducer.js";
import profileReducer from "./profile-reducer.js";
import sideBarReducer from "./sidebar-reducer.js";

let store = {
  _State: {
    profilePage: {
      PostData: [
        {id: 1, message: 'Do yourself way better!', like: 15},
        {id: 2, message: 'Let\'s go!', like: 10},
        {id: 3, message: 'Let\'s go! Y', like: 10},
        {id: 4, message: 'Let\'s go! E', like: 10},
        {id: 5, message: 'Let\'s go! P', like: 10},
        {id: 6, message: 'Let\'s go! OH', like: 10},
        {id: 7, message: 'Let\'s go! NEVER GIVE UP', like: 2021}
      ],
      newPostText: 'Never give up! Canada2021.'
    },

    dialogsPage: {
      Dialogs: [
        {id: 1, name: 'Dima', img: 'https:\/\/icdn.lenta.ru/images/2020/02/25/12/20200225122133261/detail_94bd195f0e4f6b887b5377e045742b76.jpg'},
        {id: 2, name: 'Darya', img: 'http:\/\/dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image'},
        {id: 3, name: 'Yarik', img: 'http:\/\/dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image'},
        {id: 4, name: 'Sofia', img: 'http:\/\/dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image'},
        {id: 5, name: 'Sasha', img: 'http:\/\/dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image'},
        {id: 6, name: 'Alexander', img: 'http:\/\/dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image'}
      ],

      Messages: [
        {message: 'Hi'},
        {message: 'How is your it-camasutra?'},
        {message: 'It\'s good!'},
        {message: 'YaY'}
      ],

      newMessageText: 'First message here!'
    },

    SideBar: {
      Friends: [
        {id: 1, name: 'Dima', img: 'https:\/\/icdn.lenta.ru/images/2020/02/25/12/20200225122133261/detail_94bd195f0e4f6b887b5377e045742b76.jpg'},
        {id: 2, name: 'Darya', img: 'http:\/\/dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image'},
        {id: 3, name: 'Yarik', img: 'http:\/\/dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image'},
        {id: 4, name: 'Sofia', img: 'http:\/\/dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image'},
        {id: 5, name: 'Sasha', img: 'http:\/\/dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image'},
        {id: 6, name: 'Alexander', img: 'http:\/\/dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image'}
      ]
    }
  },
  _callSubscriber() {
    console.log('State Chanched!');
  },

  getState() {
    //debugger;
    return this._State;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
      this._State.profilePage = profileReducer(this._State.profilePage, action);
      this._State.dialogsPage = dialogsReducer(this._State.dialogsPage, action);
      this._State.sideBar = sideBarReducer(this._State.sideBar, action);
      
      this._callSubscriber(this._State);
  }
};

export default store;
window.store = store;