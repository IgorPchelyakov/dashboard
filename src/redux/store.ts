import {
  Action,
  ThunkAction,
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';
import authReducer from './features/login/login.slice';
import employeesReducer from './features/employees/employees.slice';
import newsReducer from './features/news/news.slice';
import mediaReducer from './features/media/media.slice';
import bannerReducer from './features/banners/banners.slice';
import countersReducer from './features/counters/counters.slice';
// Kyiv
import newsBerezanReducer from './features/news/regionsNews/Kyiv/berezan.slice';
import newsBilacerkvaReducer from './features/news/regionsNews/Kyiv/bilacerkva.slice';
import newsBoryspilReducer from './features/news/regionsNews/Kyiv/boryspil.slice';
import newsBoyarkaReducer from './features/news/regionsNews/Kyiv/boyarka.slice';
import newsBrovaryReducer from './features/news/regionsNews/Kyiv/brovary.slice';
import newsBuchaReducer from './features/news/regionsNews/Kyiv/bucha.slice';
import newsFastivReducer from './features/news/regionsNews/Kyiv/fastiv.slice';
import newsIrpinReducer from './features/news/regionsNews/Kyiv/irpin.slice';
import newsKyivReducer from './features/news/regionsNews/Kyiv/kyiv.slice';
import newsObukhivReducer from './features/news/regionsNews/Kyiv/obukhiv.slice';
import newsPereyaslavReducer from './features/news/regionsNews/Kyiv/pereyaslav.slice';
import newsSkvyraReducer from './features/news/regionsNews/Kyiv/skvyra.slice';
import newsSlavutychReducer from './features/news/regionsNews/Kyiv/slavutych.slice';
import newsVasylkivReducer from './features/news/regionsNews/Kyiv/vasylkiv.slice';
import newsVyshhorodReducer from './features/news/regionsNews/Kyiv/vyshhorod.slice';
import newsVyshneveReducer from './features/news/regionsNews/Kyiv/vyshneve.slice';
import newsYagotynReducer from './features/news/regionsNews/Kyiv/yagotyn.slice';
// Odesa Region
import newsBilgorodDnistrovskyReducer from './features/news/regionsNews/Odesa/bilgorodDnistrovsky.slice';
import newsChornomorskReducer from './features/news/regionsNews/Odesa/chornomorsk.slice';
import newsIzmailReducer from './features/news/regionsNews/Odesa/izmail.slice';
import newsKiliyaReducer from './features/news/regionsNews/Odesa/kiliya.slice';
import newsOdesaReducer from './features/news/regionsNews/Odesa/odesa.slice';
import newsPodilskReducer from './features/news/regionsNews/Odesa/podilsk.slice';
import newsYouzhneReducer from './features/news/regionsNews/Odesa/youzhne.slice';
// Dnipro
import newsDniproReducer from './features/news/regionsNews/Dnipro/dnipro.slice';

import { api } from './services/api';
import { listenerMiddleware } from '@/middleware/auth';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
  employees: employeesReducer,
  news: newsReducer,
  counters: countersReducer,
  //Kyiv Region
  newsBerezan: newsBerezanReducer,
  newsBilacerkva: newsBilacerkvaReducer,
  newsBoryspil: newsBoryspilReducer,
  newsBoyarka: newsBoyarkaReducer,
  newsBrovary: newsBrovaryReducer,
  newsBucha: newsBuchaReducer,
  newsFastiv: newsFastivReducer,
  newsIrpin: newsIrpinReducer,
  newsKyiv: newsKyivReducer,
  newsObukhiv: newsObukhivReducer,
  newsPereyaslav: newsPereyaslavReducer,
  newsSkvyra: newsSkvyraReducer,
  newsSlavutych: newsSlavutychReducer,
  newsVasylkiv: newsVasylkivReducer,
  newsVyshhorod: newsVyshhorodReducer,
  newsVyshneve: newsVyshneveReducer,
  newsYagotyn: newsYagotynReducer,
  // Odesa Region
  newsBilgorodDnistrovsky: newsBilgorodDnistrovskyReducer,
  newsChornomorsk: newsChornomorskReducer,
  newsIzmail: newsIzmailReducer,
  newsKiliya: newsKiliyaReducer,
  newsOdesa: newsOdesaReducer,
  newsPodilsk: newsPodilskReducer,
  newsYouzhne: newsYouzhneReducer,
  // DniproRegion
  newsDnipro: newsDniproReducer,
  media: mediaReducer,
  banners: bannerReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .prepend(listenerMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
