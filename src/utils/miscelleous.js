import WOW from 'wowjs';

export const LOGGER = (key, value) => {
  // eslint-disable-next-line no-console
  console.log(key, value);
};

export const useWOW = () => {
  const initWow = () => {
    const wow = new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: false,
      live: true,
      scrollContainer: null,
    });
    wow.init();
  };
  return { initWow };
};
