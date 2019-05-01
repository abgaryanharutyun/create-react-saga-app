export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const { user, domainTracking } = state.entities;

    const serializedState = JSON.stringify({
      user,
      domainTracking,
    });
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // ignore errors
  }
};

export const emptyState = () => {
  localStorage.setItem('state', null);
};

export const getAccessToken = () => {
  const state = loadState();
  return (state && state.user && state.user.accessToken) || '';
};

export const getDomainTracking = () => {
  const state = loadState();
  return (state && state.domainTracking && state.domainTracking) || '';
};