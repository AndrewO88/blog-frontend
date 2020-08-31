import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ADMIN_AUTH_FEATURE_NAME, AdminAuthState} from './admin-auth.reducer';

const getFeature = createFeatureSelector<AdminAuthState>(ADMIN_AUTH_FEATURE_NAME);

export const getLoading = createSelector(
  getFeature,
  state => state.loading
);

export const getLoaded = createSelector(
  getFeature,
  state => state.loaded
);

export const getServerError = createSelector(
  getFeature,
  state => state.serverError
);

export const getAuthData = createSelector(
  getFeature,
  state => state.authData
);

export const getAccessToken = createSelector(
  getAuthData,
  // если фолс то вернет фолс, если тру то пойдет дальше и вернет то что лежит в значении
  authData => authData && authData.accessToken
);

export const isAuth = createSelector(
  getAccessToken,
  // если он есть то верну тру
  accessToken => !!accessToken
);
